var randomNumber1 = Math.floor(Math.random()*6)+1; //for generating random numbers 

var randomImg1 = "images/dice" + randomNumber1 + ".png"; //for targeting different dices using random numbers generated and the names given to the dices

var image1 = document.querySelectorAll("img")[0];  // selecting all img and then choosing the first one using indexing

image1.setAttribute("src", randomImg1 );   //setting the source attribute to the one we want

var randomNumber2 = Math.floor(Math.random()*6)+1;    //repeating the same process for second dice

var randomImg2 = "images/dice" + randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImg2);



if( randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" Hurray! Player 1 wins"; //changing the content of h1 based on different conditions
}
else if( randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=" Hurray! Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw, Give it a Shot Again"
}