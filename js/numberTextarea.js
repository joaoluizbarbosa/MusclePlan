document.getElementById('semana').addEventListener('input', function (event) {
    let textarea = event.target;
    textarea.value = textarea.value.replace(/[^0-9]/g, '');
});