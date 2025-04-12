document.addEventListener("DOMContentLoaded", () => {
    loadMessages();

    // Add event listener to trigger sendMessage on Enter key press
    const messageInput = document.getElementById("messageInput");
    messageInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    if (message === "") return;

    // Add the message to the chatbox
    addMessageToChat(message);

    // Save the message to localStorage
    saveMessage(message);

    // Clear the input field
    messageInput.value = "";
}

function addMessageToChat(message) {
    const chatBox = document.getElementById("chatBox");

    // Create a message container
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    // Add the message text
    const messageText = document.createElement("span");
    messageText.textContent = message;

    // Add a delete button (hidden by default)
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.style.display = "none"; // Hide the button initially
    deleteButton.onclick = () => deleteMessage(message, messageElement);

    // Toggle delete button visibility on message click
    messageElement.onclick = () => {
        deleteButton.style.display =
            deleteButton.style.display === "none" ? "inline-block" : "none";
    };

    // Append the text and button to the message container
    messageElement.appendChild(messageText);
    messageElement.appendChild(deleteButton);

    // Append the message container to the chatbox
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chatbox
    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveMessage(message) {
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push(message);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    const chatBox = document.getElementById("chatBox");
    messages.forEach((msg) => {
        addMessageToChat(msg);
    });
}

function deleteMessage(message, messageElement) {
    // Remove the message from localStorage
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    const updatedMessages = messages.filter((msg) => msg !== message);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));

    // Remove the message element from the chatbox
    messageElement.remove();
}