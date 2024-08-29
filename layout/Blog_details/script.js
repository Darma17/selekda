 // Comment Form Validation and Dynamic Comment Submission
 const commentForm = document.getElementById('commentForm');
 const commentList = document.getElementById('comment-list');
 const commentCount = document.getElementById('comment-count');

 commentForm.addEventListener('submit', function (e) {
     e.preventDefault();

     // Basic validation for captcha
     const captcha = document.getElementById('captcha').value;
     if (captcha !== '4') {
         alert('Captcha is incorrect. Please try again.');
         return;
     }

     // Create a new comment element
     const name = document.getElementById('name').value;
     const commentText = document.getElementById('comment').value;

     const commentDiv = document.createElement('div');
     commentDiv.classList.add('comment');
     commentDiv.innerHTML = `
         <img src="../images/images (5).jpg" alt="User Image">
         <div class="comment-details">
             <p class="name">${name}</p>
             <p class="date">${new Date().toLocaleDateString()}</p>
             <p class="comment-text">${commentText}</p>
         </div>
     `;

     // Append comment to the list
     commentList.appendChild(commentDiv);

     // Update comment count
     const currentCount = parseInt(commentCount.textContent);
     commentCount.textContent = currentCount + 1;

     // Save comments to localStorage
     saveCommentsToLocalStorage();

     // Reset form
     commentForm.reset();
 });

 // Load comments from localStorage on page load
 window.onload = function () {
     loadCommentsFromLocalStorage();
     updateLikeDislikeCount();
 };

 // Save comments to localStorage
 function saveCommentsToLocalStorage() {
     const commentsHTML = commentList.innerHTML;
     localStorage.setItem('comments', commentsHTML);
     localStorage.setItem('commentCount', commentCount.textContent);
 }

 // Load comments from localStorage
 function loadCommentsFromLocalStorage() {
     const savedComments = localStorage.getItem('comments');
     const savedCommentCount = localStorage.getItem('commentCount');
     if (savedComments) {
         commentList.innerHTML = savedComments;
     }
     if (savedCommentCount) {
         commentCount.textContent = savedCommentCount;
     }
 }

 // Like and Dislike Functionality
 const likeBtn = document.getElementById('like-btn');
 const dislikeBtn = document.getElementById('dislike-btn');
 const likeCount = document.getElementById('like-count');
 const dislikeCount = document.getElementById('dislike-count');

 likeBtn.addEventListener('click', function () {
     let currentLikes = parseInt(likeCount.textContent);
     likeCount.textContent = currentLikes + 1;
     saveLikeDislikeToLocalStorage();
 });

 dislikeBtn.addEventListener('click', function () {
     let currentDislikes = parseInt(dislikeCount.textContent);
     dislikeCount.textContent = currentDislikes + 1;
     saveLikeDislikeToLocalStorage();
 });

 // Save Like/Dislike Count to localStorage
 function saveLikeDislikeToLocalStorage() {
     localStorage.setItem('likeCount', likeCount.textContent);
     localStorage.setItem('dislikeCount', dislikeCount.textContent);
 }

 // Load Like/Dislike Count from localStorage
 function updateLikeDislikeCount() {
     const savedLikes = localStorage.getItem('likeCount');
     const savedDislikes = localStorage.getItem('dislikeCount');
     if (savedLikes) {
         likeCount.textContent = savedLikes;
     }
     if (savedDislikes) {
         dislikeCount.textContent = savedDislikes;
     }
 }
