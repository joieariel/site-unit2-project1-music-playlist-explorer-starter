// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("playlist-modal");
const span = document.getElementsByClassName("close")[0];

function openModal(playlistModal) {
   document.getElementById('modal-playlist-image').src= playlistModal.playlist_art;
   document.getElementById('modal-title').innerText = playlistModal.playlist_name;
   document.getElementById('modal-creator').innerText = playlistModal.playlist_author;
  /* document.getElementById('modalSongImage').innerHTML = */
   document.getElementsByClassName('song-title').innerText = playlistModal.songs[0].title;
   document.getElementsByClassName('song-artist').innerText = playlistModal.songs[0].artist;
   document.getElementsByClassName('album-name').innerText = playlistModal.songs[0].album;
   document.getElementsByClassName('song-duration').innerText = playlistModal.songs[0].duration;
   modal.style.display = "block";
}

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}



//const playlists = document.query
const playlists = [
   {
     "playlistID": "001",
     "playlist_name": "Neo-Soul",
     "playlist_author": "Jeremiah",
     "playlist_art": "assets/img/rnb.jpeg",
     "likes": 0,
     "songs": [
       {
           title: "Nights",
           artist: "Frank Ocean",
           album: "Blonde",
           duration: "3:30",
       },

       {
           title: "Go Baby",
           artist: "Cleo Sol",
           album: "IDK",
           duration: "3:30",
       },

       {
           title: "Whipped Cream",
           artist: "Ari Lennox",
           album: "IDK",
           duration: "3:30",
       }
     ]
   },

   {
     playlistID: "002",
     "playlist_name": "Classical",
     "playlist_author": "Amaya",
     "playlist_art": "assets/img/playlist.png",
     "likes": 0,
     "songs": [
       {
           title: "Moonlight Sonata",
           artist:"Beethoven",
           album: "Moonlight Sonata",
           duration: "3:30",
       },

       {
           title: "Canon in D",
           artist: "Pachelbel",
           album: "Canon in D",
           duration: "3:30",
       },

       {
           title: "Clair De Lune",
           artist: "Debussy",
           album: "IDK",
           duration: "3:10",
       },

     ]
   },

   {
       playlistID: "003",
       "playlist_name": "Sad",
       "playlist_author": "Joie",
       "playlist_art": "assets/img/playlist.png",
       "likes": 0,
       "songs": [

         {
           title: "Moonlight Sonata",
           artist:"Beethoven",
           album: "Moonlight Sonata",
           duration: "3:30",
       },

       {
           title: "Canon in D",
           artist: "Pachelbel",
           album: "Canon in D",
           duration: "3:30",
       },

       {
           title: "Clair De Lune",
           artist: "Debussy",
           album: "IDK",
           duration: "3:10",
       },

         /*"When I Was Your Man - Bruno Mars",
         "See You Again - Charlie Puth",
         "i hope ur ok - olivia rodrigo"*/
       ]
     },

     {
       playlistID: "004",
       "playlist_name": "Oldies",
       "playlist_author": "Mya",
       "playlist_art": "assets/img/playlist.png",
       "likes": 0,
       "songs": [
         "Billie Jean - Michael Jackson",
         "Purple Rain - Prince",
         "A House Is Not A Home - Luther Vandross"
       ]
     },

     {
       playlistID: "005",
       "playlist_name": "Classical",
       "playlist_author": "Amaya",
       "playlist_art": "assets/img/playlist.png",
       "likes": 0,
       "songs": [

         {
           title: "Moonlight Sonata",
           artist:"Beethoven",
           album: "Moonlight Sonata",
           duration: "3:30",
       },

       {
           title: "Canon in D",
           artist: "Pachelbel",
           album: "Canon in D",
           duration: "3:30",
       },

       {
           title: "Clair De Lune",
           artist: "Debussy",
           album: "IDK",
           duration: "3:10",
       },

         /*
         "Moonlight Sonata - Beethoven",
         "Canon in D - Pachelbel",
         "Clair de Lune - Debussy"
         */
       ]
     },

     {
       playlistID: "006",
       "playlist_name": "Musicals",
       "playlist_author": "Samantha",
       "playlist_art": "assets/img/playlist.png",
       "likes": 0,
       "songs": [

         {
           title: "Moonlight Sonata",
           artist:"Beethoven",
           album: "Moonlight Sonata",
           duration: "3:30",
       },

       {
           title: "Canon in D",
           artist: "Pachelbel",
           album: "Canon in D",
           duration: "3:30",
       },

       {
           title: "Clair De Lune",
           artist: "Debussy",
           album: "IDK",
           duration: "3:10",
       },
         /*
         "Wait For It- Leslie Odom Jr",
         "Seize the Day - Newsies",
         "Waiting Through the Window - Ben Platt"
         */
       ]
     },

     {
       playlistID: "007",
       "playlist_name": "Afrobeats",
       "playlist_author": "Dara",
       "playlist_art": "assets/img/playlist.png",
       "likes": 0,
       "songs": [
         {
           title: "Moonlight Sonata",
           artist:"Beethoven",
           album: "Moonlight Sonata",
           duration: "3:30",
       },

       {
           title: "Canon in D",
           artist: "Pachelbel",
           album: "Canon in D",
           duration: "3:30",
       },

       {
           title: "Clair De Lune",
           artist: "Debussy",
           album: "IDK",
           duration: "3:10",
       },
         /*
         "Last Last - Burna Boy",
         "Truth or Dare - Tyla",
         "KU LO SA - Oxlade"
         */
       ]
     },

     {
       playlistID: "008",
       "playlist_name": "Rock",
       "playlist_author": "Theo",
       "playlist_art": "assets/img/playlist.png",
       "likes": 0,
       "songs": [
         {
           title: "Moonlight Sonata",
           artist:"Beethoven",
           album: "Moonlight Sonata",
           duration: "3:30",
       },

       {
           title: "Canon in D",
           artist: "Pachelbel",
           album: "Canon in D",
           duration: "3:30",
       },

       {
           title: "Clair De Lune",
           artist: "Debussy",
           album: "IDK",
           duration: "3:10",
       },

         /*
         "That's What You Get - Paramore",
         "Smells Like Teen Spirit - Nirvana",
         "Chop Suey! - System of a Down"
         */
       ]
     }
 ]

const container = document.getElementById('playlist-cards');
//function that iterates over data.playlists & creates a card for each playlist
const createPlaylists = (playlists) => {

   container.innerText = ""; //clear the container so we don't duplicate cards

   //error handling checks (if playlists is empty or undefined)
   if (!playlists || playlists.length === 0) {
      container.innerText = "No playlists found";
      return; // nothing to display, so exit function
   }


playlists.forEach((playlist) => {
   const card = document.createElement('div');
      card.className = 'playlist-card';

      card.innerHTML = `
      <img class="playlist-card-img" src="${playlist.playlist_art}" alt="${playlist.playlist_name}" width="100">

      <h3>${playlist.playlist_name}</h3>
      <h4>${playlist.playlist_author}</h4>
      <p>Songs: ${playlist.songs}</p>

      <div class="like-container">
      <span class="like-count">${playlist.likes}</span>
      <button class="like-btn">👍</button>
      `


      //append the card to the container
      container.appendChild(card);
      });

   }

createPlaylists(playlists);

/*
//function that dynamically populates the modal

const populateModal = (playlist) => {
   const modal = document.getElementById('playlist-modal');
   modal.innerHTML = `
   <div class="modal-content">
      <span class="close">&times;</span>
      <img class="modal-playlist-img" src="${playlist.playlist_art}" alt="${playlist.playlist_name}" width="100">
      <h2>${playlist.playlist_name}</h2>
      <h3>${playlist.playlist_author}</h3>
      <p>Songs: ${playlist.songs}</p>
   </div>
   `;

}

populateModal(playlists[0]);
*/
