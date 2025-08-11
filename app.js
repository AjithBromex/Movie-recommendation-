// Example movie data
const movies = {
    action: [
        { title: "Mad Max: Fury Road", poster: "https://m.media-amazon.com/images/I/81w+K6h8nPL._AC_SY679_.jpg" },
        { title: "John Wick", poster: "https://m.media-amazon.com/images/I/71E8UOqUv7L._AC_SY679_.jpg" },
        { title: "Die Hard", poster: "https://m.media-amazon.com/images/I/91jR7O5vN1L._AC_SY679_.jpg" }
    ],
    comedy: [
        { title: "The Hangover", poster: "https://m.media-amazon.com/images/I/81lK0Bv4L-L._AC_SY679_.jpg" },
        { title: "Superbad", poster: "https://m.media-amazon.com/images/I/81YJr9bXQzL._AC_SY679_.jpg" },
        { title: "Step Brothers", poster: "https://m.media-amazon.com/images/I/91-r9gA5RML._AC_SY679_.jpg" }
    ],
    "sci-fi": [
        { title: "Inception", poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg" },
        { title: "The Matrix", poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
        { title: "Interstellar", poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg" }
    ],
    drama: [
        { title: "The Shawshank Redemption", poster: "https://m.media-amazon.com/images/I/51NiGlapXlL.jpg" },
        { title: "Forrest Gump", poster: "https://m.media-amazon.com/images/I/61N4J5Zrq+L._AC_SY679_.jpg" },
        { title: "Fight Club", poster: "https://m.media-amazon.com/images/I/81D+KJkO5eL._AC_SY679_.jpg" }
    ]
};

document.getElementById('recommend-btn').addEventListener('click', () => {
    const genre = document.getElementById('genre-select').value;
    showRecommendations(genre);
});

function showRecommendations(genre) {
    const container = document.getElementById('recommendations');
    container.innerHTML = '';
    movies[genre].forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title} poster">
            <div>${movie.title}</div>
        `;
        container.appendChild(card);
    });
}

// Show default recommendations
showRecommendations('action');