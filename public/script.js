const button = document.getElementById('sample-btn');
const input = document.getElementById('post-input');

const card = document.getElementById('card');
const image = document.getElementById('image');
const title = document.getElementById('title');
const content = document.getElementById('content');

const logo = document.getElementById("logo");

button.addEventListener('click', () => {
    const text = input.value.trim();
    if (text === '') {
        showAlert();
        input.focus();
        return;
    }

    hideAlert();
    
    title.textContent = 'you clicked me! you entered:';
    content.textContent = text;

    card.classList.remove('hidden');

    card.classList.remove('animate-in');
    void card.offsetWidth;
    card.classList.add('animate-in');

    input.value = '';
});

const inputError = document.getElementById('input-error');

function showAlert() {
    inputError.classList.remove('hidden');
    logo.src = '/images/logo-error.png';
}

function hideAlert() {
    inputError.classList.add('hidden');
    logo.src = '/images/logo.png';
}