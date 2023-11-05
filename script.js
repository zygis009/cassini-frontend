document.addEventListener('DOMContentLoaded', function () {
    const inputArea = document.getElementById('input-area');
    const addButton = document.getElementById('addInput');

    addButton.addEventListener('click', function () {
        const newInputGroup = document.createElement('div');
        newInputGroup.classList.add('js-waypoint-prototype');

        newInputGroup.innerHTML = `
            <p class="mb-2">Enter the intermediate point:</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Latitude" aria-label="Latitude">
                <input type="text" class="form-control" placeholder="Longitude" aria-label="Longitude">
                <button class="btn btn-danger" type="button" onclick="removeInput(this)">–</button>
            </div>
        `;

        inputArea.appendChild(newInputGroup);
    });

    document.getElementById('okButton').addEventListener('click', function () {
        // You'll need to define where the OK button should redirect or what it should do.
        window.location.href = '#'; // Set the URL where you want to redirect or add your logic here
    });


    // Loading
    const loader = document.getElementById('loader');

    loader.addEventListener('')
});

function removeInput(btn) {
    btn.closest('.js-waypoint-prototype').remove();
}

/**
 * Map stuff below...
 */
const map = L.map('map', {
    maxBounds: [[0, 0], [1, 1]],
    zoomSnap: 0.01,
    maxBoundsViscosity: 1.0,
}).setView([0.5, 0.5], 11);
map.setMinZoom(map.getBoundsZoom(map.options.maxBounds, true));

// TODO Get rid of absolute paths
const basePath = 'file:///home/karol/dev/contests/cassini23/cassini-frontend/resources/';
L.control.layers({
    "True color": L.imageOverlay(basePath + 'Sentinel-2_L2A_True_color.jpg', [[0, 0], [1, 1]], {opacity: 1}).addTo(map),
    "Lorem": L.imageOverlay(basePath + 'Sentinel-2_L2A_Custom_script.jpg', [[0, 0], [1, 1]], {opacity: 1}),
    "ipsum": L.imageOverlay(basePath + 'DEM_COPERNICUS_30_Topographic.jpg', [[0, 0], [1, 1]], {opacity: 1}),
}).addTo(map);

const pathCoordinates = [ // TODO Replace with real path
    [0.1, 0.1], // New York City
    [0.6, 0.2], // Los Angeles
    [0.7, 0.9] // London
];
L.polyline(pathCoordinates, { color: 'red' }).addTo(map);

const markers = [
    [0.1, 0.1],
    [0.7, 0.99]
];
markers.forEach(m => {
    L.marker(m).addTo(map);
});
