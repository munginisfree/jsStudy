const URL = 'https://yts.mx/api/v2/list_movies.json';
const URL2 = 'https://yts.mx/api/v2/movie_details.json';

const $postUl = document.querySelector('.movie-list');

const renderMovies = movieList => {
    $postUl.innerHTML = ''; // Clear the movie list before re-rendering
    movieList.forEach(movie => {
        const $template = document.getElementById('single-movie');
        const $div = document.importNode($template.content, true);

        $div.querySelector('.img-box img').src = movie.large_cover_image;
        $div.querySelector('.title').textContent = movie.title;
        $div.querySelector('.year').textContent = movie.year;
        $div.querySelector('.rating').textContent = movie.rating;

        $postUl.appendChild($div);
    });
};


const fetchAndRenderMovies = (sortBy) => {
    fetch(`${URL}?sort_by=${sortBy}`)
        .then(res => res.json())
        .then(json => {
            const movies = json.data.movies;
            renderMovies(movies);
        })
        .catch(error => console.error('Error fetching data:', error));
};

document.getElementById('s_rate').addEventListener('click', () => fetchAndRenderMovies('rating'));
document.getElementById('s_year').addEventListener('click', () => fetchAndRenderMovies('year'));
document.getElementById('s_like').addEventListener('click', () => fetchAndRenderMovies('like_count'));

fetchAndRenderMovies('year');