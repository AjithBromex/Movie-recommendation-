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
                <p><strong>${review.author}:</strong> <em>"${review.content}"</em></p>
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

// Add an event listener to the button
recommendBtn.addEventListener('click', () => {
    // Get the selected genre from the dropdown
    const selectedGenre = genreSelect.value;
    
    // Get the array of movies for the selected genre
    const movies = movieDatabase[selectedGenre];

    // Clear previous recommendations
    recommendationsDiv.innerHTML = '';
    
    // If no movies are found, display a message
    if (!movies || movies.length === 0) {
        recommendationsDiv.innerHTML = '<p class="placeholder">No movies found for this genre.</p>';
        return;
    }

    // Loop through the movies and create a card for each
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // Create the poster image and add a click event listener
        const posterImg = document.createElement('img');
        posterImg.src = movie.poster;
        posterImg.alt = `${movie.title} poster`;
        posterImg.addEventListener('click', () => {
            showModal(movie);
        });

        // Create the movie info container
        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie-info');
        
        // Create the title
        const title = document.createElement('h2');
        title.textContent = movie.title;

        // Append everything to the movie card
        movieInfo.appendChild(title);
        movieCard.appendChild(posterImg);
        movieCard.appendChild(movieInfo);

        // Append the movie card to the recommendations div
        recommendationsDiv.appendChild(movieCard);
    });
});

// Add event listeners to close the modal
closeModalBtn.addEventListener('click', hideModal);
movieModal.addEventListener('click', (e) => {
    if (e.target === movieModal) {
        hideModal();
    }
});

// Disable body scrolling when modal is open
document.addEventListener('DOMContentLoaded', () => {
    movieModal.addEventListener('transitionend', () => {
        if (!movieModal.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});
