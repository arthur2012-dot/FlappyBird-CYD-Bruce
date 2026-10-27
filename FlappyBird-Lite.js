// Flappy Bird Lite - CYD 2432S028 / Bruce 1.16.1
// Touch screen to flap
var d=require("display"),kb=require("keyboard");
var W=d.width(),H=d.height(),G=H-20;
var BLUE=d.color(30,144,255),GREEN=d.color(34,180,60),YEL=d.color(255,220,0),
ORG=d.color(255,140,0),BRN=d.color(139,90,40),WHT=d.color(255,255,255),
RED=d.color(255,50,50),DK=d.color(20,20,40);
var by,bv,pby,sc,px,ppx,gap,alive,best=0,dead=0;

function r(x,y,w,h,c){x=Math.floor(x);if(x<0){w+=x;x=0}if(w>0)d.drawFillRect(x,Math.floor(y),w,h,c)}
function tapped(){try{return kb.getAnyPress()||kb.getSelPress()||kb.getNextPress()||kb.getPrevPress()}catch(e){return false}}
function score(){r(W/2-12,2,50,20,BLUE);d.setTextSize(2);d.setTextColor(WHT);d.drawString(""+sc,W/2-8,4)}
function bg(){d.fill(BLUE);r(0,G,W,20,BRN);r(0,G-2,W,3,d.color(50,150,40))}
function pipe(){
  r(px,0,26,gap,GREEN);r(px-3,gap-10,32,12,GREEN);
  var b=gap+68;r(px,b,26,G-b,GREEN);r(px-3,b,32,12,GREEN)
}
function bird(){
  r(34,by-8,16,16,YEL);r(42,by-5,5,5,WHT);r(44,by-4,2,2,DK);r(48,by+1,7,4,ORG)
}
function reset(){
  by=pby=H/2;bv=0;sc=0;px=ppx=W+10;gap=35+random(0,75);alive=1;dead=0;
  bg();score()
}
reset();
while(true){
  if(!alive&&(kb.getSelPress()||kb.getEscPress()))break;
  if(tapped()){
    if(alive)bv=-4;
    else if(now()-dead>600){if(sc>best)best=sc;reset()}
  }
  if(alive){
    bv+=0.27;by+=bv;ppx=px;px-=2.3;
    var sw=0;
    if(px<-32){px=W+8;ppx=px;gap=35+random(0,75);sc++;sw=1}
    if(by>H-28||by<6)alive=0;
    if(px<52&&px>12&&(by-8<gap||by+8>gap+68))alive=0;
    r(34,pby-8,22,17,BLUE);
    r(Math.floor(px)+29,0,Math.floor(ppx)-Math.floor(px)+3,G-2,BLUE);
    pipe();bird();pby=by;
    if(sw)score();
    if(!alive){
      dead=now();d.setTextSize(2);d.setTextColor(RED);
      d.drawString("GAME OVER",W/2-55,H/2-24);
      d.setTextSize(1);d.setTextColor(WHT);
      d.drawString("Score "+sc+"  Best "+(sc>best?sc:best),W/2-48,H/2+2);
      d.drawString("Touch to play",W/2-35,H/2+20)
    }
  }
  delay(25)
}
