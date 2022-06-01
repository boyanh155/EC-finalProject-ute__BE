//Randomly generate a fake allTables JSON file

const fs = require("fs");
const numOrder = Math.floor(Math.random() * 50) + 50; //50-100

let

= [];
for (i = 0; i < numOrder; i++) {
    const quantity = Math.floor(Math.random() * 5); //
    const price = Math.floor(Math.random() * 500000)
    const name = ["Flyco FH1610VN", "Flyco AD1941VN", "Flyco TH4140VN", "Matio QP123DA"][Math.floor(Math.random() * 4)]
    fakeOrder.push({
        "name": name,
        price,
        quantity
    });
}
let data = JSON.stringify({
    orders: fakeOrder,
});
fs.writeFileSync(__dirname + "/allOrder.json", data);