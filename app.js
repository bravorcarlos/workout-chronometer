//Minutos, segundos y milisegundos
let s = 0;
let ms = 0;
let rondaCount = 0;
//Contenedores de valores
let sCont = document.getElementById("sCont");
let msCont = document.getElementById("msCont");
let aviso = document.getElementById("aviso");
let ronda = document.getElementById("ronda");
//Botones
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
//Sonidos
let alerta = new Audio("sounds/alerta.mp3")
//Intervalos
let msInterval = null;
let sInterval = null;
let mInterval = null;
//Funciones
function aumentarMs() {
   msInterval = setInterval(() => {
        ms++
        if (ms <= 9) {
            msCont.innerHTML = "0" + ms;
        } else {
            msCont.innerHTML = ms;
        };
        aumentarS();
    }, 10);
};

function aumentarS() {
    if (ms > 99) {
        ms = 0;
        msCont.innerHTML = "0" + ms;
        s++;
        if (s <= 9) {
            sCont.innerHTML = "0" + s;
        } else {
            sCont.innerHTML = s;
        }
    }
    checkTime();
 };

 function checkTime() {
    if (s <= 19) {
        aviso.style.color = "green";
        aviso.innerHTML = "Actividad";
    } else {
        aviso.style.color = "red"
        aviso.innerHTML = "Descanso";
        if (s > 39) {
            s = 0;
            sCont.innerHTML = "0" + s;
            rondaCount++;
            ronda.innerHTML = "Ronda: " + rondaCount;
        }
    }

    sonar();
 };

 function sonar() {
    if (s === 20) {
        alerta.play();
    }

    if (s === 0) {
        alerta.play();
    }
 };

//Eventos
start.addEventListener("click", function() {
    aumentarMs();
    reset.disabled = true;
    start.disabled = true;
    ronda.innerHTML = "Ronda: " + rondaCount;
});

stop.addEventListener("click", function() {
    clearInterval(msInterval);
    reset.disabled = false;
    start.disabled = false;
});

reset.addEventListener("click", function() {
    s = 0;
    ms = 0;
    sCont.innerHTML = "00";
    msCont.innerHTML = "00";
    aviso.style.color = "rgba(0, 0, 0, 0.5)";
    aviso.innerHTML = "Inicia";
    rondaCount = 0;
    ronda.innerHTML = "";
})