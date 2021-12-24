const mongoose = require("mongoose");

const Day = require("../../../models/Day").model;

class availabilityController {
    //[GET] api/auth/book/availability
    //@route GET api/auth/book/availability
    //@desc availability routes access
    //@access Public
    available(req, res) {
        // console.log(req.body);
        //get tables in selected day
        const dateTime = new Date(req.body.date);
        //search
        Day.find({ date: dateTime }, (err, data) => {
            //search search
            if (!err) {
                if (data.length > 0) {
                    //Record found
                    console.log();
                    res.status(200).send({
                        success: true,
                        data: data[0],
                        message: "Record date exists.",
                    });
                } else {
                    //Record doesn't found
                    //date does exist, need to create it
                    //read data by allTable.js
                    const { allTables } = require("../../../data/allTable");
                    console.log(allTables);
                    const day = new Day({
                        date: dateTime,
                        tables: allTables,
                    });
                    day.save((err) => {
                        if (err) {
                            res.status(400).send({
                                success: false,
                                message: `Cant saving new data (Day) : ${err.message}`,
                            });
                        } else if (!err) {
                            //check again and return data
                            Day.find({ date: dateTime }, (err, data) => {
                                if (err) {
                                    res.status(400).send({
                                        success: false,
                                        message: `Something wrong when create record(Day) : ${err.message}`,
                                    });
                                } else {
                                    res.status(200).send({
                                        success: true,
                                        data: data[0],
                                        message: "Create record success(Day)",
                                    });
                                }
                            });
                        }
                    });
                }
            }
            //search error
            else {
                res.status(400).send({
                    success: false,
                    message: `Could not search for date : ${err.message}`,
                });
            }
        });
    }
}

module.exports = new availabilityController();