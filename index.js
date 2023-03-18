var x=Math.floor(Math.random()*6)+1;
var image="images/dice"+x+".png";
document.querySelector(".img1").setAttribute("src", image);
var y=Math.floor(Math.random()*6)+1;
var image2="images/dice"+y+".png";
document.querySelector(".img2").setAttribute("src",image2);
if (x>y){
    document.querySelector("h1").innerHTML="🚩player1 wins";
}else if(y>x){
    document.querySelector("h1").innerHTML="player2 wins🚩";
}else{
    document.querySelector("h1").innerHTML="draw!"
}