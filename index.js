const buttonNumber = document.querySelectorAll('.audio').length;
console.log(buttonNumber);

// take length of node list 
// and run loop <length
// add eventlistener on click
// on click : add animation with timeout, add sound

for (var i = 0; i <buttonNumber; i++) {
    document.querySelectorAll(".audio")[i].addEventListener('click', function(){
        var button = Number(this.innerHTML);
        // console.log(button);
        playSound(button);
    }); 
}

function playSound(buttonName){
    switch(buttonName) {
        case 1:
            var funny1 = new Audio("./sounds/1.wav");
            funny1.play();
            break;
        case 2:
            var funny2 = new Audio("./sounds/2.wav");
            funny2.play();
            break;
        case 3:
            var funny3 = new Audio("./sounds/3.wav");
            funny3.play();
            break;
        case 4:
            var funny4 = new Audio("./sounds/4.wav");
            funny4.play();
            break;
        case 5:
            var funny5 = new Audio("./sounds/5.wav");
            funny5.play();
            break;
        default:
            console.log("Click on the buttons to have some fun");
            break;

    }   
}