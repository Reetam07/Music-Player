console.log("Welcome to My Website");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "01. Bariye dao tomar haath", filePath: "songs/1.mp3"},
    {songName: "02. Amake amar moto thakte dao", filePath: "songs/2.mp3"},
    {songName: "03. Jawl phoring", filePath: "songs/3.mp3"},
    {songName: "04. Faka frame", filePath: "songs/4.mp3"},
    {songName: "05. Ghorbari", filePath: "songs/5.mp3"},
    {songName: "06. Ekhon onek raat", filePath: "songs/6.mp3"},
    {songName: "07. Bondhu chol", filePath: "songs/7.mp3"},
    {songName: "08. Beche thaakar gaan", filePath: "songs/8.mp3"},
    {songName: "09. Boba tunnel", filePath: "songs/9.mp3"},
    {songName: "10. Sohage adore", filePath: "songs/10.mp3"},
    {songName: "11. Katakuti Khela", filePath: "songs/11.mp3"},
    {songName: "12. Protidin", filePath: "songs/12.mp3"},
    {songName: "13. Ekbar bol", filePath: "songs/13.mp3"},
    {songName: "14. Tumi jake bhablobasho", filePath: "songs/14.mp3"},
    {songName: "15. Chaka", filePath: "songs/15.mp3"},
    {songName: "16. Lokkhhiti", filePath: "songs/16.mp3"},
    {songName: "17. Shilalipi Bhalobasha", filePath: "songs/17.mp3"},
    {songName: "18. Obhabe Kano", filePath: "songs/18.mp3"},
    {songName: "19. Je kota din", filePath: "songs/19.mp3"},
    {songName: "20. Toy train", filePath: "songs/20.mp3"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
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
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})