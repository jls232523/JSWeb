$(function(){
  $("#signature").hover(
             function() {
                 $(this).attr("src", "images/singaturecolor.gif");
             },
             function() {
                 $(this).attr("src", "images/sigcolor.png");
             }
         );
$(".statement").css

});
$(function(){
var j;
var temp=0;
waitMaster();
var msg = setInterval(waitMaster,15000);
});
function waitMaster(){
var msgTimer = setTimeout(wait,3000);
var msgTimer2 = setTimeout(wait2,6000);
var msgTimer3 = setTimeout(wait3,9000);
var msgTimer4 = setTimeout(wait4,12000);
var msgTimer5 = setTimeout(wait5,15000);
}
function wait(){
  var para = document.createElement("span");
  var node = document.createTextNode("Developer");
  para.setAttribute("id","adj");
  para.appendChild(node);
  var element = document.getElementById("adj");
  if(element!=null){
  element.removeChild(element.childNodes[0]);
  element.appendChild(para);
}
else{
  element = document.getElementById("openStatement");
  element.appendChild(para);
}
}
function wait2(){
  var para = document.createElement("span");
  var node = document.createTextNode("Computer Engineer");
  para.setAttribute("id","adj");
  para.appendChild(node);
  var element = document.getElementById("adj");
  element.removeChild(element.childNodes[0]);
  element.appendChild(para);
}

function wait3(){
  var para = document.createElement("span");
  var node = document.createTextNode("Student");
  para.setAttribute("id","adj");
  para.appendChild(node);
  var element = document.getElementById("adj");
  element.removeChild(element.childNodes[0]);
  element.appendChild(para);
}
function wait4(){
  var para = document.createElement("span");
  var node = document.createTextNode("Gamer");
  para.setAttribute("id","adj");
  para.appendChild(node);
  var element = document.getElementById("adj");
  element.removeChild(element.childNodes[0]);
  element.appendChild(para);
}
function wait5(){
  var para = document.createElement("span");
  var node = document.createTextNode("Hard Worker");
  para.setAttribute("id","adj");
  para.appendChild(node);
  var element = document.getElementById("adj");
  element.removeChild(element.childNodes[0]);
  element.appendChild(para);
}
