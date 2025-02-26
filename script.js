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
});