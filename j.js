let a=[];
let guessRemaining=5;
let time;

function guessNumber(){
    if (guessRemaining>0){
    let value=input.value;
    if (value<0|| value>100){
        range();
    }else{
        if (value!==""){
            guessRemaining--;
            a.push(value);
            document.getElementById("history").innerHTML =`${a}`;
            if (value< result){
                lower(value);
            } else if (value> result){
                higher(value);
            }else{
                win();
            }
            for (i=0;i<a.length-1;i++)
            {
                if (a[i]==value){
                document.getElementById("output").innerHTML =`You've guessed ${value}  already `;
                guessRemaining++;
                a.pop();
                document.getElementById("output2").innerHTML =`your remaining ${guessRemaining}`;
                document.getElementById("history").innerHTML =`${a}`;
                }
            }
        } else{
        isNaN();
            }
        }
    }else{
    lose();
    }
}
function range(value){
    document.getElementById("output").innerHTML =`please guess from 0 to 100`;
    document.getElementById("output2").innerHTML =`your remaining ${guessRemaining}`;
}
function lower(value)
{

    document.getElementById("output").innerHTML =`low please guess the number higher with ${value}`;
    document.getElementById("output2").innerHTML =`your remaining ${guessRemaining}`;
}
function higher(value)
{
    document.getElementById("output").innerHTML =`high please guess the number lower with ${value}`;
    document.getElementById("output2").innerHTML =`your remaining ${guessRemaining}`;
}
function win()
    {
        document.getElementById("output").innerHTML =`You win`;
        document.getElementById("output2").innerHTML =``;
        document.getElementById("btn-guess").setAttribute("disabled", "");
    }
function isNaN()
    { 
        document.getElementById("output").innerHTML =`Please enter a number value`;
        document.getElementById("history").innerHTML =`${a}`;
    }
function lose(){
    document.getElementById("output").innerHTML =`You lose`;
    document.getElementById("output2").innerHTML =`Out of guesses.`;
    document.getElementById("btn-guess").setAttribute("disabled", "");
}
function resetGame(){
    result=Math.floor(Math.random()*10);
    guessRemaining=5;
    document.getElementById("output").innerHTML =`remaining ${guessRemaining}`;
    document.getElementById("btn-guess").removeAttribute("disabled");
    document.getElementById("output2").innerHTML =``;
    for (i=0;i<5;i++)
    {
        a.shift();
    }
    document.getElementById("history").innerHTML =`${a}`;
}

// function clock(){
//     time=30;
//     setTimeout(function(){
        
//         document.getElementById("output3").innerHTML =` please guess in ${time}`;
//     },0);
//     var timeLimit=setInterval(function(){
//         time--;
//         document.getElementById("output3").innerHTML =` please guess in ${time}`;
//     },1000);
//     setInterval(function(){time=30},30000);
//     var five_limit=setInterval(function(){time=30,document.getElementById("output3").innerHTML =` please guess in ${time}`},30000);
//     setTimeout(function(){clearInterval(five_limit); document.getElementById("output3").innerHTML =` please guess in `;},14999);
//     setTimeout(function(){clearInterval(timeLimit); document.getElementById("output3").innerHTML =` please guess in `;},14999);
    
    
    
//     setTimeout(lose(),3000);
   
// }



let result=Math.floor(Math.random()*10);
let guess=document.getElementById('btn-guess');
let reset=document.getElementById('btn-reset');
let input=document.getElementById('numberInput');
guess.addEventListener("click",guessNumber);
reset.addEventListener("click",resetGame);