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
const layerTrueColor = L.imageOverlay('file:///home/karol/dev/contests/cassini23/cassini-frontend/resources/Sentinel-2_L2A_True_color.jpg', [[0, 0], [1, 1]], {opacity: 1});
const layerB = L.imageOverlay('file:///home/karol/dev/contests/cassini23/cassini-frontend/resources/Sentinel-2_L2A_Custom_script.jpg', [[0, 0], [1, 1]], {opacity: 1});
const layerC = L.imageOverlay('file:///home/karol/dev/contests/cassini23/cassini-frontend/resources/DEM_COPERNICUS_30_Topographic.jpg', [[0, 0], [1, 1]], {opacity: 1});

const baseLayers = {
    "True color": layerTrueColor,
    "Layer B": layerB,
    "Layer C": layerC,
};
L.control.layers(baseLayers).addTo(map);
layerTrueColor.addTo(map);


