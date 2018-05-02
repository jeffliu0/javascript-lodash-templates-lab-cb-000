function createPost(){
  var title = document.getElementById('title').value
  var body = document.getElementById('body').value
  var author = document.getElementById('author').value

  var postTemplate = document.getElementById("post-template").innerHTML
  var pageTemplate = document.getElementById("page-template").innerHTML
  var templateFn = _.template(postTemplate)
  var templateFn = _.template(pageTemplate)

  var postsDiv = document.getElementById('post-form')
  //var pageDiv = document.getElementById(;'sidebar')

  var templateHTML = templateFn({'title': title,
  'body': body, 'author': author})

  postsDiv.innerHTML += templateHTML


}

function postComment(){
  var commenter = document.getElementById('commenterName').value
  var comment = document.getElementById('commentText').value

  var commentTemplate = document.getElementById('comments-template').innerHTML

  var templateFn = _.template(commentTemplate)

  var commentsDiv = document.getElementById("comments")

  var templateHTML = templateFn({'comment': comment,
    'commenter': commenter})

  commentsDiv.innerHTML += templateHTML
}
