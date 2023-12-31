function loadContent(page) {
  // Fetch the content of the selected page
  fetch(page)
    .then(response => response.text())
    .then(html => {
      // Replace the content of the 'content' div with the fetched HTML
      document.getElementById('content').innerHTML = html;

      // Add class to body based on the selected page
      document.body.className = 'page-' + page.split('.')[0];
    })
    .catch(error => console.error('Error fetching content:', error));
}

// Load the home page by default
loadContent('home.html');
