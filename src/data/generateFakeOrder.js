//Randomly generate a fake allTables JSON file

const InlineItemModel = require("../models/InlineItem").model;
const fs = require("fs");
const numTables = Math.floor(Math.random() * 10) + 16; //16-27

let fakeTables = [];
for (i = 1; i < 40; i++) {
    const desc = "Nothing"; //0-1
    const phone = 786791782;
    const inlineItem = function() {
        let rawData = [
            InlineItemModel({ name: "Flyco TH4140VN", price: 483975, quantity: 1 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 206869, quantity: 3 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 150306, quantity: 1 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 37640, quantity: 0 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 309113, quantity: 2 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 403560, quantity: 2 }),
            InlineItemModel({ name: "Matio QP123DA", price: 310346, quantity: 1 }),
            InlineItemModel({ name: "Matio QP123DA", price: 426357, quantity: 0 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 223211, quantity: 0 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 74212, quantity: 2 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 106931, quantity: 1 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 320630, quantity: 1 }),
            InlineItemModel({ name: "Matio QP123DA", price: 93589, quantity: 1 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 453654, quantity: 4 }),
            InlineItemModel({ name: "Matio QP123DA", price: 165658, quantity: 0 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 78623, quantity: 4 }),
            InlineItemModel({ name: "Matio QP123DA", price: 74884, quantity: 3 }),
            InlineItemModel({ name: "Matio QP123DA", price: 120896, quantity: 0 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 252406, quantity: 2 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 87096, quantity: 2 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 341446, quantity: 1 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 338361, quantity: 4 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 372052, quantity: 3 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 316496, quantity: 3 }),
            InlineItemModel({ name: "Matio QP123DA", price: 63140, quantity: 4 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 130457, quantity: 4 }),
            InlineItemModel({ name: "Matio QP123DA", price: 61708, quantity: 0 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 395106, quantity: 2 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 443689, quantity: 3 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 167705, quantity: 4 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 271823, quantity: 3 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 261938, quantity: 4 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 315131, quantity: 3 }),
            InlineItemModel({ name: "Matio QP123DA", price: 497863, quantity: 2 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 242973, quantity: 4 }),
            InlineItemModel({ name: "Matio QP123DA", price: 32125, quantity: 2 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 30869, quantity: 3 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 410338, quantity: 0 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 361012, quantity: 1 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 438338, quantity: 4 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 368782, quantity: 3 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 485520, quantity: 3 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 78720, quantity: 3 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 38380, quantity: 0 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 256378, quantity: 1 }),
            InlineItemModel({ name: "Matio QP123DA", price: 210658, quantity: 2 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 91001, quantity: 3 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 138605, quantity: 3 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 483800, quantity: 1 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 209371, quantity: 3 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 80136, quantity: 4 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 234623, quantity: 4 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 78834, quantity: 4 }),
            InlineItemModel({ name: "Matio QP123DA", price: 250955, quantity: 3 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 110524, quantity: 4 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 483908, quantity: 1 }),
            InlineItemModel({ name: "Matio QP123DA", price: 263820, quantity: 4 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 255859, quantity: 2 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 300152, quantity: 4 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 400343, quantity: 2 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 66840, quantity: 4 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 398023, quantity: 3 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 373633, quantity: 2 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 127548, quantity: 1 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 335691, quantity: 1 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 402180, quantity: 3 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 442650, quantity: 0 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 483470, quantity: 0 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 471591, quantity: 0 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 173086, quantity: 1 }),
            InlineItemModel({ name: "Matio QP123DA", price: 181294, quantity: 4 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 69536, quantity: 0 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 281218, quantity: 2 }),
            InlineItemModel({ name: "Matio QP123DA", price: 416184, quantity: 0 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 117164, quantity: 0 }),
            InlineItemModel({ name: "Matio QP123DA", price: 220196, quantity: 1 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 185544, quantity: 1 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 439683, quantity: 0 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 64127, quantity: 4 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 116922, quantity: 0 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 458223, quantity: 0 }),
            InlineItemModel({ name: "Flyco AD1941VN", price: 470594, quantity: 3 }),
            InlineItemModel({ name: "Matio QP123DA", price: 475991, quantity: 1 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 28332, quantity: 2 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 239862, quantity: 3 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 270655, quantity: 0 }),
            InlineItemModel({ name: "Flyco TH4140VN", price: 201932, quantity: 0 }),
            InlineItemModel({ name: "Matio QP123DA", price: 48192, quantity: 3 }),
            InlineItemModel({ name: "Flyco FH1610VN", price: 326028, quantity: 2 })
        ]
        let dummyData = []
        let num = Math.floor(Math.random() * 10); //16-27
        for (let i = 0; i < num; i++) {
            dummyData.push(rawData[Math.floor(Math.random() * 80)])
        }
        return dummyData
    }(); //0 - 80
    const user = ["Loc", "Hung", "Nguyen", "Tien", "Hoang", "Loc", "Hung", "Nguyen", "Tien", "Hoang", "Loc", "Hung", "Nguyen", "Tien", "Hoang"][
        Math.floor(Math.random() * 15)
    ]; //0-15
    fakeTables.push({
        desc,
        phone,
        inlineItem,
        user,
        payment: "Mastercard",
        time: "Tue May 31 2022 16:43:16 GMT+0700 (Gi??? ????ng D????ng)"
    });
}
let data = JSON.stringify({
    tables: fakeTables,
});
fs.writeFileSync(__dirname + "/allOrders.json", data);