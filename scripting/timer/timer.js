const p = document.getElementById("timer");
let count = 0;
function inc(){
    count++;
    p.innerHTML = count;
}
setInterval(inc,100);