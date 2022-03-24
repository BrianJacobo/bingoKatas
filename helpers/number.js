const generateNumber = () => {
    var number = Math.round(Math.random()*74)+1;
    return number
}

const generateNumberArray = () => {
    var called = [];
    var count = 0;
    while(count < 75){
        var number = generateNumber();
        if(called.indexOf(number) == -1){
            called.push(number);
            count++
        }
    }
    return called;
}

module.exports = {
    generateNumber,
    generateNumberArray
}