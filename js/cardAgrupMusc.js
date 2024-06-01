document.addEventListener('DOMContentLoaded', function() {
    const labelTitulo = document.querySelector('.labelTitulo-group');
    const listaItem = document.querySelector('.lista__agrupamentosMusculares__item');

    labelTitulo.addEventListener('click', function() {
        listaItem.classList.toggle('expanded');
    });
});