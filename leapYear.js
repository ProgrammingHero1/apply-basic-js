function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}

const check2000 = isLeapYear(1700);
console.log(check2000);