// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("playlist-modal");
const span = document.getElementsByClassName("close")[0];

let currentPlaylistData = null;

function openModal(playlistData) {
   // store  current playlist data
   currentPlaylistData = playlistData;

   document.getElementById('modal-playlist-image').src = playlistData.playlist_art;
   document.getElementById('modal-title').innerText = playlistData.playlist_name;
   document.getElementById('modal-creator').innerText = playlistData.playlist_author;


   updateModalSongs(playlistData.songs);

   //  event listener  shuffle button
   const shuffleButton = document.querySelector('.shuffle-button');
   if (shuffleButton) {
      // Remove any existing event listeners to prevent duplicates
      const newShuffleButton = shuffleButton.cloneNode(true);
      shuffleButton.parentNode.replaceChild(newShuffleButton, shuffleButton);

      // shuffle button event listener
      newShuffleButton.addEventListener('click', () => {
         if (currentPlaylistData) {
            shufflePlaylistSongs(currentPlaylistData);
         }
      });
   }

   // display modal
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




// load playlists from local storage
let savedPlaylists = localStorage.getItem('playlists');
if (savedPlaylists) {
   try {
      // parse the saved playlists
      const parsedPlaylists = JSON.parse(savedPlaylists);

      // update  playlists with saved data
      // keep the like counts between page refreshes
      parsedPlaylists.forEach((savedPlaylist, index) => {
         if (index < playlists.length) {
            playlists[index].likes = savedPlaylist.likes;
         }
      });
   } catch (error) {
      console.error('Error loading playlists from local storage:', error);
   }
}

// load liked playlists from local storage
let likedPlaylists = {};
const savedLikedPlaylists = localStorage.getItem('likedPlaylists');
if (savedLikedPlaylists) {
   try {
      likedPlaylists = JSON.parse(savedLikedPlaylists);
   } catch (error) {
      console.error('Error loading liked playlists from local storage:', error);
   }
}

// function to save playlists to local storage
function savePlaylists() {
   try {
      localStorage.setItem('playlists', JSON.stringify(playlists));
   } catch (error) {
      console.error('Error saving playlists to local storage:', error);
   }
}

// function to save liked playlists to local storage
function saveLikedPlaylists() {
   try {
      localStorage.setItem('likedPlaylists', JSON.stringify(likedPlaylists));
   } catch (error) {
      console.error('Error saving liked playlists to local storage:', error);
   }
}

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
      <p>Songs: ${playlist.songs.length}</p>

      <div class="like-container">
      <span class="like-count">${playlist.likes}</span>
      <button class="like-btn">❤</button>
      </div>
      `

      // add click event listener to open modal when clicked
      card.addEventListener('click', () => {
         openModal(playlist);
      });

      // get the like button and add a separate click event listener
      const likeBtn = card.querySelector('.like-btn');

      // checks if this playlist is already liked and set initial button state
      const isLiked = likedPlaylists[playlist.playlistID] === true;
      if (isLiked) {
         likeBtn.style.color = 'red';
         likeBtn.textContent = '❤';
      } else {
         likeBtn.style.color = '';
         likeBtn.textContent = '❤';
      }

      likeBtn.addEventListener('click', (event) => {
         // prevent the click from opening the modal
         event.stopPropagation();


         const isCurrentlyLiked = likedPlaylists[playlist.playlistID] === true;

         if (isCurrentlyLiked) {
            //unlike
            playlist.likes--;
            likedPlaylists[playlist.playlistID] = false;
            likeBtn.style.color = '';
            likeBtn.textContent = '❤';
         } else {
            // like
            playlist.likes++;
            likedPlaylists[playlist.playlistID] = true;
            likeBtn.style.color = 'red';
            likeBtn.textContent = '❤';
         }

         // update the like count display on the card
         const likeCount = card.querySelector('.like-count');
         likeCount.textContent = playlist.likes;

         // save updated playlists and liked status to local storage
         savePlaylists();
         saveLikedPlaylists();
      });

      //append the card to the container
      container.appendChild(card);
      });

   }

createPlaylists(playlists);


// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
   // copy of the array to prevent changing the og
   const shuffled = array.slice();

   // start from the last element and swap with a random element before it
   for (let i = shuffled.length - 1; i > 0; i--) {
      // random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // switch elements at i and j
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }

   return shuffled;
}


function shufflePlaylistSongs(playlistData) {
   const playlistCopy = { ...playlistData };

   // shuffle the songs array
   playlistCopy.songs = shuffleArray(playlistData.songs);

   // update the modal
   updateModalSongs(playlistCopy.songs);

   return playlistCopy;
}

function updateModalSongs(songs) {
   // clear existing songs
   const modalSongsContainer = document.querySelector('.modal-songs');
   modalSongsContainer.innerHTML = '';

   // add all songs from the playlist
   songs.forEach((song, i) => {
      // song container
      const songContainer = document.createElement('div');
      songContainer.className = 'song-container';

      // song content
      songContainer.innerHTML = `
         <div class="song-number">${i + 1}</div>
         <img class="song-image" src="assets/img/song.png" alt="Song Image">
         <div class="song-text">
            <h3 class="song-title">${song.title}</h3>
            <p class="song-artist">${song.artist}</p>
            <p class="album-name">${song.album}</p>
            <p class="song-duration">${song.duration}</p>
         </div>
      `;

      // append song to the modal
      modalSongsContainer.appendChild(songContainer);
   });
}

function displayRandomPlaylist() {
   console.log("displayRandomPlaylist function called");

   try {
      // check that we are on the featured page by looking at the URL or page elements
      const isFeaturedPage = window.location.pathname.includes('featured.html') ||
                            document.querySelector('.featured-playlist-cover') !== null;
      console.log("Is featured page:", isFeaturedPage);

      // Force update for featured page regardless of URL check
      const featuredPlaylistCover = document.querySelector('.featured-playlist-cover');
      const featuredPlaylistTitle = document.querySelector('.featured-playlist-title');
      const songsRightSection = document.querySelector('.songs-right');

      // If we have the featured page elements, we're on the featured page
      if (featuredPlaylistCover || featuredPlaylistTitle || songsRightSection) {
         // Get the elements we need to update
         const featuredPlaylistCover = document.querySelector('.featured-playlist-cover');
         const featuredPlaylistTitle = document.querySelector('.featured-playlist-title');
         const songsRightSection = document.querySelector('.songs-right');

         console.log("Elements found:", {
            featuredPlaylistCover: !!featuredPlaylistCover,
            featuredPlaylistTitle: !!featuredPlaylistTitle,
            songsRightSection: !!songsRightSection
         });

         // error checkigng make sure the playlists array exists and is not empty
         if (!playlists || playlists.length === 0) {
            console.error("No playlists found in the data");
            return;
         }

         // select a random playlist
         const randomIndex = Math.floor(Math.random() * playlists.length);
         const randomPlaylist = playlists[randomIndex];
         console.log("Selected random playlist:", randomPlaylist.playlist_name);

         if (featuredPlaylistCover) {
            featuredPlaylistCover.src = randomPlaylist.playlist_art;
            featuredPlaylistCover.alt = randomPlaylist.playlist_name;
         }

         if (featuredPlaylistTitle) {
            featuredPlaylistTitle.textContent = randomPlaylist.playlist_name;
         }

         if (songsRightSection) {
            songsRightSection.innerHTML = '';

            // add songs from the random playlist
            randomPlaylist.songs.forEach((song, index) => {
               const songCard = document.createElement('div');
               songCard.className = 'song-card';

               songCard.innerHTML = `
                  <p class="song-title">${index + 1}. ${song.title}</p>
                  <p class="song-artist">${song.artist}</p>
                  <p class="song-album">${song.album}</p>
                  <p class="song-duration">${song.duration}</p>
               `;

               songsRightSection.appendChild(songCard);
            });
         }
      }
   } catch (error) {
      console.error("Error in displayRandomPlaylist:", error);
   }
}

function filterPlaylists(query) {
   // convert to lowercase (case sensitve)
   const searchQuery = query.toLowerCase();

   // filter playlists that match name, author, or song artists
   const filteredPlaylists = playlists.filter(playlist => {
      const playlistName = playlist.playlist_name.toLowerCase();
      const playlistAuthor = playlist.playlist_author.toLowerCase();

      if (playlistName.includes(searchQuery) || playlistAuthor.includes(searchQuery)) {
         return true;
      }

      const hasSongArtistMatch = playlist.songs.some(song => {
         const artistName = song.artist.toLowerCase();
         return artistName.includes(searchQuery);
      });

      return hasSongArtistMatch;
   });

   //  display the matching playlists
   createPlaylists(filteredPlaylists);
}

// Function to handle search submission
function handleSearch() {
   const searchInput = document.getElementById('search-input');
   if (searchInput) {
      const query = searchInput.value.trim();
      filterPlaylists(query);
   }
}

// clear search and reset display
function clearSearch() {
   const searchInput = document.getElementById('search-input');
   if (searchInput) {
      searchInput.value = '';
      createPlaylists(playlists); // show all playlists
   }
}

// initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
   console.log("DOM fully loaded");

   // initialize the main page
   createPlaylists(playlists);

   // display a random playlist on the featured page
   displayRandomPlaylist();

   // check for featured page elements
   const featuredElements = document.querySelector('.featured-playlist-cover');
   if (featuredElements) {
      console.log("Featured page elements found, forcing display of random playlist");
      displayRandomPlaylist();
   }

   // search functionality
   const searchInput = document.getElementById('search-input');
   const searchClear = document.getElementById('search-clear');

   if (searchInput && searchClear) {
      // seearch only when Enter is pressed
      searchInput.addEventListener('keypress', (event) => {
         if (event.key === 'Enter') {
            handleSearch();
         }
      });


      searchClear.addEventListener('click', () => {
         clearSearch();
      });
   }
});
