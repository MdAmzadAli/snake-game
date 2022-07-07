let inputdir={x: 0,y:0};
const foodsound=new Audio('food.mp3');
const gamesound=new Audio('gameover.mp3');
// let gamesound=new Audio();
const movesound=new Audio('move.mp3');
const musicsound=new Audio('music.mp3');
let speed=7;
let me=0;
let lastpainttime=0;
let score=0;
let hiscore;
let hival=0;
let snakearr=[{x: 13,y: 15}];
food ={x: 3,y: 3}
// board=document.getElementById('board');
// game function
function main(ctime){
  
    window.requestAnimationFrame(main);
    if((ctime-lastpainttime)/1000<1/speed){
        return ;
    }
    lastpainttime=ctime;
gameengine();
    // console.log(ctime);

}
function iscollide(sarr){

for(let i=1;i<sarr.length;i++){
    if(sarr[0].x===sarr[i].x&&sarr[0].y===sarr[i].y){
        return true;
    }
  
}
if(sarr[0].x<=0||sarr[0].x>=18||sarr[0].y<=0||sarr[0].y>=18){
    return true;
}
}
// function medium(){
//     if(Option==Easy){
//         speed=6;
//     }
//     if(Option==Medium){
//         speed=100;
//     }
//     if(Option==Hard){
//         speed=300;
//     }

// }
// querySelectorAll
// sel=document.getElementById('select');
// var op=sel.selectedIndex;
// function m(){

//    console.log("clicked");
// }
// var on=document.getElementById('select').value;
function update(){
    // let abc=document.getElementById('select').value;
    var sele=document.getElementById("select").value;
  if(sele==="Hard"){
speed=14;me=2;
hiscore=localStorage.getItem("hiscorehard");
if(hiscore===null){
    localStorage.setItem("hiscorehard",JSON.stringify(hival));
  }
  else{
    hival=JSON.parse(hiscore);
    highbox.innerHTML="Hi score:"+hival;
}
  }
  if(sele==="Easy"){
  speed=7;me=0; 
  hiscore=localStorage.getItem("hiscoreeasy"); 
  if(hiscore===null){
    localStorage.setItem("hiscoreeasy",JSON.stringify(hival));
  }
  else{
    hival=JSON.parse(hiscore);
    highbox.innerHTML="Hi score:"+hival;
}
}
if(sele==="Medium"){
  speed=10; me=1; 
  hiscore=localStorage.getItem("hiscoremedium");
  if(hiscore===null){
    localStorage.setItem("hiscoremedium",JSON.stringify(hival));
  }
  else{
    hival=JSON.parse(hiscore);
    highbox.innerHTML="Hi score:"+hival;
}
}
if(sele==="sel"){
 alert('Choose a medium');  
 me=0; 
 hiscore=localStorage.getItem("hiscoreeasy");
 if(hiscore===null){
    localStorage.setItem("hiscoreeasy",JSON.stringify(hival));
  }
  else{
    hival=JSON.parse(hiscore);
    highbox.innerHTML="Hi score:"+hival;
}
}
    // docu option.value;
	// 			document.getElementById('text').value = option.text;

}

function gameengine(){
   // updating the snake array
   scorebox.innerHTML="score:"+score;
  
   if(iscollide(snakearr)){
    gamesound.play();
    musicsound.pause();
    alert("Game Over: press any key to play again"); 
    snakearr=[{x: 13,y: 15}];
    inputdir={x: 0,y: 0}
    // if(hiscore>score){
    //     localStorage.setItem("hiscore",JSON.stringify(hiscore));
    // }
    musicsound.play(); 
   score=0;

}
   if(snakearr[0].x===food.x&&snakearr[0].y===food.y){
    snakearr.unshift({x :snakearr[0].x+inputdir.x,y :snakearr[0].y+inputdir.y});
    let a=3;
    let b=16;
    score+=1;
  
    
    foodsound.play();
    food={ x: Math.round(a+(b-a)*Math.random()),y :Math.round(a+(b-a)*Math.random())}
    if(score>hival){
        hival=score;
        if(me===0)
        {localStorage.setItem("hiscoreeasy",JSON.stringify(hival));}
        if(me===1)
        {localStorage.setItem("hiscoremedium",JSON.stringify(hival));}
        if(me===2)
        {localStorage.setItem("hiscorehard",JSON.stringify(hival));}
        highbox.innerHTML="Hiscore:"+hival;
       }
   }
   // move snake
for(let i=snakearr.length-2;i>=0;i--){
   
    snakearr[i+1]={...snakearr[i]}
}
snakearr[0].x+=inputdir.x;
snakearr[0].y+=inputdir.y;
   // display the snake and food
   board.innerHTML="";
   snakearr.forEach((e,index)=>{
snakeelement=document.createElement('div');
snakeelement.style.gridRowStart=e.y;
snakeelement.style.gridColumnStart=e.x;


if(index===0){
    if(inputdir.x===0&&inputdir.y===0){
        snakeelement.classList.add('head'); 
    }
    if(inputdir.x===0&&inputdir.y===-1){
        snakeelement.classList.add('headu');
    }
    if(inputdir.x===0&&inputdir.y===1){
        snakeelement.classList.add('headd');
    }
    if(inputdir.x===1&&inputdir.y===0){
        snakeelement.classList.add('headr');
    }
    if(inputdir.x===-1&&inputdir.y===0){
        snakeelement.classList.add('headl');
    }
   
}
else{
    snakeelement.classList.add('snake');
}
board.appendChild(snakeelement);

   });
   foodel=document.createElement('div');
   foodel.style.gridRowStart=food.y;
foodel.style.gridColumnStart=food.x;
foodel.classList.add('food');
board.appendChild(foodel);

}





// function logic
// localStorage.clear();

// if(me==0){}
// if(me==2){ hiscore=localStorage.getItem("hiscorehard");}
// if(me==1){ hiscore=localStorage.getItem("hiscoremedium");}
// if(hiscore===null){
//     if(me==1)
//    {
//     localStorage.setItem("hiscoremedium",JSON.stringify(hival));}
//    if(me==2)
//    { localStorage.setItem("hiscorehard",JSON.stringify(hival));}
//    if(me==0)
//    { localStorage.setItem("hiscoreeasy",JSON.stringify(hival));}
// }
// else{
//     hival=JSON.parse(hiscore);
//     highbox.innerHTML="Hi score:"+hival;
// }
// preventing keys from changing
document.getElementById('select').addEventListener("keydown",(e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
        e.preventDefault();
      }
    },
    false
  );
// snakehead=document.getElementsByClassName('head');
// n=document.createElement('class');
window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
inputdir={x: 0,y: 1}
movesound.play();
switch(e.key){
  
case "ArrowUp":
    inputdir.x=0;
    inputdir.y=-1;
    
    break;
    case "ArrowDown":

    inputdir.x=0;
    inputdir.y=1;
    
    break;
    case "ArrowLeft":
        inputdir.x=-1;
    inputdir.y=0;

    break;
    case "ArrowRight":
        inputdir.x=1;
    inputdir.y=0;
    break;
}
});



