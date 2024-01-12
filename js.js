

let meva = [];

while (true) {
    let tay = prompt( "istalgan mevangizni kiriting");
    
    if (tay === 'stop') {
        break;
    } else if (meva.indexOf(tay) !== -1) {
        alert("bu meva kiritilgan !");
        break;
    } else {
        meva.push(tay);
    }
}

console.log(meva); 