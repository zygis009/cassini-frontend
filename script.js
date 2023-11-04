document.addEventListener('DOMContentLoaded', function () {
    const inputArea = document.getElementById('inputArea');
    const addButton = document.getElementById('addInput');

    addButton.addEventListener('click', function () {
        const newInputGroup = document.createElement('div');
        newInputGroup.classList.add('input-group', 'mb-4');

        newInputGroup.innerHTML = `
            <input type="text" class="form-control" placeholder="Latitude" aria-label="Latitude">
            <input type="text" class="form-control" placeholder="Longitude" aria-label="Longitude">
            <button class="btn btn-danger" type="button" onclick="removeInput(this)">–</button>
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
    btn.closest('.input-group').remove();
}

/**
 * Zooming stuff below...
 */

const zoomableCanvas = document.getElementById('zoomable-path');

let scale = 1;
let transform = [];

const path = [
    [100, 100],
    [200, 100],
    [200, 200],
];

const zoomist = new Zoomist('#zoomable-image');
zoomist.on('zoom', zoom => {
    scale = zoom;
    drawPath();
});
zoomist.on('drag', t => {
    transform = t;
    drawPath();
});

function drawPath() {
    const ctx = zoomableCanvas.getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, zoomableCanvas.width, zoomableCanvas.height);
    ctx.transform(scale, 0, 0, scale, transform.x, transform.y);
    ctx.beginPath();
    ctx.moveTo(path[0][0], path[0][1]);
    path.slice(1).forEach(p => {
        ctx.lineTo(p[0], p[1]);
    })
    ctx.stroke();
    ctx.restore();
}

drawPath();


