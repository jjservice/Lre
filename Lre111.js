const songs = [ 
    {
        "id": 1,
        "name": "Hijuela",
        "artist": "Chencho Corleone",
        "img": "ChenchoHijuelaPic.jpg",
        "music": "Chencho Corleone - Hijuela.mp3"
    },
    {
        "id": 2,
        "name": "Hey mor",
        "artist": "Ozuna Ft Feid",
        "img": "morpic.jpg",
        "music": "Ozuna, Feid - Hey Mor (Visualizer Oficial)  Ozutochi.mp3"
    },
    {
        "id": 3,
        "name": "Humo",
        "artist": "Chencho Corleone, Peso Pluma",
        "img": "humopic.jpg",
        "music": "Chencho Corleone, Peso Pluma - HUMO (Official Video).mp3"
    },
    {
        "id": 4,
        "name": "Tiempos de Plan B",
        "artist": "Maldy",
        "img": "MaldyTiemplosDeplanBPic.jpg",
        "music": "Maldy - Tiempos de Plan B.mp3"
    },
    {
        "id": 5,
        "name": "SEXO DESENFRENADO",
        "artist": "Myke Towers",
        "img": "MIKEPIC22222.jpg",
        "music": "Myke Towers - SEXO DESENFRENADO.mp3"
    },
    {
        "id": 6,
        "name": "Inocente",
        "artist": "Myke Towers",
        "img": "INOCENTEMIKEPIC.jpg",
        "music": "Myke Towers - Inocente.mp3"
    },
    {
        "id": 7,
        "name": "DINERO y FAMA",
        "artist": "Myke Towers & Omar Montes",
        "img": "MykeDineroYfamaPic.jpg",
        "music": "Myke Towers & Omar Montes - DINERO y FAMA.mp3"
    },
    {
        "id": 8,
        "name": "Somos Iguales",
        "artist": "Darell, The Rudeboyz",
        "img": "DARELLOCAPIC.jpg",
        "music": "Darell, The Rudeboyz - Somos Iguales.mp3"
    },
    {
        "id": 9,
        "name": "Bellakita",
        "artist": "Conep & Anuel AA",
        "img": "anuelconebellPic.jpg",
        "music": "Conep & Anuel AA - Bellakita.mp3"
    },
    {
        "id": 10,
        "name": "Fiel",
        "artist": "Wisin x Jhay Cortez",
        "img": "jhaycowisinfielpic.jpg",
        "music": "Wisin x Jhay Cortez - Fiel.mp3"
    },
    {
        "id": 11,
        "name": "Amantes y Amigos",
        "artist": "Arcangel x Sech",
        "img": "arcangelsechpicc.jpg",
        "music": "Arcangel x Sech - Amantes y Amigos.mp3"
    },
    {
        "id": 12,
        "name": "La Llevo Al Cielo",
        "artist": "Chencho Corleone, Chris Jedi, Anuel AA, Ñengo Flow",
        "img": "LALLEVOALCIELOPICC.jpg",
        "music": "lallevoalcielo-mp3.mp3"
    },
    {
        "id": 13,
        "name": "Escándalo",
        "artist": "Ñengo Flow",
        "img": "NEGOPIC4444.jpg",
        "music": "Ñengo Flow - Escándalo.mp3"
    },
    {
        "id": 14,
        "name": "Poderoso",
        "artist": "Cosculluela",
        "img": "COSCUPIC111.jpg",
        "music": "Cosculluela - Poderoso.mp3"
    },
    {
        "id": 15,
        "name": "Yandel 150",
        "artist": "Yandel, Feid",
        "img": "feidyandelpiccc.jpg",
        "music": "Yandel, Feid - Yandel 150.mp3"
    },
    {
        "id": 16,
        "name": "Doxxis",
        "artist": "Arcangel, Yandel",
        "img": "arcangelyandelpic.jpg",
        "music": "Arcangel, Yandel - Doxxis.mp3"
    },
    {
        "id": 17,
        "name": "AUNQUE LLEGUE OTRO",
        "artist": "Myke Towers & Jay Wheeler",
        "img": "mykejaypic.jpg",
        "music": "Myke Towers & Jay Wheeler - AUNQUE LLEGUE OTRO.mp3"
    },
    {
        "id": 18,
        "name": "District",
        "artist": "Chencho Corleone & Jowell y Randy",
        "img": "chenchopic333.jpg",
        "music": "Chencho Corleone & Jowell y Randy - District.mp3"
    },
    {
        "id": 19,
        "name": "Chencho Corleone X Miky Woodz",
        "artist": "Impaciente",
        "img": "ImpacienteMikyChenchoPic.jpg",
        "music": "Chencho Corleone Ft. Miky Woodz - Impaciente.mp3"
    },
    {
        "id": 20,
        "name": "Welcome to my crib",
        "artist": "Jowell y Randy",
        "img": "RANDYWELCOMEPICCC.jpg",
        "music": "Jowell y Randy - Welcome to my crib.mp3"
    },
    {
        "id": 21,
        "name": "Gallery Dept",
        "artist": "Myke Towers",
        "img": "mykepic2.jpg",
        "music": "Myke Towers - Gallery Dept.mp3"
    },
    {
        "id": 22,
        "name": "Boomerang",
        "artist": "Sech",
        "img": "sechpic2.jpg",
        "music": "Sech - Boomerang.mp3"
    },
    {
        "id": 23,
        "name": "X Ti",
        "artist": "Sech",
        "img": "sechpi3.jpg",
        "music": "Sech - X Ti.mp3"
    },
    {
        "id": 24,
        "name": "LOCO X PERREARTE",
        "artist": "Wisin FT Chencho Corleone",
        "img": "CHENCHOWISINPIC.jpg",
        "music": "Wisin, Chencho Corleone - LOCO X PERREARTE.mp3"
    },
    {
        "id": 25,
        "name": "Puro Guayeteo",
        "artist": "Wisin, Don Omar, Jowell & Randy",
        "img": "GUAYETEOPIC.jpg",
        "music": "Wisin, Don Omar, Jowell & Randy - Puro Guayeteo.mp3"
    },
    {
        "id": 26,
        "name": "Otra Vibra",
        "artist": "Luar La L x Ozuna",
        "img": "LUAROZUNAPIC.jpg",
        "music": "Luar La L x Ozuna - Otra Vibra.mp3"
    },
    {
        "id": 27,
        "name": "Polvo de tu Vida",
        "artist": "J Balvin, Chencho Corleone",
        "img": "CHENCHOJBALVINPIC.jpg",
        "music": "J Balvin, Chencho Corleone - Polvo de tu Vida.mp3"
    },
    {
        "id": 28,
        "name": "Nos Comemos Vivos",
        "artist": "Maluma, Chencho Corleone",
        "img": "CHNCHEMALUPIC.jpg",
        "music": "Maluma, Chencho Corleone - Nos Comemos Vivos.mp3"
    },
    {
        "id": 29,
        "name": "Batman en Can Am",
        "artist": "Arcángel",
        "img": "ARCANGELPIC2.jpg",
        "music": "Arcángel - Batman en Can Am.mp3"
    },
    {
        "id": 30,
        "name": "DON & TEGO",
        "artist": "Myke Towers & Arcangel",
        "img": "MIKEARCPICCC.jpg",
        "music": "Myke Towers & Arcangel - DON & TEGO.mp3"
    },
    {
        "id": 31,
        "name": "MAYOR",
        "artist": "Myke Towers x Yandel",
        "img": "MIKEYANDELP[IC.jpg",
        "music": "MAYOR - Myke Towers & Yandel.mp3"
    },
    {
        "id": 32,
        "name": "Porsche Carrera",
        "artist": "Jhayco, Yandel",
        "img": "JHAYPICCCCC.jpg",
        "music": "JHAYCO, Yandel - Porsche Carrera.mp3"
    },
    {
        "id": 33,
        "name": "Guatauba",
        "artist": "Cosculluela",
        "img": "COSCUPIC222.jpg",
        "music": "Guatauba - Cosculluela.mp3"
    },
    {
        "id": 34,
        "name": "Celos",
        "artist": "Myke Towers & J Balvin",
        "img": "CELOSPIC.jpg",
        "music": "Myke Towers & J Balvin - Celos.mp3"
    },
    {
        "id": 35,
        "name": "Caramelo(Remix)",
        "artist": "Ozuna ft Myke Towers, Karol G",
        "img": "carameloRPIC.jpg",
        "music": "Ozuna - Caramelo Remix (LetraLyrics) ft. Karol G, Myke Towers.mp3"
    },
    {
        "id": 36,
        "name": "LolliPoP",
        "artist": "Darell",
        "img": "darrellolpic.jpg",
        "music": "Darell - Lollipop (Audio).mp3"
    },
    {
        "id": 37,
        "name": "Piensan",
        "artist": "Myke Towers",
        "img": "mikepiensanpi.jpg",
        "music": "Myke Towers - Piensan (Video Oficial).mp3"
    },
    {
        "id": 38,
        "name": "Tiene Novio",
        "artist": "Sech ft Manuel Turizo",
        "img": "sechManuel.jpg",
        "music": "Sech - Tiene Novio Ft. Manuel Turizo [Audio Oficial].mp3"
    },
    {
        "id": 39,
        "name": "Rest in Peace",
        "artist": "Darell, Ñengo Flow",
        "img": "NENGODARPIC.jpg",
        "music": "Darell, Ñengo Flow - Rest in Peace (Official Video).mp3"
    },
    {
        "id": 40,
        "name": "Madura",
        "artist": "Cosculluela FT Bad Bunny",
        "img": "MADURAPIC.jpg",
        "music": "Cosculluela, Bad Bunny - Madura (Video Oficial).mp3"
    },
    {
        "id": 41,
        "name": "Estamos bien",
        "artist": "Darell ft Cosculluela",
        "img": "ESTAMOSBIENPIC.jpg",
        "music": "Darell x Cosculluela - Estamos Bien [Official Video].mp3"
    },
    {
        "id": 42,
        "name": "VAMO A DALE",
        "artist": "Myke Towers ft Cosculluela",
        "img": "1COCUMIKEPIC.jpg",
        "music": "Myke Towers & Cosculluela - VAMO A DARLE (Visualizer).mp3"
    },
    {
        "id": 43,
        "name": "DIABLITA",
        "artist": "Myke Towers ft Youngchimi",
        "img": "DIABLITAPIC.jpg",
        "music": "Myke Towers & Yovngchimi - DIABLITA (Visualizer).mp3"
    },
    {
        "id": 44,
        "name": "Una Locura",
        "artist": "Ozuna FT J Balvin, Chencho Corleone",
        "img": "LOCURAPIC.jpg",
        "music": "Ozuna x J Balvin x Chencho Corleone - Una Locura (Video Oficial).mp3"
    },
    {
        "id": 45,
        "name": "512",
        "artist": "Mora Ft Jhay Cortez",
        "img": "Mora-JhayPIC.jpg",
        "music": "Mora x Jhay Cortez - 512 (Video Oficial).mp3"
    },
    {
        "id": 46,
        "name": "Como se siente",
        "artist": "Jhay Cortez",
        "img": "jhayPic.jpg",
        "music": "Como se siente jhay cortez (audio oficial).mp3"
    },
    {
        "id": 47,
        "name": "Pierdo La Cabeza",
        "artist": "Zion & Lennox",
        "img": "zionlenoxpierdopic.jpg",
        "music": "Zion & Lennox - Pierdo La Cabeza.mp3"
    }
    
 ];
 const searchInput = document.getElementById("search-input");
 const songList = document.getElementById("song-list");
 const audioPlayer = document.getElementById("audio-player");
 const audioSource = document.getElementById("audio-source");
 const prevButton = document.getElementById("prev-button");
 const nextButton = document.getElementById("next-button");
 const randomButton = document.getElementById("random-button");
 const playPauseButton = document.getElementById("play-pause-button");
 const progressBar = document.getElementById("progress-bar");
 const volumeSlider = document.getElementById("volume-slider");
 const muteButton = document.getElementById("mute-button");
 
 let isPlaying = false;
 let currentSongId = null;
 let isMuted = false;
 
 function renderSongs(filteredSongs = songs) {
     songList.innerHTML = "";
 
     filteredSongs.forEach(song => {
         const songItem = document.createElement("div");
         songItem.classList.add("song-item");
         songItem.dataset.songId = song.id;
         songItem.innerHTML = `
             <img src="${song.img}" alt="${song.name}">
             <span>${song.name} - ${song.artist}</span>
             <button class="play-button"><i class="fas fa-play"></i></button>
         `;
 
         const playButton = songItem.querySelector(".play-button");
         playButton.addEventListener("click", () => {
             playOrPauseSong(song, playButton);
         });
 
         songList.appendChild(songItem);
     });
 }
 
 function playOrPauseSong(song, button) {
    // Get the song image element by ID
    const songImageDisplay = document.getElementById("current-song-image");

    if (isPlaying && currentSongId === song.id) {
        audioPlayer.pause();
        button.querySelector("i").classList.replace("fa-pause", "fa-play");
        playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
        isPlaying = false;
    } else {
        audioSource.src = song.music;
        audioSource.dataset.songId = song.id;
        audioPlayer.load();
        audioPlayer.play();
        button.querySelector("i").classList.replace("fa-play", "fa-pause");
        playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
        isPlaying = true;
        currentSongId = song.id;
    }

    // Update the current song name display
    const songNameDisplay = document.getElementById("current-song-name");
    songNameDisplay.textContent = song.name;
    
    // Update the current artist name display
    const artistNameDisplay = document.getElementById("current-artist-name");
    artistNameDisplay.textContent = song.artist; // Display the artist name
    
    // Update the current song ID display
    const idNumberDisplay = document.getElementById("current-id");
    idNumberDisplay.textContent = song.id; // Display the song ID

    // Update the song image
    songImageDisplay.src = song.img; // Set the image source to the song's image
}

 

 
 audioPlayer.addEventListener("ended", function() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 });
 
 function playNextSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 }
 
 function playPrevSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
     playOrPauseSong(songs[prevSongIndex], document.querySelector(`[data-song-id="${songs[prevSongIndex].id}"] .play-button`));
 }
 
 function playRandomSong() {
     const randomIndex = Math.floor(Math.random() * songs.length);
     playOrPauseSong(songs[randomIndex], document.querySelector(`[data-song-id="${songs[randomIndex].id}"] .play-button`));
 }
 
 prevButton.addEventListener("click", playPrevSong);
 nextButton.addEventListener("click", playNextSong);
 randomButton.addEventListener("click", playRandomSong);
 
 // Handle play/pause button toggle
 playPauseButton.addEventListener("click", () => {
     if (isPlaying) {
         audioPlayer.pause();
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         if (currentSongId === null) {
             // If no song is playing, start the first song
             playOrPauseSong(songs[0], document.querySelector(`[data-song-id="${songs[0].id}"] .play-button`));
         } else {
             audioPlayer.play();
             playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
             isPlaying = true;
         }
     }
 });
 
 // Progress Bar update
 audioPlayer.addEventListener("timeupdate", () => {
     if (audioPlayer.duration) {
         const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
         progressBar.value = progress;
     }
 });
 
 // Seek functionality
 progressBar.addEventListener("click", (event) => {
     const seekTime = (event.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
     audioPlayer.currentTime = seekTime;
 });
 
 // Handle volume control slider
 volumeSlider.addEventListener("input", (event) => {
     audioPlayer.volume = event.target.value;
 });
 
 // Handle mute/unmute button
 muteButton.addEventListener("click", () => {
     if (isMuted) {
         audioPlayer.muted = false;
         volumeSlider.value = audioPlayer.volume;
         muteButton.querySelector("i").classList.replace("fa-volume-mute", "fa-volume-up");
     } else {
         audioPlayer.muted = true;
         muteButton.querySelector("i").classList.replace("fa-volume-up", "fa-volume-mute");
     }
     isMuted = !isMuted;
 });
 
 audioPlayer.addEventListener("play", () => {
     playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
     isPlaying = true;
 });
 
 audioPlayer.addEventListener("pause", () => {
     playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
     isPlaying = false;
 });
 
 renderSongs();
 
 searchInput.addEventListener("input", function() {
     const searchQuery = searchInput.value.toLowerCase();
 
     const filteredSongs = songs.filter(song =>
         song.name.toLowerCase().includes(searchQuery) ||
         song.artist.toLowerCase().includes(searchQuery)
     );
 
     renderSongs(filteredSongs);
 });

 ///voice search ///
 const voiceSearchButton = document.getElementById("voice-search-button");

// Check if the SpeechRecognition API is available
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "es-ES"; // Set language for recognition (you can change this to other languages)
    recognition.continuous = false; // Only listen for a single command
    recognition.interimResults = false; // No need for interim results

    // Function to start the voice recognition when the button is clicked
    voiceSearchButton.addEventListener("click", () => {
        recognition.start();
    });

    // Handle the speech recognition result
    recognition.addEventListener("result", (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
        searchInput.value = transcript; // Set the search input to the recognized speech

        // Filter the songs based on the recognized voice input
        const filteredSongs = songs.filter(song =>
            song.name.toLowerCase().includes(transcript) ||
            song.artist.toLowerCase().includes(transcript)
        );

        renderSongs(filteredSongs); // Render the filtered song list
    });

    // Handle speech recognition errors
    recognition.addEventListener("error", (event) => {
        console.error("Speech recognition error:", event.error);
    });

    // Optionally, handle the end of recognition
    recognition.addEventListener("end", () => {
        console.log("Voice search ended");
    });
} else {
    console.error("Sorry, Lollita can not recognized your voice");
}

// Assuming you already have the following in your HTML:
// <audio id="notification-sound" src="notification.mp3" preload="auto"></audio>

const notificationSound = document.getElementById("notification-sound");

// Voice search event listener for recognition result
recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
    searchInput.value = transcript; // Set the search input to the recognized speech

    // Filter the songs based on the recognized voice input
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(transcript) ||
        song.artist.toLowerCase().includes(transcript)
    );

    renderSongs(filteredSongs); // Render the filtered song list

    // Play the sound notification if songs are found
    if (filteredSongs.length > 0) {
        notificationSound.play(); // Play sound if matches are found
    }
});

// Optional: Handle other events like error and end if you want to give feedback for those situations
recognition.addEventListener("error", (event) => {
    console.error("Speech recognition error:", event.error);
});

// Optional: Handle end of recognition event
recognition.addEventListener("end", () => {
    console.log("Voice search ended");
});


recognition.addEventListener("result", (event) => {
    // Get the transcript from the speech recognition result
    let transcript = event.results[0][0].transcript.toLowerCase();

    // Remove the period at the end of the text if it exists
    if (transcript.endsWith(".")) {
        transcript = transcript.slice(0, -1); // Remove the last character (the period)
    }

    // Set the search input to the recognized speech (without period)
    searchInput.value = transcript;

    // Filter the songs based on the recognized voice input
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(transcript) ||
        song.artist.toLowerCase().includes(transcript)
    );

    renderSongs(filteredSongs); // Render the filtered song list

    // Play the sound notification if songs are found
    if (filteredSongs.length > 0) {
        notificationSound.play(); // Play sound if matches are found
    }
});

function toggleClassPlayer(){

    const body = document.querySelector('body');
    body.classList.toggle('lightPlayer');
    
    }
