// Button  Logics 
var b00 = document.getElementById("btn00");
var b01 = document.getElementById("btn01");
var b02 = document.getElementById("btn02");
var b10 = document.getElementById("btn10");
var b11 = document.getElementById("btn11");
var b12 = document.getElementById("btn12");
var b20 = document.getElementById("btn20");
var b21 = document.getElementById("btn21");
var b22 = document.getElementById("btn22");
let bclick = true;
let arr = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let btnsArr = [
    [b00,b01,b02],
    [b10,b11,b12],
    [b20,b21,b22]
];

var img_x = `<img src="img/cross.png"/>`;
var img_o = `<img src="img/circle.png"/>`;
let turns = 6;
// b00.innerHTML = img_x;
function onclk(btnid,X,Y){
  //console.log(btnid+' '+X+' '+Y);
    if(turns != 0){
        btnName = btnsArr[X][Y];
    
        if(btnName.innerHTML == null && bclick == true){

            btnName.innerHTML = img_o;
            console.log(btnName);

        }
    }
}