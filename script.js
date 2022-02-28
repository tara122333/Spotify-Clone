console.log("Welcome to my spotify clone");
let songIndex = 0;
let audioElement = new Audio("/songs/1.mp3");
let masterplay = document.getElementById('masterplay');
let progress = document.getElementById('progress');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let playergif = document.getElementById('playergif');
let songItems = Array.from(document.getElementsByClassName('songItems'));
// audioElement.play();



let songs = [
    {songName: "Warrios1", filePath: "songs/1.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios2", filePath: "songs/2.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios3", filePath: "songs/3.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios4", filePath: "songs/1.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios5", filePath: "songs/2.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios6", filePath: "songs/3.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios7", filePath: "songs/1.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios8", filePath: "songs/2.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios9", filePath: "songs/3.mp3", coverPath: "Images/1.jpg"},
    {songName: "Warrios10", filePath: "songs/1.mp3", coverPath: "Images/1.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        playergif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        playergif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
   // update seekBar 
   myProgress = ((audioElement.currentTime/audioElement.duration)*100);
   progress.value = myProgress;
})
progress.addEventListener('change', ()=>{
    audioElement.currentTime = ((progress.value * audioElement.duration)/100);
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/1.mp3';
        audioElement.currentTime = 0;
        audioElement.play();

    })
})
