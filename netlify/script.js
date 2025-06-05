document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('audioPlayer');
  const source = document.getElementById('audioSource');
  const songList = document.getElementById('songList');
  const searchInput = document.getElementById('search');
  const artistFilter = document.getElementById('artistFilter');
  const genreFilter = document.getElementById('genreFilter');
  const locationFilter = document.getElementById('locationFilter');

  const songs = [
    { title: 'Song One', file: 'songs/song1.mp3', artist: 'Artist A', genre: 'Rock', location: 'USA' },
    { title: 'Song Two', file: 'songs/song2.mp3', artist: 'Artist B', genre: 'Pop', location: 'UK' }
  ];

  function populateFilters() {
    const artists = [...new Set(songs.map(s => s.artist))];
    const genres = [...new Set(songs.map(s => s.genre))];
    const locations = [...new Set(songs.map(s => s.location))];

    artists.forEach(v => artistFilter.appendChild(new Option(v, v)));
    genres.forEach(v => genreFilter.appendChild(new Option(v, v)));
    locations.forEach(v => locationFilter.appendChild(new Option(v, v)));
  }

  function render(list) {
    songList.innerHTML = '';
    list.forEach(song => {
      const el = document.createElement('div');
      el.className = 'song';
      el.textContent = song.title;
      el.addEventListener('click', () => {
        source.src = song.file;
        player.load();
        player.play();
      });
      songList.appendChild(el);
    });
  }

  function filterSongs() {
    const search = searchInput.value.toLowerCase();
    const artist = artistFilter.value;
    const genre = genreFilter.value;
    const location = locationFilter.value;

    const filtered = songs.filter(song => {
      return (!artist || song.artist === artist) &&
             (!genre || song.genre === genre) &&
             (!location || song.location === location) &&
             (song.title.toLowerCase().includes(search) || song.artist.toLowerCase().includes(search));
    });

    render(filtered);
  }

  searchInput.addEventListener('input', filterSongs);
  artistFilter.addEventListener('change', filterSongs);
  genreFilter.addEventListener('change', filterSongs);
  locationFilter.addEventListener('change', filterSongs);

  populateFilters();
  render(songs);
});
