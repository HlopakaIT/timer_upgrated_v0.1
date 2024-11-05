const timerCreator = document.getElementById("timer-creator");

timerCreator.addEventListener("click", showTimer);

const content = document.getElementById("content");

let intervalId;
let timer;
let pause;
let reset;

let test = document.getElementById("text-area").value

function showTimer() {
    if(!timer) {
        timer = document.createElement("p");
        timer.innerHTML = document.getElementById("text-area").value;
        content.append(timer);


        intervalId = setInterval(() => {
            timer.innerHTML--
        }, 1000)


        pause = document.createElement("input");
        pause.type = "button";
        pause.value = "Pause";
        pause.addEventListener("click", pauseTimer);
        content.append(pause);

        reset = document.createElement("input");
        reset.type = "button";
        reset.value = "Reset";
        content.append(reset);

    } else {
        timer.innerHTML = document.getElementById("text-area").value;
    }
}

function pauseTimer() {
    if(!pause.id) {
        clearInterval(intervalId);
        pause.value = "Resume";
        pause.id = "resume"
    } else if(pause.id) {
        pause.removeAttribute("id");
        pause.value = "Pause";

        
        intervalId = setInterval(() => {
            timer.innerHTML--
        }, 1000)


        console.log("hi");
    }


}

