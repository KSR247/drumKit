var clap = new Audio('./sounds/clap.wav');
var hihat = new Audio('./sounds/hihat.wav');
var kick = new Audio('./sounds/kick.wav');
var openhat = new Audio('./sounds/openhat.wav');
var boom = new Audio('./sounds/boom.wav');
var ride = new Audio('./sounds/ride.wav');
var snare = new Audio('./sounds/snare.wav');
var tom = new Audio('./sounds/tom.wav');
var tink = new Audio('./sounds/tink.wav');
var clap2 = document.getElementById('clap2');
var hihat2 = document.getElementById('hihat2');
var kick2 = document.getElementById('kick2');
var openaht2 = document.getElementById('openhat2');
var boom2 = document.getElementById('boom2');
var ride2 = document.getElementById('ride2');
var snare2 = document.getElementById('snare2');
var tom2 = document.getElementById('tom2');
var tick2 = document.getElementById('tick2');


document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyA'){
        clap.currentTime = 0;
        clap.play();
        clap2.classList.add('style');
    } else if (event.code == 'KeyS') {
        hihat.currentTime = 0;
        hihat.play();
        hihat2.classList.add('style');
    } else if (event.code == 'KeyD'){
        kick.currentTime = 0;
        kick.play();
    } else if (event.code == 'KeyF') {
        openhat.currentTime = 0;
        openhat.play();
    } else if (event.code == 'KeyG'){
        boom.currentTime = 0;
        boom.play();
    } else if (event.code == 'KeyH') {
        ride.currentTime = 0;
        ride.play();
    } else if (event.code == 'KeyJ') {
        snare.currentTime = 0;
        snare.play();
    } else if (event.code == 'KeyK'){
        tom.currentTime = 0;
        tom.play();
    } else if (event.code == 'KeyL'){
        tink.currentTime = 0;
        tink.play();
    }
});

clap2.addEventListener('click', (event) => {
    clap.currentTime = 0;
    clap.play();
});
hihat2.addEventListener('click', (event) => {
    hihat.currentTime = 0;
    hihat.play();
});
kick2.addEventListener('click', (event) => {
    kick.currentTime = 0;
    kick.play();
});
openhat2.addEventListener('click', (event) => {
    openhat.currentTime = 0;
    openhat.play();
});
boom2.addEventListener('click', (event) => {
    boom.currentTime = 0;
    boom.play();
});
ride2.addEventListener('click', (event) => {
    ride.currentTime = 0;
    ride.play();
});
snare2.addEventListener('click', (event) => {
    snare.currentTime = 0;
    snare.play();
});
tom2.addEventListener('click', (event) => {
    tom.currentTime = 0;
    tom.play();
});
tink2.addEventListener('click', (event) => {
    tink.currentTime = 0;
    tink.play();
});

