document.addEventListener("DOMContentLoaded", function() {
    fetch('events.json')
        .then(response => response.json())
        .then(events => {
            let eventList = document.getElementById("event-list");
            events.forEach(event => {
                let li = document.createElement("li");
                li.textContent = `${event.date}: ${event.title}`;
                eventList.appendChild(li);
            });
        });

    // Automatische Bilderanzeige aus dem GitHub Repository
    const repoURL = "https://raw.githubusercontent.com/pindome17/Pindome/main/";
    const imageList = ["images/flipper1.jpg", "images/flipper2.jpg", "images/flipper3.jpeg"]; // Diese Liste manuell pflegen
    const gallery = document.getElementById("gallery");

    imageList.forEach(img => {
        let imageElement = document.createElement("img");
        imageElement.src = repoURL + img;
        imageElement.alt = "Flipperbild";
        gallery.appendChild(imageElement);
    });
});
