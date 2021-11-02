ctx.fillStyle="Black";
ctx.fillRect(0,0,canv.width,canv.height);
// canvas要素の幅と高さを持ってくる(今回は両方400が入る)
setInterval(function(){
  ctx.fillStyle="Black";
  ctx.fillRect(0,0,canv.width,canv.height);
  ctx.fillStyle="lime";
  px+=xd;
  py+=yd;
  if(px<0) px=19;
  if(py<0) py=19;
  if(px>19) px=0;
  if(py>19) py=0;
  snake.push({x:px,y:py});//クラス変数
  for(let i=0;i<snake.length-1;i++){
    ctx.fillRect(snake[i].x*SIZE,snake[i].y*SIZE,SIZE-2,SIZE-2);
    if(snake[i].x==px && snake[i].y==py){
      tail=MIN;
      sc.textContent=0;
      tailsc.textContent=5;
      //console.warn("crash");
    }
  }
  while(snake.length>tail){
    snake.shift();
  }
  if(appleX==px && appleY==py || timeup()){
    appleX=Math.floor(Math.random()*canv.width/SIZE);
    appleY=Math.floor(Math.random()*canv.height/SIZE);
    if(!timeup()) getapple();
  }
  if(appleX1==px && appleY1==py ||timeup()){
    appleX1=Math.floor(Math.random()*canv.width/SIZE);
    appleY1=Math.floor(Math.random()*canv.height/SIZE);
    if(!timeup()) getapple();
  }
  ctx.fillStyle="red";
  ctx.fillRect(appleX*SIZE,appleY*SIZE,SIZE-2,SIZE-2);
  ctx.fillStyle="red";
  ctx.fillRect(appleX1*SIZE,appleY1*SIZE,SIZE-2,SIZE-2);
  i++;
//console.log(timeup());

},1000/FPS);

function timeup(){
  if(i%100==0) return true;
  else return false;
}

let a=0,i=0;
function getapple(){
  tail++;
  a++;
  sc.textContent++;
  if(+maxsc.textContent>+sc.textContent){
    //console.log(maxsc.textContent,sc.textContent);
  }else{
    maxsc.textContent=sc.textContent;
    //console.log("else"+maxsc.textContent,sc.textContent);
  }
  tailsc.textContent=tail;
}

let sc,maxsc,tailsc;
window.onload=function(){
  sc=document.getElementById("score");//.textContent="-50";
  maxsc=document.getElementById("maxscore");//.textContent="-50";
  tailsc=document.getElementById("tailsc");//.textContent="-50";

  //console.log(sc,maxsc,tailsc);
  sc.textContent=0;
  tailsc.textContent=0;
  maxsc.textContent=0;
}
