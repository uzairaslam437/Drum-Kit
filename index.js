


TotalButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<TotalButtons;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var htmlval=this.innerHTML;
    makesound(htmlval);
    buttonanimation(htmlval);

});
}
 document.addEventListener("keypress",function(event){
   var key=event.key;
   makesound(key);
   buttonanimation(key);
 });


function makesound(key){
  switch(key){
    case "w":
    var crash=new Audio("crash.mp3");
    crash.play();
    break;
    case "a":
    var kick=new Audio("kick-bass.mp3");
    kick.play();
    break;
    case "s":
    var snare=new Audio("snare.mp3");
    snare.play();
    break;
    case "d":
    var tom1=new Audio("tom-1.mp3");
    tom1.play();
    break;
    case "j":
    var tom2=new Audio("tom-2.mp3");
    tom2.play();
    break;
    case "k":
    var tom3=new Audio("tom-3.mp3");
    tom3.play();
    break;
    case "l":
    var tom4=new Audio("tom-4.mp3");
    tom4.play();
    break;
    default:
    console.log(htmlval);
  }
}

function buttonanimation(buttonpressed){
  var currentkey=document.querySelector("."+buttonpressed);
  currentkey.classList.add("pressed");

  setTimeout(function(){
    currentkey.classList.remove("pressed");
  },100);

}
// function handleclick(){

// }
// var a=new Audio("sounds/tom-1.mp3");
// function playsound(){
//   a.play();
// }
