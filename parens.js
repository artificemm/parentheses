function checkParensBalance(str) {
    let data = str;
    let stack = 0;
    if (data.length > 100) {
        return false;
    }
    for (var i = 0; i < data.length; i++) {
        if ((data[i] === ')') && (stack == 0)) {
            return false;
        }
        if (data[i] === '(') {
            stack++;
        }
        if (data[i] === ')') {
            stack--;
        }
    }
    if (stack == 0) {
        return true;
    } else {
        return false;
    }
}
