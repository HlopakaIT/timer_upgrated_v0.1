const timerCreatorButton = document.getElementById("timer-creator");

timerCreatorButton.addEventListener("click", createOrChangeTimer);

let timer;
let pause;
let reset;
const writeArea = document.getElementById("write-area");


function createTimer() {

    timer = document.createElement("p");
    timer.className = "timer";
    const content = document.getElementById("content");

    timer.innerHTML = writeArea.value;
    content.append(timer);

    pause = document.createElement("input");
    pause.addEventListener("click", pauseResumeTimer);
    pause.className = "pause";
    pause.type = "button";
    pause.value = "Pause";
    content.append(pause);

    reset = document.createElement("input");
    reset.addEventListener("click", resetTimer);
    reset.className = "reset";
    reset.type = "button";
    reset.value = "Reset";
    content.append(reset);

    intervalId = setInterval(() => {
        timer.innerHTML--
        if(timer.innerHTML == 0) {
            alert("THE END");
            clearInterval(intervalId);
            timer.remove();
            reset.remove();
            pause.remove();
        }
    }, 1000)
}




function createOrChangeTimer() {
    if(writeArea.value <= 0) {
        alert("Enter a number greater than 0");
        return 
    } 


    if(!timer) {
        createTimer()
    } else {
        clearInterval(intervalId);
        timer.remove();
        reset.remove();
        pause.remove();

        createTimer()
    }
}



function pauseResumeTimer() {
    if(!pause.id) {
        clearInterval(intervalId);
        pause.value = "Resume";
        pause.id = "resume";
        pause.className = "resume";
    } else if(pause.id) {
        pause.removeAttribute("id");
        pause.value = "Pause";
        pause.className = "pause";

        intervalId = setInterval(() => {
            timer.innerHTML--
            if(timer.innerHTML == 0) {
                alert("THE END");
                clearInterval(intervalId);
                
                timer.remove();
                reset.remove();
                pause.remove();
            }
        }, 1000)
    }

}

function resetTimer() {
    clearInterval(intervalId);
    timer.remove();
    reset.remove();
    pause.remove();
}