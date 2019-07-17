document.addEventListener('deviceready', onDeviceReady, false);

var connectionOpts={
	"force new connection":true,
	"reconnectionAttempts":"infinity",
	"timeout":10000,
	"transports":["websocket"]
};
function onDeviceReady () {
	var ip=document.getElementById("con_ip");
	ip.onclick=function(){
		var addr=document.getElementById("ip").value;
		document.getElementById("test").innerHTML+=addr
	 	 var socket = io.connect(addr,connectionOpts);
  	document.getElementById("test").innerHTML+=" "+socket.connected;
  
  	socket.on('text',function(data){
  		socket.emit("dev_json",JSON.stringify(dev_json));
  	});
  	socket.on("GETV",function(data){
  		window.androidVolume.getMusic(function(vol){
  			socket.emit("GETVC",vol);
  		});
  	});
  	socket.on("SETV",function(data){
  		console.log("setvstart");
  		try{
  		window.androidVolume.setMusic(40);
  		}
  		catch(err){
  			console.log(err.message);
  		}
  			socket.emit("SETVC");;
  	});
  		
  	
  	
            
 
};};