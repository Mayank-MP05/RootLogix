function checkwin(){
    if((arr[0][0]==1 && arr[0][1]==1 && arr[0][2]==1)
       || (arr[1][0]==1 && arr[1][1]==1 && arr[1][2]==1)
       || (arr[2][0]==1 && arr[2][1]==1 && arr[2][2]==1)
       || (arr[0][0]==1 && arr[1][0]==1 && arr[2][0]==1)
       || (arr[0][1]==1 && arr[1][1]==1 && arr[2][1]==1)
       || (arr[0][2]==1 && arr[1][2]==1 && arr[2][2]==1)
       || (arr[0][0]==1 && arr[1][1]==1 && arr[2][2]==1)
       || (arr[0][2]==1 && arr[1][1]==1 && arr[2][0]==1)){
        winColor();
        console.log("Player 1 Win");
        //initializeArray();
        restart();
}
    else if((arr[0][0]==2 && arr[0][1]==2 && arr[0][2]==2)
       || (arr[1][0]==2 && arr[1][1]==2 && arr[1][2]==2)
       || (arr[2][0]==2 && arr[2][1]==2 && arr[2][2]==2)
       || (arr[0][0]==2 && arr[1][0]==2 && arr[2][0]==2)
       || (arr[0][1]==2 && arr[1][1]==2 && arr[2][1]==2)
       || (arr[0][2]==2 && arr[1][2]==2 && arr[2][2]==2)
       || (arr[0][0]==2 && arr[1][1]==2 && arr[2][2]==2)
       || (arr[0][2]==2 && arr[1][1]==2 && arr[2][0]==2)){
        winColor();
        console.log("Player 2 Win");
        //initializeArray();
        restart();
       }
        
}


function winColor(){

    if((arr[0][0]==1 && arr[0][1]==1 && arr[0][2]==1)||(arr[0][0]==2 && arr[0][1]==2 && arr[0][2]==2)){
        btnsArr[0][0].className = win
        btnsArr[0][1].className = win
        btnsArr[0][2].className = win
    }else if ((arr[1][0]==1 && arr[1][1]==1 && arr[1][2]==1)||(arr[1][0]==2 && arr[1][1]==2 && arr[1][2]==2)){
        btnsArr[1][0].className = win
        btnsArr[1][1].className = win
        btnsArr[1][2].className = win
    }else if ((arr[2][0]==1 && arr[2][1]==1 && arr[2][2]==1)||(arr[2][0]==2 && arr[2][1]==2 && arr[2][2]==2)){
        btnsArr[2][0].className = win
        btnsArr[2][1].className = win
        btnsArr[2][2].className = win
    }else if ((arr[0][0]==1 && arr[1][0]==1 && arr[2][0]==1)||(arr[0][0]==2 && arr[1][0]==2 && arr[2][0]==2)){
        btnsArr[0][0].className = win
        btnsArr[1][0].className = win
        btnsArr[2][0].className = win
    }else if ((arr[0][1]==1 && arr[1][1]==1 && arr[2][1]==1)||(arr[0][1]==2 && arr[1][1]==2 && arr[2][1]==2)){
        btnsArr[0][1].className = win
        btnsArr[1][1].className = win
        btnsArr[2][1].className = win
    }else if ((arr[0][2]==1 && arr[1][2]==1 && arr[2][2]==1)||(arr[0][2]==2 && arr[1][2]==2 && arr[2][2]==2)){
        btnsArr[0][2].className = win
        btnsArr[1][2].className = win
        btnsArr[2][2].className = win
    }else if ((arr[0][0]==1 && arr[1][1]==1 && arr[2][2]==1)||(arr[0][0]==2 && arr[1][1]==2 && arr[2][2]==2)){
        btnsArr[0][0].className = win
        btnsArr[1][1].className = win
        btnsArr[2][2].className = win
    }else if ((arr[0][2]==1 && arr[1][1]==1 && arr[2][0]==1)||(arr[0][2]==2 && arr[1][1]==2 && arr[2][0]==2)){
        btnsArr[0][2].className = win
        btnsArr[1][1].className = win
        btnsArr[2][0].className = win
    }
}


function setallcolors(){
    for(var i = 0; i < 3 ; i++){
        for(var j = 0 ; j < 3 ; j++){
            btnsArr[i][j].className = defaul; 
        }
    }
}


function colorNear(oppplayer, x, y){
if( x==0 && y==0){
   if( arr[0][1] == 0 )  btnsArr[0][1].className = suggest;  
   if( arr[1][0] == 0 )  btnsArr[1][0].className = suggest;  
} else if( x==0 && y==1){
   if( arr[0][0] == 0 )  btnsArr[0][0].className = suggest;  
   if( arr[0][2] == 0 )  btnsArr[0][2].className = suggest;  
   if( arr[1][1] == 0 )  btnsArr[1][1].className = suggest;  
} else if( x==0 && y==2){
   if( arr[0][1] == 0 )  btnsArr[0][1].className = suggest;  
   if( arr[1][2] == 0 )  btnsArr[1][2].className = suggest;  
} else if( x==1 && y==0){
   if( arr[0][0] == 0 )  btnsArr[0][0].className = suggest;  
   if( arr[1][1] == 0 )  btnsArr[1][1].className = suggest;  
   if( arr[2][0] == 0 )  btnsArr[2][0].className = suggest;  
} else if( x==1 && y==1){
   if( arr[0][1] == 0 )  btnsArr[0][1].className = suggest;  
   if( arr[1][0] == 0 )  btnsArr[1][0].className = suggest;  
   if( arr[1][2] == 0 )  btnsArr[1][2].className = suggest;  
   if( arr[2][1] == 0 )  btnsArr[2][1].className = suggest;  
} else if( x==1 && y==2){
   if( arr[0][2] == 0 )  btnsArr[0][2].className = suggest;  
   if( arr[1][1] == 0 )  btnsArr[1][1].className = suggest;  
   if( arr[2][2] == 0 )  btnsArr[2][2].className = suggest;  
} else if( x==2 && y==0){
   if( arr[1][0] == 0 )  btnsArr[1][0].className = suggest;  
   if( arr[2][1] == 0 )  btnsArr[2][1].className = suggest;  
} else if( x==2 && y==1){
   if( arr[1][1] == 0 )  btnsArr[1][1].className = suggest;  
   if( arr[2][0] == 0 )  btnsArr[2][0].className = suggest;  
   if( arr[2][2] == 0 )  btnsArr[2][2].className = suggest;  
} else if( x==2 && y==2){
   if( arr[1][2] == 0 )  btnsArr[1][2].className = suggest;  
   if( arr[2][1] == 0 )  btnsArr[2][1].className = suggest;  
}
}