var socket;
var button1;
var button2;
var button3;
var button4;
function setup(){
    createCanvas(1200,500)
    background(51);
    //table = new p5.Table(); 
    //table.addColumn("author"); 
    //button1 = createButton('rectangle');
    //button2 = createButton('circle');
    //button3 = createButton('rectangle');
    //button4 = createButton('ellipse');
   // button1.mouseClicked(draw1);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse',newd);
}


function newd(data){
    noStroke();
    fill(255);
    rect(data.x,data.y,5,5);
    text()
    


}
function mouseDragged(){

    var dat = {
        x:mouseX,
        y:mouseY
   }
   socket.emit('mouse',dat);
   noStroke();
   fill(200);
   rect(mouseX,mouseY,5,5);
  // rect(81, 81, 63, 63)
}




//function draw1(){
  //  rect(mouseX, mouseY, 63, 63);
    

//}
