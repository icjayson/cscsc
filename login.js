document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Reset message displays
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        if (!username || !password) {
            errorMessage.textContent = 'Please patiently fill your name and password!';
            errorMessage.style.display = 'block';
        } else if (username === 'Trang Linh' && password === 'tlinguyenn') {
            successMessage.textContent = 'Correct!';
            successMessage.style.display = 'block';
            setTimeout(() => {
                window.location.href = "Boxing.html";
            },500);
        } else {
            errorMessage.textContent = 'Can you try again!';
            errorMessage.style.display = 'block';
        }
    });
});
