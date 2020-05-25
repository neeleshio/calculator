var allCalcFunctions = {
    disp: function (num) {
        document.getElementById("input").value += num;
    },
    allClr: function () {
        document.getElementById("input").value = "";
        document.getElementById("output").value = "";
    },
    clr: function () {
        var clear = document.getElementById("input").value;
        var clearLastNum = clear.substr(0, (clear.length - 1));
        document.getElementById("input").value = clearLastNum;
    },
    solve: function () {
        let x = document.getElementById("input").value;
        let y = eval(x);
        document.getElementById("output").value = y;
    },
};