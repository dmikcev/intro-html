mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-96, 37.8],
    zoom: 3
});

// Assuming you have doctor data in a JSON format
const doctorsData = [
    { name: "Dr. Smith", city: "New York", prescriptions: { Xanax: 100, Adderall: 50 } },
    // ... more doctors
];

function filterDoctors(query) {
    return doctorsData.filter(doctor => {
        return doctor.name.toLowerCase().includes(query.toLowerCase()) ||
               doctor.city.toLowerCase().includes(query.toLowerCase());
    });
}

function displayDoctors(filteredDoctors) {
    const doctorList = document.getElementById('doctor-list');
    doctorList.innerHTML = '';

    filteredDoctors.forEach(doctor => {
        const listItem = document.createElement('li');
        listItem.classList.add('doctor-item');
        listItem.textContent = `${doctor.name} - ${doctor.city} - ${doctor.prescriptions.Xanax} Xanax prescriptions`;
        doctorList.appendChild(listItem);
    });
}

function updateMap(filteredDoctors) {
    // ... update the map markers or heatmap based on filtered data
}

document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value;
    const filteredDoctors = filterDoctors(query);
    displayDoctors(filteredDoctors);
    updateMap(filteredDoctors);
});

// Initial display
displayDoctors(doctorsData);
updateMap(doctorsData);
