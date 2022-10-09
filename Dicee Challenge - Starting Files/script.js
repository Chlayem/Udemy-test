var n=Math.random();
var m=Math.random();
n = n * 6 + 1 ;
m = m * 6 + 1 ;
n =Math.floor(n);
m =Math.floor(m);
ch1 = "./images/dice" + n + ".png";
ch2 = "./images/dice" + m + ".png";
document.querySelector(".img1").setAttribute("src",ch1);
document.querySelector(".img2").setAttribute("src",ch2);

if (m > n)
    document.querySelector("h1").innerHTML = "Player 2 wins";
else 
    if ( n > m)
        document.querySelector("h1").innerHTML = "Player 1 wins";
    else
        document.querySelector("h1").innerHTML = "Draw";
