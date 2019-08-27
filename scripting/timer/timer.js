const p = document.getElementById("timer");

let count = 0;
function inc(){
    count++;
    p.innerHTML = count;
    if(count >= 30){
        clearTimeout(myVar);
    }
}

const myVar = setInterval(inc,100);
