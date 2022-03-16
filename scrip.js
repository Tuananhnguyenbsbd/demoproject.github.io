function Clickgiaipt() {
    let a = parseInt(document.querySelector("#a").value);
    let b = parseInt(document.querySelector("#b").value);
    let c = parseInt(document.querySelector("#c").value);
    ptbac2(a, b, c)
}
function ptbac2(a, b, c) {
    document.querySelector("#result-heading").style.color = "#000";
    if (isNaN(a) && isNaN(b) && isNaN(c)) {
        document.querySelector("#result-heading").innerHTML = "ban nen nhap so";
        document.querySelector("#result-heading").style.color = "red";
        return;
    }
    let x1, x2, delta;
    if (a == 0) {
        document.querySelector("#result-heading").innerHTML = "pt bac 1";
    } else {
        delta = b * b - 4 * a * c;
        if (delta < 0) {
            document.querySelector("#result-heading").innerHTML = "pt vo nghiem";
        } else if (delta = 0) {
            document.querySelector("#result-heading").innerHTML = "pt co nghiem kep";
        } else {
            document.querySelector("#result-heading").innerHTML = "pt 2 nghiem phan biet"
        }
    }
}
function reset() {
    document.querySelector("#a").value = "";
    document.querySelector("#b").value = "";
    document.querySelector("#c").value = "";
}
function random(){
    document.querySelector("#a").value =Math.floor(Math.random() * 10);
    document.querySelector("#b").value =Math.floor(Math.random() * 10);
    document.querySelector("#c").value =Math.floor(Math.random() * 10);
}