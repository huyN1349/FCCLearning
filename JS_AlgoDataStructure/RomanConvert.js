function convertToRoman(num) {
    let numConversion = {
        1:"I",
        5:"V",
        10:"X",
        50:"L",
        100:"C",
        500:"D",
        1000:"M"
    };
    let numStr = num.toString();
    var roman = [];
    var power = 0;
    for (let i=numStr.length-1; i>-1; i--) {
        var str = "";
        //var div = parseInt(numStr[i]/5);
        var remainder = parseInt(numStr[i]%5);
        //Check against 4 or 9
        if (remainder == 4) {
            if (numStr[i] < 5) {
                str += (numConversion[Math.pow(10,power)]+numConversion[5*Math.pow(10,power)]);
            } else {
                str += (numConversion[Math.pow(10,power)]+numConversion[Math.pow(10,power+1)]);
            }
        }
        //Other cases: below or above 5
        else {
            if (numStr[i] >= 5) {
                str += numConversion[5*Math.pow(10,power)];
                str += (numConversion[Math.pow(10,power)]).repeat(remainder);
            }
            else {
                str += (numConversion[Math.pow(10,power)]).repeat(remainder);
            }
        }

        power += 1;
        roman.unshift(str);
    }


    return roman.join("");
}

console.log(convertToRoman(400));
