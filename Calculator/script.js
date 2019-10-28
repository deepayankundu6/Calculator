function GetDisplay() {
    return document.getElementById("display").innerHTML;
}

function SetDisplay(num) {
    if (num == "")
        document.getElementById("display").innerHTML = num;
    else
        document.getElementById("display").innerHTML = getFormattedNumber(num);
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumber(num) {
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
var output1, output2, ops
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.innerHTML == "C")
            SetDisplay("");
        else if (this.innerHTML == "CE") {
            var output = reverseNumber(GetDisplay()).toString()
            if (output)
                output = output.substr(0, output.length - 1)
            SetDisplay(output)
        } else {
            if (!output1) {
                ops = this.innerHTML;
                output1 = GetDisplay();
                SetDisplay("");
                console.log("Output1 Updated");
            } else {

                console.log("output1:", output1)
                output2 = GetDisplay();
                console.log("output2:", output2)
                console.log("ops:", ops)
                if (this.innerHTML == "=") {
                    switch (ops) {
                        case "+":
                            SetDisplay(output1 + output2)
                            output2 = ""
                            output1 = ""
                            ops = "";
                            break;
                        case "-":
                            SetDisplay(output1 - output2)
                            output2 = ""
                            output1 = ""
                            ops = "";
                            break;
                        case "*":
                            SetDisplay(output1 * output2)
                            output2 = ""
                            output1 = ""
                            ops = "";
                            break;
                        case "/":
                            SetDisplay(output1 / output2);
                            output2 = ""
                            output1 = ""
                            ops = "";
                            break;
                        case "%":
                            SetDisplay(output1 % output2);
                            output2 = ""
                            output1 = ""
                            ops = "";
                            break;
                    }
                }
            }
        }
    });
}
var numbers = document.getElementsByClassName("numbers");

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        var output = reverseNumber(GetDisplay())
        if (output != NaN)
            output = output + this.innerHTML
        SetDisplay(output)
    });
}