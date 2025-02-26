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

    fetch('logs.json')
        .then(response => response.json())
        .then(logs => {
            let logList = document.getElementById("log-list");
            logs.forEach(log => {
                let li = document.createElement("li");
                li.textContent = `${log.date}: ${log.description}`;
                logList.appendChild(li);
            });
        });

    // Automatische Bilderanzeige aus dem GitHub Repository
    const repoURL = "https://raw.githubusercontent.com/DEIN-GITHUB-NAME/pindome/main/";
    const imageList = ["flipper1.jpg", "flipper2.jpg", "flipper3.jpg"]; // Diese Liste manuell pflegen
    const gallery = document.getElementById("gallery");

    imageList.forEach(img => {
        let imageElement = document.createElement("img");
        imageElement.src = repoURL + img;
        imageElement.alt = "Flipperbild";
        gallery.appendChild(imageElement);
    });
});