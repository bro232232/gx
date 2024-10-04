// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    fetchGamingNews();
});

function fetchGamingNews() {
    fetch('https://api.example.com/gaming-news') // Replace with a real API endpoint
        .then(response => response.json())
        .then(data => {
            const newsSection = document.getElementById('news');
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                `;
                articleElement.style.borderBottom = '1px solid #ff1a1a';
                articleElement.style.padding = '10px 0';
                newsSection.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
}
