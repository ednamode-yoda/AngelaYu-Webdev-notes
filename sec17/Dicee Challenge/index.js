function generate(){
    return Math.floor(Math.random()*6)+1;
}
function setImg(num,pos){
    document.querySelectorAll('.dice img')[pos].setAttribute('src', 'images/dice'+num+'.png'); 
}
function changeTitle(value){
    document.querySelector('h1').textContent=value;
}
function play(){
    var n1=generate();
var n2=generate();
setImg(n1,0);
setImg(n2,1);
if(n1===n2){
    changeTitle('Draw!');
}
else if(n1>n2){
    changeTitle('🚩Player 1 Wins!');
}
else{
    changeTitle('Player 2 Wins!🚩');
}
}