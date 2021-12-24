//Randomly generate a fake allTables JSON file

const Staff = require("../models/Staff").model;
const fs = require("fs");
const numTables = Math.floor(Math.random() * 10) + 16; //16-27

let fakeTables = [];
for (i = 1; i < numTables; i++) {
    const chairs = ["Vip", "Standard"][Math.floor(Math.random() * 2)]; //0-1
    const name = `Table ${i}`;
    const staff = [
        Staff({
            idStaff: "01",
            nameStaff: `Nguyen Thai Hung 01`,
            role: "leader",
        }),
        Staff({
            idStaff: "02",
            nameStaff: `Nguyen Thai Hung 02`,
            role: "staff",
        }),
        Staff({
            idStaff: "03",
            nameStaff: `Nguyen Thai Hung 03`,
            role: "staff",
        }),
        Staff({
            idStaff: "04",
            nameStaff: `Nguyen Thai Hung 04`,
            role: "admin",
        }),
        Staff({
            idStaff: "01",
            nameStaff: `Le Hoang Loc 01`,
            role: "leader",
        }),
        Staff({
            idStaff: "02",
            nameStaff: `Le Hoang Loc 02`,
            role: "staff",
        }),
        Staff({
            idStaff: "03",
            nameStaff: `Le Hoang Loc 03`,
            role: "staff",
        }),
        Staff({
            idStaff: "04",
            nameStaff: `Le Hoang Loc 04`,
            role: "admin",
        }),
    ][Math.floor(Math.random() * 8)]; //0 - 7
    const location = ["Floor 1", "Floor 2", "Ground"][
        Math.floor(Math.random()) * 3
    ]; //0-2
    fakeTables.push({
        name: name,
        capacity: chairs,
        isAvailable: true,
        location: location,
        staff: staff,
    });
}
let data = JSON.stringify({
    tables: fakeTables,
});
fs.writeFileSync(__dirname + "/allTable.json", data);