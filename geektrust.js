const fs = require("fs");
const filename = process.argv[2];
const moment= require('moment');
let coWorkingSpace = {
    "C-Cave":{
        capacity:3,
        book:[]
    },
    "D-Tower":{
        capacity:7,
        book:[]
    },
    "G-Mansion":{
        capacity:10,
        book:[]
    }

}
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
                    vacancy(input[1], input[2], input[3]);
                    break;
            }
        }
    }
}
const addBooking = (startTime,endTime, num)=>{
console.log(startTime,endTime, num);   
}
const vacancy = ()=>{
    let spaceList = []
    for (item in coWorkingSpace){
        if(coWorkingSpace[item].book && !spaceList.includes(item)){
            spaceList.push(item)
        }
    }
    let spaceListInfo = spaceList.join(" ");
    console.log(spaceListInfo);
}
data = fs.readFileSync(process.argv[2]).toString();
main(data);
module.exports = { main }
