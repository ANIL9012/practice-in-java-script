// Initialize the variable

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItems"));

// header part scrolling


let songs = [
  {
    songName: "Jindagi-shop-haath-deenanath-ke",
    filePath: "songs/1.mp3",
    imagePath: "images/1.jpg",
  },
  {
    songName: "Dhun-chuk-dhu",
    filePath: "songs/2.mp3",
    imagePath: "images/2.jpg",
  },
  {
    songName: "He-ha-ha-ha",
    filePath: "songs/3.mp3",
    imagePath: "images/3.jpg",
  },
  {
    songName: "Traiveler",
    filePath: "songs/4.mp3",
    imagePath: "images/4.jpg",
  },
  {
    songName: "Tun-tun-tune",
    filePath: "songs/5.mp3",
    imagePath: "images/5.jpg",
  },
  {
    songName: "Mangle-bhaban-aa-mangle-haari",
    filePath: "songs/6.mp3",
    imagePath: "images/6.jpg",
  },
  {
    songName: "Changes-in-dhun-tana",
    filePath: "songs/7.mp3",
    imagePath: "images/7.jpg",
  },
  {
    songName: "Bande-ke-dil-mai-kya",
    filePath: "songs/8.mp3",
    imagePath: "images/8.jpg",
  },
  {
    songName: "Agar-Nath-Dekhoge-Abgun",
    filePath: "songs/9.mp3",
    imagePath: "images/9.jpg",
  },
  {
    songName: "Kahu-reechh-pati-sun",
    filePath: "songs/10.mp3",
    imagePath: "images/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].imagePath;
  element.getElementsByClassName("spanOne")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle play/pause

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      let clickedIndex = parseInt(e.target.id);

      // 🔹 Agar wahi song dobara click hua aur wo already play ho raha hai
      if (songIndex === clickedIndex && !audioElement.paused) {
        audioElement.pause();
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
      } else {
        // 🔹 Naya song play hoga
        makeAllPlays();
        songIndex = clickedIndex;
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");

        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
      }
    });
  }
);

