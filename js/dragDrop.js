function allowDrop(ev) {
    ev.preventDefault();
}

var dragStartX, dragStartY;
var dragThreshold = 10; // Defina aqui a distância mínima de arrastar antes que o movimento seja considerado um arrastar

function drag(ev) {
    dragStartX = ev.clientX;
    dragStartY = ev.clientY;
    ev.dataTransfer.setData("text", ev.target.id);

    // Adiciona eventos para detectar o movimento do mouse durante o arrastar
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(ev) {
    // Calcula a distância percorrida pelo mouse desde o início do arrastar
    var deltaX = Math.abs(ev.clientX - dragStartX);
    var deltaY = Math.abs(ev.clientY - dragStartY);

    // Se a distância for maior que o limiar, considera-se um arrastar válido
    if (deltaX > dragThreshold || deltaY > dragThreshold) {
        // Remove os eventos de movimento e soltura do mouse
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        // Inicia o arrastar
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text", ev.target.id);
    }
}

function onMouseUp(ev) {
    // Remove os eventos de movimento e soltura do mouse
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropTarget = ev.target.closest('.exercicio-n');

    // Se o dropTarget for uma seção de exercício, insira o elemento arrastado antes ou depois dele
    if (dropTarget && dropTarget !== draggedElement) {
        // Verifica se o drop ocorreu acima ou abaixo do dropTarget
        var dropBounding = dropTarget.getBoundingClientRect();
        var mouseY = ev.clientY;
        var dropPosition = (mouseY - dropBounding.top) / dropBounding.height;

        var list = dropTarget.parentNode; // Obtemos o pai do dropTarget
        var items = Array.from(list.children);
        var indexDragged = items.indexOf(draggedElement);
        var indexTarget = items.indexOf(dropTarget);

        // Insere o elemento arrastado antes ou depois do dropTarget, dependendo da posição do mouse
        if (dropPosition < 0.5) {
            list.insertBefore(draggedElement, dropTarget);
        } else {
            list.insertBefore(draggedElement, dropTarget.nextSibling);
        }

        // Atualiza a numeração das sessões
        renumberSessions();
    }
}

function renumberSessions() {
    // Obtém todas as sessões de exercício
    var sessions = document.querySelectorAll('.exercicio-n');

    // Loop através de todas as sessões de exercício
    sessions.forEach((session, index) => {
        // Atualiza o ID da sessão de exercício
        var newId = `exercicio-${index + 1}`;
        session.id = newId;

        // Atualiza o número da sessão na interface
        session.querySelector('.lista__nome-do-exercicio__numero').textContent = index + 1;

        // Obtém todos os elementos dentro da sessão
        var elements = session.querySelectorAll('[id^="nomeDoExercicio-"], [id^="exercicioObs-"], [id^="video-container-"], [id^="lista__aquecimento-"], [id^="menu-"], [id^="button"], [id^="myList"], label[class^="container__rotulo"], button[class^="edit-button-1"], button[class^="remove-list-button"], button[class^="youtube-button"], button[class^="clock-button"], button[class^="color-button"], button[class^="delete-section-button"], button[class^="lista-secButtons__youtube-button"], button[class^="lista-secButtons__clock-button"], button[class^="lista-secButtons__color-button"]');

        // Loop através de todos os elementos dentro da sessão e atualiza suas IDs e outros atributos
        elements.forEach(element => {
            var oldId = element.id;
            var newId = oldId.replace(/\d+/, index + 1); // Substitui o número antigo pelo novo número da sessão
            element.id = newId;

            // Se o elemento for um label, atualize seu atributo "for" para corresponder ao novo ID do menu
            if (element.tagName === 'LABEL') {
                var forAttr = element.getAttribute('for');
                var newForAttr = forAttr.replace(/\d+/, index + 1);
                element.setAttribute('for', newForAttr);
            }

            // Se o elemento for um botão, atualize os atributos de acordo com o novo ID da sessão
            if (element.tagName === 'BUTTON') {
                var onclickAttr = element.getAttribute('onclick');
                var newOnclickAttr = onclickAttr.replace(/\d+/, index + 1);
                element.setAttribute('onclick', newOnclickAttr);
            }
        });
        
        // Atualiza o onclick dos botões de deletar lista de aquecimento
        var warmupLists = session.querySelectorAll('.lista__aquecimento');
        warmupLists.forEach((warmupList, warmupIndex) => {
            var warmupId = `${newId}-${warmupIndex + 1}`;
            warmupList.id = warmupId;

            var removeButton = warmupList.querySelector('.remove-list-button');
            if (removeButton) {
                removeButton.setAttribute('onclick', `removeList('${warmupId}')`);
            }
        });
    });

}

// Adicione os manipuladores de eventos de arrastar e soltar à lista de periodização
document.querySelectorAll('.exercicio-n').forEach(item => {
    item.addEventListener('dragover', allowDrop);
    item.addEventListener('drop', drop);

    // Adiciona eventos de scroll para permitir o scroll durante o arrastar
item.addEventListener("dragenter", function (event) {
    if (event.target.classList.contains("exercicio-n")) {
        event.target.style.border = "2px dashed blue"; // Adicione um estilo de feedback visual
    }
    event.preventDefault();
});

item.addEventListener("dragleave", function (event) {
    if (event.target.classList.contains("exercicio-n")) {
        event.target.style.border = ""; // Remove o estilo de feedback visual
    }
    event.preventDefault();
});
});