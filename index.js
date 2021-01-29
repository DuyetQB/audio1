let audios = ["https://file-am-thanh.vercel.app/Chung%20Ta%20Cua%20Hien%20Tai%20-%20Son%20Tung%20M-TP.mp3"];

let audio = new Audio();
let nowSong = 0;


function playSong(){
audio.src= audios[nowSong];
audio.play();
audio.loop= true ;
}
window.onload = playSong;