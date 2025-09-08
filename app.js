// Import the movie database
import { movieDatabase } from "./moviedata.js";

// Select the necessary DOM elements
const genreSelect = document.getElementById('genre-select');
const recommendBtn = document.getElementById('recommend-btn');
const recommendationsDiv = document.getElementById('recommendations');
const movieModal = document.getElementById('movie-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalBody = document.getElementById('modal-body');

// Function to handle showing the modal
const showModal = (movie) => {
    // Clear previous modal content
    modalBody.innerHTML = '';

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Rating:</strong> ${movie.rating} / 10</p>
        <div class="modal-reviews">
            <h3>Reviews:</h3>
            ${movie.reviews.map(review => `
                <p><strong>${review.Director}:</strong> <em>"${review.content}"</em></p>
            `).join('')}
        </div>
    `;

    modalBody.appendChild(modalContent);
    movieModal.classList.remove('hidden');
};

// Function to handle hiding the modal
const hideModal = () => {
    movieModal.classList.add('hidden');
};

// Event listener for "Recommend" button
recommendBtn.addEventListener('click', () => {
    // Get the selected genre
    const selectedGenre = genreSelect.value;

    // Find the genre object in database
    const genreObj = movieDatabase.find(g => g.genre === selectedGenre);
    const movies = genreObj ? genreObj.films : [];

    // Clear previous recommendations
    recommendationsDiv.innerHTML = '';

    // If no movies found, show placeholder
    if (movies.length === 0) {
        recommendationsDiv.innerHTML = '<p class="placeholder">No movies found for this genre.</p>';
        return;
    }

    // Loop through movies and create cards
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // Poster image
        const posterImg = document.createElement('img');
        posterImg.src = movie.poster;
        posterImg.alt = `${movie.title} poster`;

        // Show modal when poster is clicked
        posterImg.addEventListener('click', () => {
            showModal(movie);
        });

        // Movie info container
        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie-info');

        // Title
        const title = document.createElement('h2');
        title.textContent = movie.title;

        // Append elements
        movieInfo.appendChild(title);
        movieCard.appendChild(posterImg);
        movieCard.appendChild(movieInfo);

        // Add card to recommendations div
        recommendationsDiv.appendChild(movieCard);
    });
});

// Event listeners to close modal
closeModalBtn.addEventListener('click', hideModal);
movieModal.addEventListener('click', (e) => {
    if (e.target === movieModal) {
        hideModal();
    }
});

// Handle body scrolling when modal is open
document.addEventListener('DOMContentLoaded', () => {
    movieModal.addEventListener('transitionend', () => {
        if (!movieModal.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});
