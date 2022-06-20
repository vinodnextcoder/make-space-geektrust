const fs = require("fs");
const filename = process.argv[2];
const moment = require('moment');
let coWorkingSpace = {
    "C-Cave": {
        capacity: 3,
        book: [],
        seats: 0
    },
    "D-Tower": {
        capacity: 7,
        book: [],
        seats: 0
    },
    "G-Mansion": {
        capacity: 20,
        book: [],
        seats: 0
    }

}
let C_cave = {};
let D_Tower = {};
let G_Mansion ={};

function main(dataInput) {
    var inputLines = dataInput.toString().split("\n")
    for (i = 0; i < inputLines.length; i++) {
        if (inputLines) {
            let input = inputLines[i].split(' ')
            switch (input[0]) {
                case 'VACANCY':
                    vacancy();
                    break;
                case 'BOOK':
                    addBooking(input[1], input[2], parseInt(input[3]));
                    break;
            }
        }
    }
}
// TODo time validation need tobe done
const addBooking = (startTime, endTime, num) => {

    if (num <= 3) {
        C_cave = coWorkingSpace['C-Cave'];
        let Check  = C_cave.book.find(item=> (item.startTime==startTime && item.endTime ==endTime) );
        let capCheck;
        if(Check && Check.num){
            capCheck= C_cave.capacity - Check.num;
        }
        if (!Check   || capCheck <= num) {

            C_cave.seats = C_cave.seats + num;
            
            console.log('C-Cave');
            C_cave.book.push({ startTime, endTime, num });
        }
        else {
            console.log('NO_VACANT_ROOM');
        }
    }
    else if (num > 3 && num < 7) {
        
        D_Tower = coWorkingSpace['D-Tower'];
        let Check  = D_Tower.book.find(item=> (item.startTime==startTime && item.endTime ==endTime) );
        let capCheck;
        if(Check && Check.num){
            capCheck= C_cave.capacity - Check.num;
        }
        if (!Check || capCheck <= num) {

            D_Tower.seats = D_Tower.seats + num;
            console.log('D-Tower');
            D_Tower.book.push({ startTime, endTime, num });

        }
        else {
            console.log('NO_VACANT_ROOM');
        }
    }
    else if (num > 7 && num < 20) {

        G_Mansion = coWorkingSpace['G-Mansion'];
        let Check  = G_Mansion.book.find(item=> (item.startTime==startTime && item.endTime ==endTime) );
        let capCheck;
        if(Check && Check.num || capCheck <= num){
            capCheck= C_cave.capacity - Check.num;
        }
        if (!Check) {
            G_Mansion.seats = G_Mansion.seats + num;
            console.log('G-Mansion');
            G_Mansion.book.push({ startTime, endTime, num });

        }
        else {
            console.log('NO_VACANT_ROOM');
        }

    } else {
        console.log('NO_VACANT_ROOM');
    }
}
const vacancy = () => {
    let spaceList = []
    for (item in coWorkingSpace) {
        if (coWorkingSpace[item].book.length === 0 && !spaceList.includes(item)) {
            spaceList.push(item)
        }
    }
    let spaceListInfo = spaceList.join(" ");
    console.log(spaceListInfo);
}
data = fs.readFileSync(process.argv[2]).toString();
main(data);
module.exports = { main }
