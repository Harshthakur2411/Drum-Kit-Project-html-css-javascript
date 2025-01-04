var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btnhtml = this.innerHTML;
       playsound(btnhtml);
        
    });
}
document.addEventListener("keydown",function(event){
    playsound(event.key);
})


function playsound(key){
    switch(key){
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
        break;  
        case "s":
            var audio = new Audio("tom-4.mp3");
            audio.play();
        break;  
        case "d":
            var audio = new Audio("tom-3.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
        break;
        default:
            console.log("Invalid Key"+key);

                  

    }
}
function makeAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}

