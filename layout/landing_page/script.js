// Simple search function for news
function searchNews() {
    const searchTerm = document.getElementById('search-news').value.toLowerCase();
    const newsArticles = document.querySelectorAll('.news-section article');

    newsArticles.forEach(article => {
        const text = article.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
