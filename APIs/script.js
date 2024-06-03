document.getElementById('fetchBtn').addEventListener('click', fetchUser);

function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUser(user);
        })
        .catch(error => console.error('Error fetching user data:', error));
}

function displayUser(user) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = `
        <div class="user">
            <img src="${user.picture.large}" alt="User Picture">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>Email: ${user.email}</p>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
        </div>
    `;
}
