var canvas=new fabric.Canvas("canvas1")
block_width=30
block_height=30
playerx=10
playery=10
var player_obj=""
var block_obj=""
function player_up(){
    fabric.Image.fromURL("player.png", function(img){
        player_obj=img;
        player_obj.scaleToWidth(150)
        player_obj.scaleToHeight(140)
        player_obj.set({
            top:playery, left:playerx
        });
        canvas.add(player_obj)
    });

    
}
function block_up(getimage){
    fabric.Image.fromURL(getimage, function(img){
        block_obj=img;
        block_obj.scaleToWidth(block_width)
        block_obj.scaleToHeight(block_height)
        block_obj.set({
            top:playery, left:playerx
        });
        canvas.add(block_obj)
    });

    
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress)
    if(e.shiftKey&&keypress=="80"){
        block_width=block_width+10
        block_height=block_height+10
        document.getElementById("c_w").innerHTML=block_width
        document.getElementById("c_h").innerHTML=block_height
}
if(e.shiftKey&&keypress=="77"){
    block_width=block_width-10
    block_height=block_height-10
    document.getElementById("c_w").innerHTML=block_width
    document.getElementById("c_h").innerHTML=block_height
}
if(keypress=="38"){
    moveUp()
}
if(keypress=="37"){
    moveLeft()
}
if(keypress=="39"){
    moveRight()
}
if(keypress=="40"){
    moveDown()
}
if(keypress=="67"){
   block_up("cloud.jpg")
}
if(keypress=="68"){
    block_up("dark_green.png")
 }
 if(keypress=="71"){
    block_up("ground.png")
 }
 if(keypress=="76"){
    block_up("light_green.png")
 }
 if(keypress=="82"){
    block_up("roof.jpg")
 }
 if(keypress=="84"){
    block_up("trunk.jpg")
 }
 if(keypress=="85"){
    block_up("unique.png")
 }
 if(keypress=="87"){
    block_up("wall.jpg")
 }
 if(keypress=="89"){
    block_up("yellow_wall.png")
 }
}
function moveUp(){
    if(playery>=0){
        playery=playery-block_height
        canvas.remove(player_obj)
        player_up()
    }
    
}
function moveDown(){
    if(playery<=700){
        playery=playery+block_height
        canvas.remove(player_obj)
        player_up()
    }
    
}
function moveLeft(){
    if(playerx>=0){
        playerx=playerx-block_width
        canvas.remove(player_obj)
        player_up()
    }
    
}
function moveRight(){
    if(playerx<=900){
        playerx=playerx+block_width
        canvas.remove(player_obj)
        player_up()
    }
    
}


    
