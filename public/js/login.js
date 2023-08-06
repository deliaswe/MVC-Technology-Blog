// function for car login
const carLogin = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#car-username-login').value.trim();
    const password = document.querySelector('#car-password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/car-dashboard');
        } else {
            alert('Failed to log in');
        }
    }
};

// event listener for car login
const carLoginButton = document.querySelector('#car-login');
if (carLoginButton) {
    carLoginButton.addEventListener('click', carLogin);
}