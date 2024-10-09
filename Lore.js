// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
    {
        name: "FUI FUI",
        artist: "El Poeta",
        image: "PoetaFuiFuiPic.jpg",
        path: "EL POETA - FIU FIU.mp3"
    },
    {
        name: "Hey mor",
        artist: "Ozuna Ft Feid",
        image: "morpic.jpg",
        path: "Ozuna, Feid - Hey Mor (Visualizer Oficial)  Ozutochi.mp3"
    },
    {
	    name: "Humo",
	    artist: "Chencho Corleone, Peso Pluma",
	    image: "humopic.jpg",
	    path:"Chencho Corleone, Peso Pluma - HUMO (Official Video).mp3"
    },
    {
        name: "SEXO DESENFRENADO",
        artist: "Myke Towers",
        image: "MIKEPIC22222.jpg",
        path: "Myke Towers - SEXO DESENFRENADO.mp3"
    },
    {
        name: "Inocente",
        artist: "Myke Towers",
        image: "INOCENTEMIKEPIC.jpg",
        path: "Myke Towers - Inocente.mp3"
    },
    {
        name: "DINERO y FAMA",
        artist: "Myke Towers & Omar Montes ",
        image: "MykeDineroYfamaPic.jpg",
        path: "Myke Towers & Omar Montes - DINERO y FAMA.mp3"
    },
    {
        name: "Somos Iguales",
        artist: "Darell, The Rudeboyz",
        image: "DARELLOCAPIC.jpg",
        path: "Darell, The Rudeboyz - Somos Iguales.mp3"
    },
    {
        name: "Bellakita",
        artist: "Conep & Anuel AA",
        image: "anuelconebellPic.jpg",
        path: "Conep & Anuel AA - Bellakita.mp3"
    },
    {
        name: "Fiel",
        artist: "Wisin x  Jhay Cortez",
        image: "jhaycowisinfielpic.jpg",
        path: "Wisin x  Jhay Cortez - Fiel.mp3"
    },
    {
        name: "Amantes y Amigos",
        artist: "Arcangel x Sech",
        image: "arcangelsechpicc.jpg",
        path: "Arcangel x Sech-Amantes y Amigos.mp3"
    },
    {
        name: "Pierdo La Cabeza",
        artist: "Zion & Lennox",
        image: "zionlenoxpierdopic.jpg",
        path: "Zion & Lennox - Pierdo La Cabeza.mp3"
    },
    {
        name: "La Llevo Al Cielo",
        artist: "Chencho Corleone, Chris Jedi, Anuel AA , Ñengo Flow ",
        image: "LALLEVOALCIELOPICC.jpg",
        path: "lallevoalcielo-mp3.mp3"
    },
    {
        name: "Escándalo",
        artist: "Ñengo Flow",
        image: "NEGOPIC4444.jpg",
        path: "Ñengo Flow - Escándalo.mp3"
    },
    {
        name: "Poderoso",
        artist: "Cosculluela",
        image: "COSCUPIC111.jpg",
        path: "Cosculluela - Poderoso.mp3"
    },
    {
        name: "Yandel 150",
        artist: "Yandel, Feid",
        image: "feidyandelpiccc.jpg",
        path: "Yandel, Feid - Yandel 150.mp3"
    },
    {
        name: " Doxxis",
        artist: "Arcangel, Yandel",
        image: "arcangelyandelpic.jpg",
        path: "Arcangel, Yandel - Doxxis.mp3"
    },
    {
        name: "AUNQUE LLEGUE OTRO",
        artist: "Myke Towers & Jay Wheeler",
        image: "mykejaypic.jpg",
        path: "Myke Towers & Jay Wheeler - AUNQUE LLEGUE OTRO.mp3"
    },
    {
        name: "District",
        artist: "Chencho Corleone & Jowell y Randy",
        image: "chenchopic333.jpg",
        path: "Chencho Corleone & Jowell y Randy - District.mp3"
    },
    {
        name: "Chencho Corleone X Miky Woodz ",
        artist: "Impaciente",
        image: "CHENCHOMIKYIMPAPICC.jpg",
        path: "Chencho Corleone  Miky Woodz  Impaciente.mp3"
    },
    {
        name: "Welcome to my crib",
        artist: "Jowell y Randy",
        image: "RANDYWELCOMEPICCC.jpg",
        path: "Jowell y Randy - Welcome to my crib.mp3"
    },
    {
        name: "Gallery Dept",
        artist: "Myke Towers",
        image: "mykepic2.jpg",
        path: "Myke Towers - Gallery Dept.mp3"
    },
    {
        name: "Boomerang",
        artist: "Sech ",
        image: "sechpic2.jpg",
        path: "Sech - Boomerang.mp3"
    },
    {
        name: "X Ti",
        artist: "Sech",
        image: "sechpi3.jpg",
        path: "Sech - X Ti.mp3"
    },
    {
        name: "LOCO X PERREARTE",
        artist: "Wisin FT Chencho Corleone",
        image: "CHENCHOWISINPIC.jpg",
        path: "Wisin, Chencho Corleone - LOCO X PERREARTE.mp3"
    },
    {
        name: "Puro Guayeteo",
        artist: "Wisin, Don Omar, Jowell & Randy",
        image: "GUAYETEOPIC.jpg",
        path: "Wisin, Don Omar, Jowell & Randy - Puro Guayeteo.mp3"
    },
    {
        name: "Otra Vibra",
        artist: "Luar La L x Ozuna",
        image: "LUAROZUNAPIC.jpg",
        path: "Luar La L x Ozuna - Otra Vibra.mp3"
    },
    {
        name: "Polvo de tu Vida",
        artist: "J Balvin, Chencho Corleone",
        image: "CHENCHOJBALVINPIC.jpg",
        path: "J Balvin, Chencho Corleone - Polvo de tu Vida.mp3"
    },
    {
        name: "Nos Comemos Vivos",
        artist: "Maluma, Chencho Corleone",
        image: "CHNCHEMALUPIC.jpg",
        path: "Maluma, Chencho Corleone - Nos Comemos Vivos.mp3"
    },
    {
        name: "Batman en Can Am",
        artist: "Arcángel",
        image: "ARCANGELPIC2.jpg",
        path: "Arcángel - Batman en Can Am.mp3"
    },
    {
        name: "DON & TEGO",
        artist: "Myke Towers & Arcangel",
        image: "MIKEARCPICCC.jpg",
        path: "Myke Towers & Arcangel - DON & TEGO.mp3"
    },
    {
        name: "MAYOR",
        artist: "Myke Towers x Yandel",
        image: "MIKEYANDELP[IC.jpg",
        path: "MAYOR - Myke Towers & Yandel.mp3"
    },
    {
        name: "Porsche Carrera",
        artist: "Jhayco, Yandel",
        image: "JHAYPICCCCC.jpg",
        path: "JHAYCO, Yandel - Porsche Carrera.mp3"
    },
    {
        name: "Guatauba",
        artist: "Cosculluela",
        image: "COSCUPIC222.jpg",
        path: "Guatauba - Cosculluela.mp3"
    },    
    {
        name: "Celos",
        artist: "Myke Towers & J Balvin",
        image: "CELOSPIC.jpg",
        path: "Myke Towers & J Balvin - Celos.mp3"
    },
    {
        name: "Caramelo(Remix)",
        artist: "Ozuna ft Myke Towers, Karol G",
        image: "carameloRPIC.jpg",
        path: "Ozuna - Caramelo Remix (LetraLyrics) ft. Karol G, Myke Towers.mp3"
    },
    {
        name: "LolliPoP",
        artist: "Darell",
        image: "darrellolpic.jpg",
        path: "Darell - Lollipop (Audio).mp3"
    },
    {
        name: "Piensan",
        artist: "Myke Towers",
        image: "mikepiensanpi.jpg",
        path: "Myke Towers - Piensan (Video Oficial).mp3"
    },
    {
        name: "Tiene Novio",
        artist: "Sech ft Manuel Turizo",
        image: "sechManuel.jpg",
        path: "Sech - Tiene Novio Ft. Manuel Turizo [Audio Oficial].mp3"
    },
    {
        name: "Rest in Peace",
        artist: "Darell, Ñengo Flow",
        image: "NENGODARPIC.jpg",
        path: "Darell, Ñengo Flow - Rest in Peace (Official Video).mp3"
    },
    {
        name: "Madura",
        artist: "Cosculluela FT Bad Bunny",
        image: "MADURAPIC.jpg",
        path: "Cosculluela, Bad Bunny - Madura (Video Oficial).mp3"
    },
    {
        name: "Estamos bien",
        artist: "Darell ft Cosculluela",
        image: "ESTAMOSBIENPIC.jpg",
        path: "Darell x Cosculluela - Estamos Bien [Official Video].mp3"
    },
    {
        name: "VAMO A DALE",
        artist: "Myke Towers ft Cosculluela",
        image: "1COCUMIKEPIC.jpg",
        path: "Myke Towers & Cosculluela - VAMO A DARLE (Visualizer).mp3"
    },
    {
        name: "DIABLITA",
        artist: "Myke Towers ft Youngchimi",
        image: "DIABLITAPIC.jpg",
        path: "Myke Towers & Yovngchimi - DIABLITA (Visualizer).mp3"
    },
    {
        name: "Una Locura",
        artist: "Ozuna FT J Balvin, Chencho Corleone",
        image: "LOCURAPIC.jpg",
        path: "Ozuna x J Balvin x Chencho Corleone - Una Locura (Video Oficial).mp3"
    },
    {
        name: "512",
        artist: "Mora Ft Jhay Cortez",
        image: "Mora-JhayPIC.jpg",
        path: "Mora x Jhay Cortez - 512 (Video Oficial).mp3"
    },
    {
        name: "Como se siente",
        artist: "Jhay Cortez",
        image: "jhayPic.jpg",
        path: "Como se siente jhay cortez (audio oficial).mp3"
    },
];


function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage = 
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = 
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
    
    // Apply a random background color
    random_bg_color();
    }
    
    function random_bg_color() {
    // Get a random number between 64 to 256
    // (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    
    // Construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    // Set the background to the new color
    document.body.style.background = bgColor;
    }
    
    // Function to reset all values to their default
    function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

    function playpauseTrack() {
        // Switch between playing and pausing
        // depending on the current state
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        }
        
        function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }

        function seekTo() {
            // Calculate the seek position by the
            // percentage of the seek slider 
            // and get the relative duration to the track
            seekto = curr_track.duration * (seek_slider.value / 100);
            
            // Set the current track position to the calculated seek position
            curr_track.currentTime = seekto;
            }
            
            function setVolume() {
            // Set the volume according to the
            // percentage of the volume slider set
            curr_track.volume = volume_slider.value / 100;
            }
            
            function seekUpdate() {
            let seekPosition = 0;
            
            // Check if the current track duration is a legible number
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;
            
                // Calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
            
                // Add a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            
                // Display the updated duration
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
            }

            // Load the first track in the tracklist
loadTrack(track_index);
