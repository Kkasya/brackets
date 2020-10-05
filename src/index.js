module.exports = function check(str, bracketsConfig) {
    let stackStr = [];
    let arrayStr = [];
    let bracketLeft = [];
    let bracketRight = [];
    let index = -1;
    let result = true;

    bracketsConfig.forEach( elem => {
        elem.forEach((current, index, elem) => {
            if (index === 0 ) bracketLeft.push(current);
            if (index === 1) bracketRight.push(current);
        });
    });
    arrayStr = str.split('');
    arrayStr.forEach(elem => {
        if (result !== false) {
            index = bracketLeft.indexOf(elem);
            if (index != -1) {

                if (bracketLeft.includes(elem) && bracketRight.includes(elem) && stackStr[stackStr.length - 1] === elem) {
                    stackStr.pop();
                    result = true;
                } else stackStr.push(elem)
            } else {
                if (bracketLeft.indexOf(stackStr[stackStr.length - 1]) === bracketRight.indexOf(elem)) {
                    stackStr.pop();
                    result = true;

                } else {
                    result = false;
                }
            }}
    });
    if (stackStr.length != 0) result = false;
    return result;
}
