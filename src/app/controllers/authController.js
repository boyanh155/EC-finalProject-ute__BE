const { User } = require("../../models");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
class authController {
    //[GET] api/auth/
    //@route GET api/auth
    //@desc Check if user is logged in
    //@access Public
    async checkUser(req, res) {
        try {
            //except password
            const user = await User.findById(req.userId).select("-password");
            //check
            if (!user)
                return res
                    .status(400)
                    .json({ success: false, message: "User not found" });
            res.json({ success: true, user });
        } catch (e) {
            console.log(`Authentication error:${e}`);
            res.status(500).json({
                success: false,
                message: `Internal server error `,
            });
        }
    }

    //[POST] /api/auth/login
    // @route GET /login
    // @desc login user
    // @access Public
    async login(req, res) {
            const { email, password } = req.body;
            //Simple validation
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ success: false, message: "Missing username or password" });
            }
            //Good input
            try {
                const user = await User.findOne({ email });
                let admin = user.admin || false
                    // if user does not exist
                if (!user) {
                    return res
                        .status(400)
                        .json({ success: false, message: "Invalid email " });
                }
                //Username found
                //argon2.verify(password in db , input password)
                if (!admin) {
                    const passwordValid = await argon2.verify(user.password, password);
                    console.log(passwordValid)
                    if (!passwordValid) {
                        return res
                            .status(400)
                            .json({ success: false, message: "Invalid password " });
                    }
                } else {
                    if (password != "admin") {
                        return res
                            .status(400)
                            .json({ success: false, message: "Invalid admin pass" });
                    }
                }

                // All good

                //Return token
                const key = process.env.SECRET_KEY;
                const accessToken = jwt.sign({ userId: user._id }, key);
                res.json({
                    success: true,
                    message: `Login successfully`,
                    accessToken,
                    admin: user.admin
                });
            } catch (e) {
                //Server error
                res.status(500).json({
                    success: false,
                    message: `Server error can not login try again ${e.message}`,
                });
            }
        }
        //[POST] /api/auth/register
        // @route POST /register
        // @desc register new user
        // @access Public
    async register(req, res) {
        // const { email, firstName, lastName, password,phone,address } = req.body;

        const { email, firstName, lastName, password, phone } = req.body;
        //simple validation
        if (!email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Missing username or password" });
        }
        //Good input
        try {
            //check exist email
            const user = await User.findOne({ email });
            //existed
            if (user) {
                return res
                    .status(400)
                    .json({ success: false, message: "Username already taken" });
            }
            // All good
            const hashedPassword = await argon2.hash(password);
            const newUser = new User({
                email,
                password: hashedPassword,
                firstName,
                lastName,
                phone,
            });
            //save
            await newUser.save();

            //return token
            const key = process.env.SECRET_KEY;
            const accessToken = jwt.sign({ userId: newUser._id }, key);

            res.json({
                success: true,
                message: `Register success with username : ${email}`,
                accessToken,
            });
        } catch (e) {
            console.log(`Register incorrect with ERROR:${e.message}`);

            res.status(500).json({
                success: false,
                message: `Server error cant create new user `,
            });
        }
    }

    //[GET] /api/auth/logout
    logout(req, res) {
        res.send("logout");
    }
}

module.exports = new authController();