fetch('events.json')
    .then(response => response.json())
    .then(events => {
        const timeline = document.getElementById('timeline');
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('timeline-event');
            eventElement.innerHTML = `
                <h3>${event.date} - ${event.title}</h3>
                <p>${event.details}</p>
                <img src="${event.image}" alt="${event.title}">
            `;
            timeline.appendChild(eventElement);
        });
    });

document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const newEvent = {
        date: document.getElementById('event-date').value,
        title: document.getElementById('event-title').value,
        details: document.getElementById('event-details').value,
        image: document.getElementById('event-image').files[0].name
    };

    // Aquí puedes añadir la lógica para actualizar el JSON y subirlo al repositorio manualmente
    // o mediante un script o GitHub Actions.
});