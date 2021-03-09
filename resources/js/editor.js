document.addEventListener('DOMContentLoaded', function () {

    var simplemde = new SimpleMDE({
        element: document.getElementById('stEdit'),
        showIcons: ['code', 'table'],
        status: ['lines']

    });
});
