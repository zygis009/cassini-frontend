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
});

function removeInput(btn) {
    btn.closest('.input-group').remove();
}
