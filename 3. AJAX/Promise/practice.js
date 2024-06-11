const URL = 'https://yts.mx/api/v2/list_movies.json';
// const URL2 = 'https://yts.mx/api/v2/movie_details.json';

const $postUl = document.querySelector('.movie-list');

const renderMovies = movieList => {
    $postUl.innerHTML = ''; // Clear the movie list before re-rendering
    movieList.forEach(({large_cover_image, title, rating, year}) => {
        const $template = document.getElementById('single-movie');
        const $div = document.importNode($template.content, true);
        $postUl.innerHTML = '<button type="button" data-bs-toggle="modal" data-bs-target="">Launch modal</button>';
        $div.querySelector('.img-box img').src = large_cover_image;
        $div.querySelector('.title').textContent = title;
        $div.querySelector('.year').textContent = year;
        $div.querySelector('.rating').textContent = rating;

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

const $movie = document.querySelector('.movie-list');

$movie.addEventListener('click', e => {
    if(!e.target.matches('movie-list .moive *')) return;

    const movieId = e.target.closest('.movie').dataset.movieId;
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id${movieId}`)
        .then(res => res.json())
        .then(json => {
            makeMovieDetailDOM(json.data.movie)
            console.log(json);
        });
});

// 영화 상세정보를 모달에 랜더링
function makeMovieDetailDOM({}){
    const $modalTitle = document.querySelector('.modal-title');
    const $descImg = document.querySelector('.desc-image');
    const $summary = document.querySelector('.movie-description');

    $modalTitle.textContent = title;
    $summary.textContent = description_full;
    $descImg.src = large_cover_image;
}