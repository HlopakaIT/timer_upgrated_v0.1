const timerCreator = document.getElementById("timer-creator");

timerCreator.addEventListener("click", showTimer);

const content = document.getElementById("content");

const timerInputNum = document.getElementById("write-area").value;

let intervalId;
let timer;
let pause;
let reset;


function showTimer() {
    if(!timer && timerInputNum >= 0) {
        timer = document.createElement("p");
        timer.id = "timer"
        timer.innerHTML = document.getElementById("write-area").value;
        content.append(timer);
        console.log("timer est'")

    
        pause = document.createElement("input");
        pause.type = "button";
        pause.value = "Pause";
        pause.addEventListener("click", pauseTimer);
        content.append(pause);


        reset = document.createElement("input");
        reset.type = "button";
        reset.value = "Reset";
        reset.addEventListener("click", resetTimer);
        content.append(reset);


        if(!intervalId) {
            intervalId = setInterval(() => {
                timer.innerHTML--
                const timerNum = timer.innerHTML

                if(intervalId && timerNum <= 0) {
                    alert("THE END");
                    clearInterval(intervalId);
                    timer.remove()
                    pause.remove()
                    reset.remove()

                    // timer = null;
                    // pause = null;
                    // reset = null;
                }
                
            }, 1000)
        }


    } else {
        console.log(timer)
        timer.innerHTML = document.getElementById("write-area").value;
        

    }
}


function pauseTimer() {
    if(!pause.id) {
        clearInterval(intervalId);
        pause.value = "Resume";
        pause.id = "resume"
        console.log("paused");
    } else if(pause.id) {
        pause.removeAttribute("id");
        pause.value = "Pause";

        
        intervalId = setInterval(() => {
            timer.innerHTML--
        }, 1000)


        console.log("resumed");
    }
}


function resetTimer() {
    clearInterval(intervalId);
    timer.remove()
    pause.remove()
    reset.remove()
}