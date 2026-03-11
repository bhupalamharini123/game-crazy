let uscore=0;
let cscore=0;

const ch=document.querySelectorAll(".choice");                
const msg=document.querySelector("#msg-box");
const drawGame =() =>{
    console.log("game was drawn");
    msg.innerText="game was drawn";
};
const c=document.querySelector("#cscore");
const u=document.querySelector("#uscore");
const userWinner= (userwin,choiceid,ri) =>{
    if(userwin){
        uscore++;
        u.innerText=uscore;
        console.log("you win, congratulations");
        msg.innerText=`you win, your ${choiceid} beats ${ri}`;
        msg.style.backgroundColor="green";

    }
    else{
        cscore++;  
        c.innerText=cscore;
        console.log("u lose,try");
         msg.innerText=`you lose!, your ${choiceid}  does not beats ${ri}`;
         msg.style.backgroundColor="red";
    }
};
const gencomchoice= () =>{
    const options=["rock","paper","scissors"];
    const ri=Math.floor(Math.random()*3);
    return options[ri];
        
};

const playgame= (choiceid)=>{
    const ri=gencomchoice();
    console.log("user choice",choiceid);
    let userwin=true;
    if(choiceid==ri){
        drawGame();
    }
    else{
         
     if(choiceid=="rock"){
        userwin= ri==="paper"?false:true;
    }   
    else if(choiceid=="paper"){
         userwin= ri==="scissors"?false:true;
    }   
    else{
        userwin= ri=="rock" ? false:true;
    }
  } 
  userWinner(userwin,choiceid,ri);
};

ch.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const choiceid=choices.getAttribute("id");
         console.log(choiceid,"choice was clicked");
         playgame(choiceid);
    });
  });
