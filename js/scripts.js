//business Logic
function teaToml(tsp) {
    return (tsp) * 4.928922;
}

//user interface logic
const Ml = prompt("Enter tsp value");

window.alert('The result of tsp to (ml): ' + teaToml(Ml) + '.');