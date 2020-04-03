var place=document.querySelectorAll(".place");

var Message=document.getElementById("msg");
var play=document.getElementById("play");
var zero=document.getElementById("1")
var one=document.getElementById("2");
var two=document.getElementById("3");
var three=document.getElementById("4");
var four=document.getElementById("5");
var five=document.getElementById("6");
var six=document.getElementById("7");
var seven=document.getElementById("8");
var eight=document.getElementById("9");

var player1=0;
var player2=0;

var arr=[];
for(var i=0;i<9;i++){
    arr[i]=i;
}
var chance=10;
var win;
var flag=1;

play.addEventListener("click",function(){
    for(var i=0;i<9;i++){
        arr[i]=i;
    }
    flag=1;
    Message.classList.remove("message");
    cont();
})
zero.addEventListener("click",function(){
    if(arr[0]!==10 && arr[0]!==11 && flag ===1){
    win=chance;
    if(win === 10){
        win="Player 1"
    }
    else if(win === 11) {
        win="Player 2"
    }
    arr[0]=chance;
    zero.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent=win +" Won the game";
        Message.classList.add("message")

        flag=0;
    }
    

});
one.addEventListener("click",function(){
    if(arr[1]!==10 && arr[1]!==11 && flag ===1){
    win=chance;
    if(win === 10){
        win="Player 1"
    }
    else if(win === 11) {
        win="Player 2"
    }
    arr[1]=chance;
    one.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent= win +" Won the game";
        Message.classList.add("message")
        flag=0;
    }
});
two.addEventListener("click",function(){
    if(arr[2]!==10 && arr[2]!==11 && flag ===1){
    win=chance;
    if(win === 10){
        win="Player 1"
    }
    else if(win === 11) {
        win="Player 2"
    }
    arr[2]=chance;
    two.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent=win +" Won the game";
        flag=0;
        Message.classList.add("message")
    }
});
three.addEventListener("click",function(){
    if(arr[3]!==10 && arr[3]!==11 && flag ===1){
    win=chance;
    if(win === 10){
        win="Player 1"
    }
    else if(win === 11) {
        win="Player 2"
    }
    arr[3]=chance;
    three.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent=win +" Won the game";
        flag=0;
        Message.classList.add("message")
    }
});
four.addEventListener("click",function(){
    if(arr[4]!==10 && arr[4]!==11 && flag ===1){
    win=chance;
    if(win === 10){
        win="Player 1"
    }
    else if(win === 11) {
        win="Player 2"
    }
    arr[4]=chance;
    four.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent=win +" Won the game";
        flag=0;
        Message.classList.add("message")
    }
});
five.addEventListener("click",function(){
    if(arr[5]!==10 && arr[5]!==11 && flag ===1){
    win=chance;
    if(win === 10){
        win="Player 1"
    }
    else if(win === 11) {
        win="Player 2"
    }
    arr[5]=chance;
    five.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent=win +" Won the game";
        flag=0;
        Message.classList.add("message")
    }
});
six.addEventListener("click",function(){
    if(arr[6]!==10 && arr[6]!==11 && flag ===1){
    win=chance;
    if(win === 10){
        win="Player 1"
    }
    else if(win === 11) {
        win="Player 2"
    }
    arr[6]=chance;
    six.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent=win +" Won the game";
        flag=0;
        Message.classList.add("message")
    }
});
seven.addEventListener("click",function(){
    if(arr[7]!==10 && arr[7]!==11 && flag ===1){
    win=chance;
    if(win === 10){
        win="Player 1"
    }
    else if(win === 11) {
        win="Player 2"
    }
    arr[7]=chance;
    seven.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent=win +" Won the game";
        flag=0;
        Message.classList.add("message")
    }
});
eight.addEventListener("click",function(){
    if(arr[8]!==10 && arr[8]!==11 && flag ===1){
     win=chance;
     if(win === 10){
         win="Player 1"
     }
     else if(win === 11) {
        win="Player 2"
     }
     arr[8]=chance;
    eight.textContent=fillarr(chance);
    }
    if(check()===1){
        Message.textContent=win +" Won the game";
        flag=0;
        Message.classList.add("message")
    }
});


function fillarr(num){
    if(num === 10){

        chance=11;
        return "0"
    }
    else {
        chance=10;
        return "X";
    }
}

function check(){
    if(arr[0] === arr[4] && arr[4] === arr[8]){
        return 1;
    }
    else if(arr[2] === arr[4] && arr[4] === arr[6]){
        return 1;
    }
    else if(arr[1] === arr[4] && arr[4] === arr[7]){
        return 1;
    }
    else if(arr[2] === arr[5] && arr[5] === arr[8]){
        return 1;
    }
    else if(arr[0] === arr[3] && arr[3] === arr[6]){
        return 1;
    }
    else if(arr[0] === arr[1] && arr[1] === arr[2]){
        return 1;
    }
    else if(arr[3] === arr[4] && arr[4] === arr[5]){
        return 1;
    }
    else if(arr[6] === arr[7] && arr[7] === arr[8]){
        return 1;
    }
    else{
        return 0;
    }
}



function cont(){
    zero.textContent="";
    one.textContent="";
    two.textContent="";
    three.textContent="";
    four.textContent="";
    five.textContent="";
    six.textContent="";
    seven.textContent="";
    eight.textContent="";
    Message.textContent="";
}
