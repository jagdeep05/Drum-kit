var noOfbuttons=document.querySelectorAll(".drum").length;
 
for(var i=0;i<noOfbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
         var binnerhtml=this.innerHTML;
         makeSound(binnerhtml);
         buttonAnimation(binnerhtml);
         
});
} 


document.addEventListener("keypress",function(event){
   
   makeSound(event.key);
   buttonAnimation(event.key);
   
});


function makeSound(key){
   
switch(key){
   case"a":
   var crash=new Audio("sounds/crash.mp3");
   crash.play();
   break;

   case"s":
   var kick=new Audio("sounds/kick-bass.mp3");
   kick.play();
   break;
   
   case"d":
   var snare=new Audio("sounds/snare.mp3");
   snare.play();
   break;
   
   case"h":
   var drum1=new Audio("sounds/tom-1.mp3");
   drum1.play();
    break;
   
   case"j":
   var drum2=new Audio("sounds/tom-2.mp3");
   drum2.play();
   break;
   
   case"k":
   var drum3=new Audio("sounds/tom-3.mp3");
   drum3.play();
    break;
   
   case"l":
   var drum4=new Audio("sounds/tom-4.mp3");
   drum4.play();
   break;

   default:

}

}

function buttonAnimation(currentkey){
 var activeButton =document.querySelector("."+currentkey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
      activeButton.classList.remove("pressed");
   },100)

} 


