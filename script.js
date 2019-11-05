function disp(num) {
    document.getElementById("input").value += num;
}

function allClr() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "0";

}

function clr() {
    var clear = document.getElementById("input").value;
    var c = clear.substr(0, (clear.length - 1));
    document.getElementById("input").value = c;
}

function solve() {
    let x = document.getElementById("input").value;
    let y = eval(x);
    document.getElementById("output").value = y;
}