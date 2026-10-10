const form = document.getElementById('form');
const toastBox = document.querySelector('.toast');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Form submitted successfully!');
});

function showToast(message) {
    toastBox.textContent = message;
    toastBox.classList.add('show');
    setTimeout(() => {
        toastBox.classList.remove('show');
        toastBox.textContent = '';
    }, 3000);
}