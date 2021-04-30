canvas=new fabric.Canvas("myCanvas");
var blockheight=30;
var blockwidth=30;
var playerx=20;
var playery=20;
var playerobject="";
function playerupdate() {
fabric.Image.fromURL("player.png",function(Img){
playerobject=Img;
playerobject.scaleToWidth(150);
playerobject.scaleToHeight(150);
playerobject.set({
    top:playery,
left:playerx
});
canvas.add(playerobject);

});
}
function new_image(getimage) {
  fabric.Image.fromURL(getimage,function(Img) {
  blockobject=Img;
  blockobject.scaleToHeight(blockheight);
  blockobject.scaleToWidth(blockwidth);
  blockobject.set({
      top:playery,
      left:playerx
  });
  canvas.add(blockobject);
  });  
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
var keypressed=e.keyCode;

if (keypressed=='70') {
  new_image('ironman_face.png');
  console.log("f");
} 

if (keypressed=='66') {
  new_image('spiderman_body.png');
  console.log("b");
} 
if (keypressed=='76') {
  new_image('hulk_legs.png');
  console.log("l");
} 
if (keypressed=='82') {
  new_image('hulk_right_hand.png');
  console.log("r");
} 
if (keypressed=='72') {
  new_image('captain_america_left_hand.png');
  console.log("h");
} 

if (keypressed=='37') {
  left();
  console.log("left");
}
if (keypressed=='38') {
  up();
  console.log("up");
}
if (keypressed=='39') {
  right();
  console.log("right");
} 
if (keypressed=='40') {
  down();
  console.log("down");
} 

if (e.shiftKey==true && keypressed=='80') {
  console.log("increase");
  blockheight=blockheight+10;
  blockwidth=blockwidth+10;
  document.getElementById("width").innerHTML=blockwidth;
  document.getElementById("height").innerHTML=blockheight;
}
if (e.shiftKey==true && keypressed=='77') {
  console.log("decrease");
  blockheight=blockheight-10;
  blockwidth=blockwidth-10;
  document.getElementById("width").innerHTML=blockwidth;
  document.getElementById("height").innerHTML=blockheight;
}
}
function up() {
  if (playery>=0) {
    playery=playery-blockheight;
    console.log("up"+playery);
    canvas.remove(playerobject);
    playerupdate();
  }
}
function down() {
  if (playery<=520) {
  playery=playery+blockheight;
  console.log("down"+playery);
  canvas.remove(playerobject);
  playerupdate();  
  }
}
function left() {
  if (playerx>=0) {
    playerx=playerx-blockwidth;
    console.log("left"+playerx);
    canvas.remove(playerobject);
    playerupdate();
  }
}
function right() {
  if (playerx<=880) {
    playerx=playerx+blockwidth;
console.log("right"+playerx);
canvas.remove(playerobject);
playerupdate();  
}
}