document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
    modeSwitch.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    });
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    listView.addEventListener('click', function () {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
    });
    gridView.addEventListener('click', function () {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
    });
    document.querySelector('.messages-btn').addEventListener('click', function () {
        document.querySelector('.messages-section').classList.add('show');
    });
    document.querySelector('.messages-close').addEventListener('click', function () {
        document.querySelector('.messages-section').classList.remove('show');
    });
});            

/* hora local */

/* Obtener la fecha actual en la zona horaria de Colombia */
const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Bogota' };
const currentDate = new Intl.DateTimeFormat('es-CO', options).format(new Date());

/* Actualizar el contenido del elemento con el id "current-date"*/
document.getElementById('current-date').textContent = currentDate;

// Mapa
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el mapa
    var map = L.map('map').setView([4.1433, -73.6376], 13); // Coordenadas de Villavicencio

    // Capa de mapas
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Marcador
    L.marker([4.1433, -73.6376]).addTo(map) // Coordenadas del marcador en Villavicencio
        .bindPopup('Un marcador en Villavicencio, Meta!')
        .openPopup();
});
