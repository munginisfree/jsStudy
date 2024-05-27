
// 서버 URL
const URL = 'https://jsonplaceholder.typicode.com/posts';

const URL2 = 'http://localhost:8392/api/v1/replies/30';

// ul태그 가져오기
const $postUl = document.querySelector('.posts');

// 화면에 게시물을 렌더링하는 함수
const renderPosts = postList => {
  
  /*
    <li class="post-item">
      <h2>게시물제목</h2>
      <p>내용</p>
      <buttoen>삭제
    </li>
  */
  postList.forEach(post => {
    // 게시물 하나를 li태그로 만들어서 ul에 집어넣기
    // 템플릿 태그 가져오기
    const $template = document.getElementById('single-post');
    // 템플릿 태그에서 li태그 추출
    const $li = document.importNode($template.content, true);

    $li.querySelector('h2').textContent = post.title;
    $li.querySelector('P').textContent = post.body;

    $postUl.appendChild($li);
  });
};


// 서버에서 게시물 정보 받아오기
fetch(URL)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    // 게시물 정보 화면에 그리기
    renderPosts(json);
  })
