
// Example movie data
const movies = {
    action: [
        { title: "Mad Max: Fury Road", poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg" },
        { title: "John Wick", poster: "https://m.media-amazon.com/images/I/71+k2-r7vQL._UF1000,1000_QL80_.jpg" },
        { title: "Die Hard", poster: "https://resizing.flixster.com/4uMRStWZiVgShCGo_ywlOGfK9jA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdjMzI5NWU3LTEyNTUtNDRlNC04ZWYxLThlMzZiNDE3YTMxOC5wbmc=" }
    ],
    comedy: [
        { title: "The Hangover", poster: "https://m.media-amazon.com/images/I/91Z8lOMpS+L._UF1000,1000_QL80_.jpg" },
        { title: "Superbad", poster: "https://m.media-amazon.com/images/I/51HShnByGEL._UF1000,1000_QL80_.jpg" },
        { title: "Step Brothers", poster: "https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg" }
    ],
    "sci-fi": [
        { title: "Inception", poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg" },
        { title: "The Matrix", poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
        { title: "Interstellar", poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg" }
    ],
    drama: [
        { title: "The Shawshank Redemption", poster: "https://m.media-amazon.com/images/I/51NiGlapXlL.jpg" },
        { title: "Forrest Gump", poster: "https://m.media-amazon.com/images/I/713xd8jGVuL._UF1000,1000_QL80_.jpg" },
        { title: "Fight Club", poster: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpgg" }
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

