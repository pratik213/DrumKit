var numberOfButton=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButton;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){ 
        var buttonInnerHTML=this.innerHTML;
        MakeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
});
}
document.addEventListener("keydown",function(event){
        MakeSound(event.key);
        buttonAnimation(event.key);
});

function MakeSound(key){
        switch(key){
                case "w":
                        var tom1=new Audio("sounds/tom-1.mp3");
                        tom1.play();
                        break;

                case "a":
                        new Audio("sounds/tom-2.mp3").play();
                        break;

                case "s":
                        new Audio("sounds/tom-3.mp3").play();
                        break;

                case "d":
                        new Audio("sounds/tom-4.mp3").play();
                        break;
                case "j":
                        new Audio("sounds/crash.mp3").play();
                        break;
                case "k":
                        new Audio("sounds/kick-bass.mp3").play();
                        break;
                case "l":
                        new Audio("sounds/snare.mp3").play();
                        break;

                default:
                        console.log(buttonInnerHTML);
                       
        }
}
function buttonAnimation(currentKey){
        var activeButton=document.querySelector("."+currentKey)
        activeButton.classList.add("pressed");

        setTimeout( function(){
                activeButton.classList.remove("pressed");
        },100);
}
