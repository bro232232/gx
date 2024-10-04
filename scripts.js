// scripts.js
function loadPage() {
    const url = document.getElementById('url').value;
    const frame = document.getElementById('browser-frame');
    frame.src = url.startsWith('http') ? url : `http://${url}`;
}
