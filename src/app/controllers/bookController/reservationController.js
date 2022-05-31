const mongoose = require("mongoose");

const Day = require("../../../models/Day").model;
const Reservation = require("../../../models/Reservation").model;

//Parameter
// date
// table
// name
// phone
// email
class reservationController {
    //[POST] api/auth/book/reserve
    //@route GET api/auth/book/reserve
    //@desc reserve table process
    //@access Public
    reservation(req, res) {
        const { date, table: tableR, name, phone } = req.body;
        // console.log(req.body)
        //get tables in selected day
        Day.find({ date }, (err, data) => {
            if (!err) {
                if (data.length > 0) {
                    let days = data[0];
                    //iterating table list
                    days.tables.forEach((table) => {
                        //get table
                        if (table._id == tableR) {
                            //correct table
                            //add reservation info when everything is good
                            table.reservation = new Reservation({
                                name,
                                phone,
                                table,
                            });
                            //table was reserved
                            table.isAvailable = false;
                            //save reserve info into data
                            days.save((err) => {
                                if (!err) {
                                    res.status(200).send({
                                        success: true,
                                        data: days,
                                        message: `Reservation is successful`,
                                    });
                                } else {
                                    res.status(400).send({
                                        success: false,
                                        message: `Could not reserve : ${err}`,
                                    });
                                }
                            });
                        }
                    });
                } else {
                    res.status(400).send({
                        success: false,
                        message: `Data found but nothing here : ${err}`,
                    });
                }
            } else {
                res.status(400).send({
                    success: false,
                    message: `Cant found selected day : ${err.message}`,
                });
            }
        });
    }
}

module.exports = new reservationController();