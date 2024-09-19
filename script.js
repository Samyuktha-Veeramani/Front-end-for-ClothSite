function changeColor() {
        var header = document.getElementById('header');
        header.classList.toggle('header-bg'); // Toggle the header-bg class
    }


document.addEventListener('DOMContentLoaded', function () {
    fetchData(); // Fetch data when the DOM content is loaded
});

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            displayPosts(data); // Call a function to display the fetched posts
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear previous posts

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    
    
    var isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        setErrorFor(nameInput, 'Name cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(nameInput);
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        setErrorFor(emailInput, 'Email cannot be blank');
        isValid = false;
    } else if (!isEmailValid(emailInput.value.trim())) {
        setErrorFor(emailInput, 'Invalid email format');
        isValid = false;
    } else {
        setSuccessFor(emailInput);
    }

    

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function setErrorFor(input, message) {
    var formGroup = input.parentElement;
    var errorMsg = formGroup.querySelector('.error-message');
    formGroup.classList.add('error');
    errorMsg.innerText = message;
}

function setSuccessFor(input) {
    var formGroup = input.parentElement;
    formGroup.classList.remove('error');
}

function isEmailValid(email) {
    // Regular expression for email validation
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
function applyStyle() {
    var dropdown = document.getElementById("styleDropdown");
    var selectedStyle = dropdown.value;
    document.body.classList.remove("casual", "formal", "party"); // Remove existing style classes
    document.body.classList.add(selectedStyle); // Apply the selected style
    updateSelectedStyle(selectedStyle); // Update the selected style message
}

function updateSelectedStyle(style) {
    document.getElementById("selectedStyleMessage").innerText = "Selected Style: " + style; // Display the selected style
}

function selectGender(gender) {
    document.getElementById("maleButton").classList.remove("selected");
    
    document.getElementById("femaleButton").classList.remove("selected");
 
    document.getElementById(gender + "Button").classList.add("selected");
 
}

