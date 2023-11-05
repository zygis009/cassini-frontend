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
 * Zooming stuff below...
 */

const zoomableContainer = document.getElementById('zoomable-container');
const zoomableImage = document.getElementById('zoomable-image');
const svgRoad = document.getElementById('svg-road');

let scale = 1;
const initialStrokeWidth = 1; // Set your desired initial stroke width here


zoomableContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    const scaleFactor = 0.1;

    if (e.deltaY > 0) {
        scale -= scaleFactor;
    } else {
        scale += scaleFactor;
    }

    // Limit the minimum and maximum zoom levels
    scale = Math.min(3, Math.max(1, scale));

    // Calculate the mouse position relative to the image container
    const mouseX = e.clientX - zoomableContainer.getBoundingClientRect().left;
    const mouseY = e.clientY - zoomableContainer.getBoundingClientRect().top;
    const transformOriginX = (mouseX / zoomableContainer.clientWidth) * 100;
    const transformOriginY = (mouseY / zoomableContainer.clientHeight) * 100;

    // Apply the zoom transformation to the image
    zoomableImage.style.transform = `scale(${scale})`;
    zoomableImage.style.transformOrigin = `${transformOriginX}% ${transformOriginY}%`;

    // Calculate the adjusted stroke width based on the current scale
    const adjustedStrokeWidth = initialStrokeWidth / scale;

    // Apply the adjusted stroke width to the SVG road

    svgRoad.style.transform = `scale(${scale})`;
    svgRoad.style.strokeWidth = `${adjustedStrokeWidth}px`;
    svgRoad.style.strokeWidth = `${adjustedStrokeWidth}px`;
    svgRoad.style.transformOrigin = `${transformOriginX}% ${transformOriginY}%`;
});