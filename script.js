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
const layersAspectRatio = 0.834;
const mapBounds = [[0, 0], [1, layersAspectRatio]];

const map = L.map('map', {
    maxBounds: mapBounds,
    zoomSnap: 0.01,
    maxBoundsViscosity: 1.0,
}).setView([0.5, 0.5], 11);
map.setMinZoom(map.getBoundsZoom(map.options.maxBounds, true));

const createImagePath = (imageName) =>
    'https://github.com/zygis009/cassini-frontend/blob/main/resources/' + imageName + '?raw=true';
L.control.layers({
    "True color": L.imageOverlay(createImagePath('Sentinel-2_L2A_True_color.jpg'), mapBounds, {opacity: 1}).addTo(map),
    "Lorem": L.imageOverlay(createImagePath('Sentinel-2_L2A_Custom_script.jpg'), mapBounds, {opacity: 1}),
    "ipsum": L.imageOverlay(createImagePath('2023-11-05-00_00_2023-11-05-23_59_DEM_COPERNICUS_30_Custom_script.jpg'), mapBounds, {opacity: 1}),
    "dolor": L.imageOverlay(createImagePath('2023-10-30-00_00_2023-10-30-23_59_Sentinel-2_L2A_Scene_classification_map_.jpg'), mapBounds, {opacity: 1}),
}).addTo(map);

const pathCoordinates = [ // TODO Replace with real path
    [0.79, 0.45],
    [0.5, 0.5],
    [0.13, 0.38]
];
L.polyline(pathCoordinates, { color: 'red' }).addTo(map);

const markers = [
    [0.79, 0.45],
    [0.13, 0.38]
];
markers.forEach(m => {
    L.marker(m).addTo(map);
});
