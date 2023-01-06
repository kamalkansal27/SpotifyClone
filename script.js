console.log("Welcome to the Spotify");
// Declare the variables.
let audioElement = new Audio("Music/Stargaze.mp3");
let index = 0;
let masterPlay = document.getElementById("masterPlay");
let masterForward = document.getElementById("masterForward");
let masterBackWard = document.getElementById("masterBackWard");
let gif = document.getElementById("gif");
let Stargaze = document.getElementById("Stargaze");
let Moon = document.getElementById("Moon");
let Just = document.getElementById("Just");
let Dreams = document.getElementById("Dreams");
let Drunk = document.getElementById("Drunk");
let myProgressBar = document.getElementById("myProgressBar");
let bottomName = document.getElementsByClassName("bottomName");

let songs = [
    {songName : "Stargaze", filePath : "Music/Stargaze.mp3", coverPath : "pictures/Stargaze.jpg"},
    {songName : "Moon Bound", filePath : "Music/MoonBound.mp3", coverPath : "pictures/MoonBound.jpg"},
    {songName : "Just a Dream", filePath : "Music/Just.mp3", coverPath : "pictures/JustADream.jpg"},
    {songName : "Dream Unfold", filePath : "Music/Dreams.mp3", coverPath : "pictures/DreamsUnfold.jpg"},
    {songName : "Drunk Arjan", filePath : "Music/Drunk.mp3", coverPath : "pictures/DrunkArjan.jpg"}
]


// Listen to the events.
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
masterForward.addEventListener('click', ()=>{
    audioElement.pause();
    index++;
    audioElement.src = songs[index%songs.length].filePath;
    audioElement.play();
    gif.style.opacity = 1;
});
masterBackward.addEventListener('click', ()=>{
    audioElement.pause();
    index--;
    audioElement.src = songs[index%songs.length].filePath;
    audioElement.play();
    gif.style.opacity = 1;
});
Stargaze.addEventListener('click',()=>{
    index = 0;
    audioElement.pause();
    audioElement.src = "Music/Stargaze.mp3";
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});
Moon.addEventListener('click',()=>{
    index = 1;
    audioElement.pause();
    audioElement.src = "Music/MoonBound.mp3";
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});
Just.addEventListener('click',()=>{
    index = 2;
    audioElement.pause();
    audioElement.src = "Music/Just.mp3";
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});
Dreams.addEventListener('click',()=>{
    index = 3;
    audioElement.pause();
    audioElement.src = "Music/Dreams.mp3";
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});
Drunk.addEventListener('click',()=>{
    index = 4;
    audioElement.pause();
    audioElement.src = "Music/Drunk.mp3";
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});