var now = moment().format('LLLL');
console.log(now);

let timeBlocks = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
};

function pageLoad() {
    document.getElementById("currentDay").innerHTML = now;



}

pageLoad();