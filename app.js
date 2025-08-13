// The expanded movie database, including ratings and reviews
const movieDatabase = {
    "action": [
        {
            "title": "Mad Max: Fury Road",
            "poster": "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
            "rating": 8.1,
            "reviews": [
                {
                    "author": "The New York Times",
                    "content": "A high-octane, visually spectacular chase that never lets up. George Miller proves himself a master of action filmmaking."
                },
                {
                    "author": "Rotten Tomatoes User",
                    "content": "Simply put, the best action movie I've seen in years. The practical effects are breathtaking."
                }
            ]
        },
        {
            "title": "John Wick",
            "poster": "https://m.media-amazon.com/images/I/71+k2-r7vQL._UF1000,1000_QL80_.jpg",
            "rating": 7.4,
            "reviews": [
                {
                    "author": "IGN",
                    "content": "A stylish, tightly-choreographed revenge flick that establishes a fascinating criminal underworld."
                },
                {
                    "author": "IMDb User",
                    "content": "Keanu Reeves is back! The action sequences are incredible and the world-building is top-notch."
                }
            ]
        },
        {
            "title": "Die Hard",
            "poster": "https://resizing.flixster.com/4uMRStWZiVgShCGo_ywlOGfK9jA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdjMzI5NWU3LTEyNTUtNDRlNC04ZWYxLThlMzZiNDE3YTMxOC5wbmc=",
            "rating": 8.2,
            "reviews": [
                {
                    "author": "Empire",
                    "content": "The gold standard for action movies. Bruce Willis is iconic as John McClane."
                },
                {
                    "author": "Letterboxd User",
                    "content": "A masterpiece of the genre. It's the perfect mix of action, suspense, and humor."
                }
            ]
        },
        {
            "title": "Gladiator",
            "poster": "https://m.media-amazon.com/images/I/61dcMsYIAJL._UF894,1000_QL80_.jpg",
            "rating": 8.5,
            "reviews": [
                {
                    "author": "Roger Ebert",
                    "content": "A rare and great achievement. The visual effects and battle scenes are magnificent."
                },
                {
                    "author": "Google User",
                    "content": "Are you not entertained? This movie is an epic from start to finish."
                }
            ]
        },
        {
            "title": "Kill Bill: Vol. 1",
            "poster": "https://m.media-amazon.com/images/M/MV5BZmMyYzJlZmYtY2I3NC00NjAyLTkyZWItZjdjZDI1YTYyYTEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "rating": 8.1,
            "reviews": [
                {
                    "author": "Rolling Stone",
                    "content": "Tarantino's homage to martial arts films is a bloody, stylish, and endlessly fun ride."
                },
                {
                    "author": "The Guardian",
                    "content": "Uma Thurman delivers a tour-de-force performance as The Bride."
                }
            ]
        }
    ],
    "comedy": [
        {
            "title": "The Hangover",
            "poster": "https://m.media-amazon.com/images/I/91Z8lOMpS+L._UF1000,1000_QL80_.jpg",
            "rating": 7.7,
            "reviews": [
                {
                    "author": "Entertainment Weekly",
                    "content": "A hilarious mystery wrapped in a raucous comedy. You'll be laughing all the way through."
                },
                {
                    "author": "YouTube Commenter",
                    "content": "One of the most quotable movies ever. 'But did you die?'"
                }
            ]
        },
        {
            "title": "Superbad",
            "poster": "https://m.media-amazon.com/images/I/51HShnByGEL._UF1000,1000_QL80_.jpg",
            "rating": 7.6,
            "reviews": [
                {
                    "author": "Variety",
                    "content": "A high school comedy with real heart. It's laugh-out-loud funny and surprisingly sweet."
                },
                {
                    "author": "Reddit User",
                    "content": "McLovin is a cinematic icon. No doubt about it."
                }
            ]
        },
        {
            "title": "Step Brothers",
            "poster": "https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg",
            "rating": 6.9,
            "reviews": [
                {
                    "author": "A.V. Club",
                    "content": "Will Ferrell and John C. Reilly are a comedic dream team. This movie is pure, unadulterated silliness."
                },
                {
                    "author": "Personal Blog",
                    "content": "So dumb, but so perfect. It gets better every time I watch it."
                }
            ]
        },
        {
            "title": "Anchorman: The Legend of Ron Burgundy",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_FMjpg_UX1000_.jpg",
            "rating": 7.2,
            "reviews": [
                {
                    "author": "IGN",
                    "content": "Will Ferrell is at the top of his game. The film is a hilarious series of bizarre, brilliant moments."
                },
                {
                    "author": "TikTok User",
                    "content": "I'm Ron Burgundy? Y'all know the quote."
                }
            ]
        },
        {
            "title": "Monty Python and the Holy Grail",
            "poster": "https://m.media-amazon.com/images/M/MV5BYWY4YmUzZmUtMzQ0ZS00N2Y2LWJlODQtN2IwMDc1MWQwMmU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "rating": 8.2,
            "reviews": [
                {
                    "author": "Empire",
                    "content": "An absurd, brilliant, and timeless comedy. A must-watch for anyone who loves British humor."
                },
                {
                    "author": "Film Fan",
                    "content": "Killer Rabbit of Caerbannog. Enough said."
                }
            ]
        }
    ],
    "sci-fi": [
        {
            "title": "Inception",
            "poster": "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
            "rating": 8.8,
            "reviews": [
                {
                    "author": "IndieWire",
                    "content": "A mind-bending spectacle that is both a thrilling heist movie and a thought-provoking philosophical puzzle."
                },
                {
                    "author": "Wired",
                    "content": "Visually stunning and intellectually ambitious. Nolan's best work."
                }
            ]
        },
        {
            "title": "The Matrix",
            "poster": "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
            "rating": 8.7,
            "reviews": [
                {
                    "author": "The Washington Post",
                    "content": "A revolutionary film that changed the game for action and special effects. Its themes are still relevant today."
                },
                {
                    "author": "Student Review",
                    "content": "After watching this, I questioned everything. So cool."
                }
            ]
        },
        {
            "title": "Interstellar",
            "poster": "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
            "rating": 8.6,
            "reviews": [
                {
                    "author": "Rolling Stone",
                    "content": "Christopher Nolan delivers an emotional and grand epic about love, time, and the human spirit."
                },
                {
                    "author": "Film Critic",
                    "content": "Hans Zimmer's score is a masterpiece. The visuals are out of this world."
                }
            ]
        },
        {
            "title": "Arrival",
            "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkITEsZxTy6C9sxqrM6Q7-Fq-uFlnn-dPhCA&s",
            "rating": 7.9,
            "reviews": [
                {
                    "author": "The Hollywood Reporter",
                    "content": "A cerebral and deeply moving sci-fi film that's less about aliens and more about communication and humanity."
                },
                {
                    "author": "Sci-Fi Fan",
                    "content": "This movie made me think for days. Just brilliant filmmaking."
                }
            ]
        },
        {
            "title": "Blade Runner 2049",
            "poster": "https://m.media-amazon.com/images/I/61tjn9zjaaL._UF1000,1000_QL80_.jpg",
            "rating": 8.0,
            "reviews": [
                {
                    "author": "Wired",
                    "content": "Visually stunning with a powerful, haunting atmosphere. A worthy sequel to a classic."
                },
                {
                    "author": "Another Critic",
                    "content": "Roger Deakins' cinematography is the star of the show. Every shot is a work of art."
                }
            ]
        }
    ],
    "drama": [
        {
            "title": "The Shawshank Redemption",
            "poster": "https://m.media-amazon.com/images/I/51NiGlapXlL.jpg",
            "rating": 9.3,
            "reviews": [
                {
                    "author": "Variety",
                    "content": "A powerful and moving story of hope and friendship that stands the test of time."
                },
                {
                    "author": "Film Enthusiast",
                    "content": "The greatest movie ever made. It never fails to inspire me."
                }
            ]
        },
        {
            "title": "Forrest Gump",
            "poster": "https://m.media-amazon.com/images/I/713xd8jGVuL._UF1000,1000_QL80_.jpg",
            "rating": 8.8,
            "reviews": [
                {
                    "author": "Chicago Tribune",
                    "content": "Tom Hanks' performance is unforgettable in this heartfelt and epic American story."
                },
                {
                    "author": "Movie Blogger",
                    "content": "'Life is like a box of chocolates...' Classic for a reason."
                }
            ]
        },
        {
            "title": "Fight Club",
            "poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpgg",
            "rating": 8.8,
            "reviews": [
                {
                    "author": "The Guardian",
                    "content": "A dark, satirical, and fiercely intelligent film that continues to challenge audiences."
                },
                {
                    "author": "Cinema Site",
                    "content": "Mind-blowing twist at the end. A must-see."
                }
            ]
        },
        {
            "title": "Pulp Fiction",
            "poster": "https://m.media-amazon.com/images/S/pv-target-images/b44bc23c99db6f56a9cb656892524a617fda117921eb0d1a572ac8de74ef10ba.jpg",
            "rating": 8.9,
            "reviews": [
                {
                    "author": "The New Yorker",
                    "content": "A landmark of independent cinema. Tarantino's non-linear narrative and unforgettable dialogue are brilliant."
                },
                {
                    "author": "Casual Viewer",
                    "content": "So many iconic scenes. And the soundtrack is perfect."
                }
            ]
        },
        {
            "title": "Parasite",
            "poster": "https://m.media-amazon.com/images/I/71lrpAOFQJS._UF1000,1000_QL80_.jpg",
            "rating": 8.6,
            "reviews": [
                {
                    "author": "Vulture",
                    "content": "A thrilling and devastating look at class inequality that expertly blends genres."
                },
                {
                    "author": "Global Film Fan",
                    "content": "The best movie of the 21st century so far. Deserved every award it got."
                }
            ]
        }
    ]
};

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
