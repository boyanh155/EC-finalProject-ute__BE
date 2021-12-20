//Randomly generate a fake allTables JSON file

const fs = require("fs");
const numTables = Math.floor(Math.random() * 10) + 16; //16-27

let fakeTables = [];
for (i = 1; i < numTables; i++) {
    const chairs = ["Vip", "Standard"][Math.floor(Math.random() * 2)]; //0-1
    const name = `Table ${i}`;
    const location = ["Floor 1", "Floor 2", "Ground"][
        Math.floor(Math.random()) * 3
    ]; //0-2
    fakeTables.push({
        name: name,
        capacity: chairs,
        isAvailable: true,
        location: location,
    });
}
let data = JSON.stringify({
    tables: fakeTables,
});
fs.writeFileSync(__dirname + "/allTable.json", data);