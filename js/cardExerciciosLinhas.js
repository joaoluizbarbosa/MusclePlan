 // Script para criação e remoção das linhas de aquecimento e exercício e onde elas serão inseridas
 
 function myFunction(sectionId, buttonId) {
    let i = document.getElementById(sectionId).querySelectorAll(".lista__segunda-linha").length + 1;
    let ul = document.createElement("ul");
    ul.className = "lista__segunda-linha";
    ul.innerHTML = '<li class="lista__segunda-linha__item"><p class="lista__segunda-linha__item__numero">' + i + '</p></li><li class="lista__segunda-linha__item"><input class="lista__segunda-linha__input input-reps1" type="number"><p>-</p><input class="lista__segunda-linha__input input-reps2" type="number"></li><li class="lista__segunda-linha__item"><input class="lista__segunda-linha__input input-kg" type="number"></li><li class="lista__segunda-linha__item"><input class="lista__segunda-linha__input input-rpe1" type="number"><p>-</p><input class="lista__segunda-linha__input  input-rpe2" type="number"></li><li class="lista__segunda-linha__item"><input class="input-checkbox" type="checkbox"></li>';
    let setButtons = document.getElementById(sectionId).getElementsByClassName("set-buttons")[0];
    setButtons.parentNode.insertBefore(ul, setButtons);
}

function myFunctionWSet(sectionId, buttonId) {
    let ulAquecimento = document.createElement("ul");
    let setId = Math.random().toString(36).substring(7); // Gerar um ID único
    ulAquecimento.className = "lista__aquecimento";
    ulAquecimento.id = "lista__aquecimento_" + setId; // Atribuir um ID único
    ulAquecimento.innerHTML = '<li class="lista__aquecimento__item"><p class="lista__aquecimento__w">A</p></li><li class="lista__aquecimento__item"><input class="lista__aquecimento__input input-reps1" type="number"><p>-</p><input class="lista__aquecimento__input input-reps2" type="number"></li><li class="lista__aquecimento__item"><input class="lista__aquecimento__input input-kg" type="number"></li><li class="lista__aquecimento__item"></li><li class="lista__aquecimento__item"><button class="remove-list-button" onclick="removeList(\'lista__aquecimento_' + setId + '\')"><img class="trash-img" src="img/trash.png"></button></li>';
    let setButtons = document.getElementById(sectionId).getElementsByClassName("set-buttons")[0];
    setButtons.parentNode.insertBefore(ulAquecimento, setButtons);

    // Move a lista__aquecimento para cima da lista__segunda-linha
    let mainSection = document.getElementById(sectionId);
    let segundaLinha = mainSection.querySelector(".lista__segunda-linha");
    mainSection.insertBefore(ulAquecimento, segundaLinha);
}

function undoFunction(sectionId, buttonId) {
    let myList = document.getElementById(sectionId);
    let lastSet = myList.getElementsByClassName("lista__segunda-linha");
    if (lastSet.length > 1) {
        lastSet[lastSet.length - 1].remove();
    }
}

function removeList(listId) {
    let listToRemove = document.getElementById(listId);
    if (listToRemove) {
        listToRemove.parentNode.removeChild(listToRemove);
    }
}     