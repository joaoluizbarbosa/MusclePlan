function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropTarget = ev.target.closest('.exercicio-n');

    if (dropTarget && dropTarget !== draggedElement) {
        var list = dropTarget.parentNode;
        var items = Array.from(list.children);
        var indexDragged = items.indexOf(draggedElement);
        var indexTarget = items.indexOf(dropTarget);

        if (indexDragged < indexTarget) {
            list.insertBefore(draggedElement, dropTarget.nextSibling);
        } else {
            list.insertBefore(draggedElement, dropTarget);
        }

        // Atualiza a numeração das sessões
        renumberSessions(list);
    }
}

function renumberSessions(list) {
    Array.from(list.children).forEach((item, index) => {
        var newIndex = index + 1;
        var oldIndex = item.id.split('-')[1];

        // Atualiza o ID da seção
        item.id = `exercicio-${newIndex}`;

        // Atualiza o número da sessão
        item.querySelector('.lista__nome-do-exercicio__numero').textContent = newIndex;

        // Atualiza IDs dentro da seção
        item.querySelector(`#nomeDoExercicio-${oldIndex}`).id = `nomeDoExercicio-${newIndex}`;
        item.querySelector(`#video-container-${oldIndex}`).id = `video-container-${newIndex}`;
        item.querySelector(`#exercicioObs-${oldIndex}`).id = `exercicioObs-${newIndex}`;
        item.querySelector(`#lista__aquecimento-${oldIndex}`).id = `lista__aquecimento-${newIndex}`;

        // Atualiza a ID e referência das linhas da segunda lista
        item.querySelectorAll('.lista__segunda-linha').forEach((subItem, subIndex) => {
            var newSubIndex = `${newIndex}.${subIndex + 1}`;
            subItem.id = `myList${newSubIndex}`;
            subItem.querySelector('.lista__segunda-linha__item p').textContent = subIndex + 1;
        });

        // Atualiza os IDs nos botões do menu e suas referências de função
        item.querySelector(`#menu-${oldIndex}`).id = `menu-${newIndex}`;
        item.querySelectorAll('.lista-menu__item button').forEach(button => {
            button.setAttribute('onclick', button.getAttribute('onclick').replace(`-${oldIndex}`, `-${newIndex}`));
        });
    });
}

// Adicione os manipuladores de eventos de arrastar e soltar à lista de periodização
document.querySelectorAll('.exercicio-n').forEach(item => {
    item.addEventListener('dragover', allowDrop);
    item.addEventListener('drop', drop);
});