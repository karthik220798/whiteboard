
var express=require("express");
//const { ROLE,users } = require('./data')
//const { authUser,authRole } = require('./basicAuth')
var app =  express();
app.use(express.json())
//app.use(setUser)
let store =new Array();
app.get('/',function(req,res)
{
    console.log(store);
    res.sendFile(__dirname+'/public/index1.html');
})
app.get('/reg',function(req,res)
{
    var data=req.query.UserName;
   store.push(data);
   console.log(store);
    res.sendFile(__dirname+'/public/final.html');
})
app.get('/index',function(req,res)
{
    var data=req.query.UserName;
   
    console.log(data);
    var a = store.indexOf(data);
    console.log(a);
    if(a<0)
    {
    
        res.sendFile(__dirname+'/public/register.html');
    }
    //console.log(passq);
   else{
    res.sendFile(__dirname+'/public/index.html');
   }
})


var server = app.listen(3000);
app.use(express.static('public'));
console.log("my server");
var socket =require('socket.io')

var io=socket(server);

io.sockets.on('connection',newConnection);
function newConnection(socket){
    console.log("ddddddd");
   // console.log(socket.id);
   console.log(socket.id);
    socket.on('mouse',mmsg);
    function mmsg(data){
        
        socket.broadcast.emit('mouse',data);
        console.log(data);
    }
}