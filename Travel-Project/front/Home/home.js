function toggleMenu() {
    const links = document.getElementById('navLinks');
    links.classList.toggle('hidden');
}

function openModal(title, description, imgSrc) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-img').src = imgSrc;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.querySelectorAll('.blog-card, .secondcard, .thirdcard, .fourthcard').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.pop-out').forEach(popOutCard => {
            popOutCard.classList.remove('pop-out');
        });
        card.classList.add('pop-out');
    });
});

function searchDestinations() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".blogs-section > div");
    let found = false;

    if (input.trim() === "") {
        items.forEach(item => item.style.display = "block");
        const noResultsMessage = document.getElementById("no-results");
        if (noResultsMessage) noResultsMessage.remove();
        return;
    }

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.style.display = "block";
            found = true;
        } else {
            item.style.display = "none";
        }
    });

    const noResultsMessage = document.getElementById("no-results");
    if (!found) {
        if (!noResultsMessage) {
            const message = document.createElement("p");
            message.id = "no-results";
            message.textContent = "No results found.";
            message.style.textAlign = "center";
            message.style.color = "red";
            document.querySelector(".blogs-section").appendChild(message);
        }
    } else {
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}
function toggleSearchBar() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
        searchInput.classList.add('visible');
        searchInput.focus(); // Optional: Focus on the input when it appears
    } else {
        searchInput.classList.remove('visible');
        searchInput.classList.add('hidden');
    }
}
fetch('/api/test')
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => console.error('Error:', error));

document.getElementById('chat-icon').addEventListener('click', () => {
    const chatbox = document.getElementById('chatbox-container');
    chatbox.classList.toggle('hidden');
});
