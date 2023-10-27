//business Logic
function teaToml(tsp) {
    return (tsp) * 4.928922;
}

function tableToml(tbsp) {
    return (tbsp) * 14.786765;
}

//user interface logic
const Ml = prompt("Enter tsp value");
const tbsp = prompt("Enter tbsp value");

window.alert('The result of tsp to (ml): ' + teaToml(Ml).toFixed(3) + '.\n' +
    'The result of tbsp to (ml): ' + tableToml(tbsp).toFixed(4) + '.');