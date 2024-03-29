
/*

<html>
<head>
</head>
<body>
  <div class='wrap'>
    <ul id='list'>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</body>
</html>

*/

let html, head, body, div, ul, li;
html={
    tagName: 'html',
    childeren: [head, body],

};

head = {
    tagName: 'head',
    childeren: null,
    parentNode: html,
    nextSibling: body,
};

body = {
    tagName: 'body',
    childeren: null,
    parentNode: html,
    nextSibling: null,
    prevSibling: head,
}

div = {
    tagName: 'div',
    childeren: [ul],
    parentNode: body,
    nextSibling: null,
    prevSibling: null,
    className: `wrap clearfix`,
    classList: ['wrap', 'clearfix'],
    attributes: {
        'class': 'wrap clearfix',
        'title': 'abc'
    }
}

console.log(div.parentNode.parentNode);