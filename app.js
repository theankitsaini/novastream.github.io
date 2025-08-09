**4. app.js**
```javascript
async function loadMovies() {
  const res = await fetch('movies.json');
  const movies = await res.json();
  const grid = document.getElementById('movie-grid');
  grid.innerHTML = '';
  movies.forEach(movie => {
    const div = document.createElement('div');
    div.className = 'movie';
    div.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <a href="${movie.link}" target="_blank">Watch Trailer</a>
    `;
    grid.appendChild(div);
  });
}

document.getElementById('search').addEventListener('input', async (e) => {
  const term = e.target.value.toLowerCase();
  const res = await fetch('movies.json');
  const movies = await res.json();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
  const grid = document.getElementById('movie-grid');
  grid.innerHTML = '';
  filtered.forEach(movie => {
    const div = document.createElement('div');
    div.className = 'movie';
    div.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <a href="${movie.link}" target="_blank">Watch Trailer</a>
    `;
    grid.appendChild(div);
  });
});

loadMovies();
```