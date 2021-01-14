module.exports = function toReadeble(number) {
    let stage1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let stage2 = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let stage3 = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let str = String(number);

    if (number < 10) {
        return stage1[number];
    } else if (number > 10 && number < 20) return stage2[number - 11];
    else if (number < 100 && number % 10 === 0)
        return stage3[str.charAt(0) - 1];
    else if (number < 100)
        return stage3[str.charAt(0) - 1] + " " + stage1[str.charAt(1)];
    else if (number % 100 === 0) return stage1[str.charAt(0)] + " hundred";
    else if (number < 1000)
        return stage1[str.charAt(0)] + " hundred " + toReadeble(number % 100);
};
