 // Script para adicionar o card de um novo exercício, remove-lo e onde esse card será inserido no código
 function addSection() {
    let j = document.querySelectorAll('.exercicio-n').length + 1;
    let mainTag = document.querySelector('main');
    let section = document.createElement("section");
    section.className = "exercicio-n";
    section.id = "exercicio-" + j;
    section.draggable = true; // Adicionando o atributo draggable
    section.addEventListener('dragstart', function(event) {
        drag(event);
    });
    section.innerHTML = `
        <ul class="lista__nome-do-exercicio">
            <li class="lista__nome-do-exercicio__item">
                <p class="lista__nome-do-exercicio__numero">${j}</p>
                <select id="nomeDoExercicio-${j}" class="exercicio__nome">
                    <option value="" disabled selected>Selecione um exercício</option>
                </select>
                <input type="checkbox" id="menu-${j}" class="container__botao">
                <label for="menu-${j}" class="container__rotulo">
                    <span class="cabecalho__menu-hamburguer container__imagem">≡</span>
                </label>
                <ul class="lista-menu">
                    <li class="lista-menu__item"><button class="youtube-button" onclick="toggleYouTubeVideo('exercicio-${j}')">» _vídeo</button></li>
                    <li class="lista-menu__item"><button class="clock-button" onclick="toggleTimer('exercicio-${j}')">Ø _timer</button></li>
                    <li class="lista-menu__item"><button class="color-button" onclick="preventClose(event); changeColor('exercicio-${j}')">_cores</button></li>
                    <li class="lista-menu__item"><button class="delete-section-button" onclick="removeSection('exercicio-${j}')">✖ _excluir</button></li>
                </ul>
            </li>
        </ul>
        <ul class="lista-secButtons">
            <li class="lista-secButtons__item"><button class="lista-secButtons__ativarDesativar-button" onclick="ativarDesativarCheckbox('ativarDesativar')"><span class="infinit2">∞</span></button></li>
            <li class="lista-secButtons__item"><button class="lista-secButtons__youtube-button" onclick="toggleYouTubeVideo('exercicio-${j}')">»</button></li>
            <li class="lista-secButtons__item"><button class="lista-secButtons__clock-button" onclick="toggleTimer('exercicio-${j}')">Ø</button></li>
            <li class="lista-secButtons__item"><button class="lista-secButtons__color-button" onclick="preventClose(event); changeColor('exercicio-${j}')">_</button></li>
        </ul>  
        <div class="video-container" id="video-container-${j}"></div>
        <div class="exercicioObs-div">
            <textarea id="exercicioObs-${j}" class="exercicio__obs auto-expand" placeholder="Observações sobre o exercício" maxlength="300"  oninput="limitLines(this, 10)" readonly></textarea>
            <button class="edit-button-1" onclick="toggleEdit('exercicioObs-${j}')">Editar</button>
        </div>
        <ul class="lista__primeira-linha">
            <li></li>
            <li>
                <select class="select-repetitions">
                    <option class="option" value="reps range">Faixa de Repetições</option>
                    <option value="reps">Repetições</option>
                    <option value="reps max">Repetições Máximas</option>
                    <option value="amrap">AMRAP</option>
                    <option value="time">Tempo</option>
                    <option value="time range">Faixa de Tempo</option>
                </select>             
            </li>
            <li>
                <select class="select-kg">
                    <option value="kg">KG</option>
                    <option value="lb">LB</option>
                </select>             
            </li>
            <li>
                <select class="select-rpe">
                    <option value="rpe range">Faixa de Int. (PSE)</option>
                    <option value="rpe">Int. (PSE)</option>
                    <option value="% of 1rm range">Faixa de % de 1RM</option>
                    <option value="% of 1rm">% de 1RM</option>
                </select>             
            </li>
        </ul>

        <ul class="lista__aquecimento" id="lista__aquecimento-${j}">
            <li class="lista__aquecimento__item">
                <p class="lista__aquecimento__w">a</p>
            </li>
            <li class="lista__aquecimento__item">
                <input class="lista__aquecimento__input input-reps1" type="number" value="">
                <p>-</p>
                <input class="lista__aquecimento__input input-reps2" type="number" value="">
            </li>
            <li class="lista__aquecimento__item">
                <input class="lista__aquecimento__input input-kg" type="number" value="">
            </li>
            <li class="lista__aquecimento__item">
            </li>
            <li class="lista__aquecimento__item">
                <button class="remove-list-button" onclick="removeList('lista__aquecimento-${j}')"><img class="trash-img" src="img/trash.png">
            </li>
        </ul>


        <ul id="myList${j}" class="lista__segunda-linha">
            <li class="lista__segunda-linha__item">
                <p>1</p>
            </li>
            <li class="lista__segunda-linha__item">
                <input class="lista__segunda-linha__input input-reps1" type="number" value="">
                <p>-</p>
                <input class="lista__segunda-linha__input input-reps2" type="number" value="">
            </li>
            <li class="lista__segunda-linha__item">
                <input class="lista__segunda-linha__input input-kg" type="number" value="">
            </li>
            <li class="lista__segunda-linha__item">
                <input class="lista__segunda-linha__input input-rpe1" type="number" value="">
                <p>-</p>
                <input class="lista__segunda-linha__input input-rpe2" type="number" value="">
            </li>
            <li class="lista__segunda-linha__item">
                <input class="input-checkbox" type="checkbox">
            </li>
        </ul>

        <ul class="set-buttons">
            <li class="set-buttons__item">
                <button id="button${j}-add-w" class="add-w-button" onclick="myFunctionWSet('exercicio-${j}', this.id)">ADD a-Set</button>
                <button id="button${j}-add" class="add-button" onclick="myFunction('exercicio-${j}', this.id)">ADD Set</button>
                <button id="button${j}-undo" class="undo-button" onclick="undoFunction('exercicio-${j}', this.id)">EXC Set</button>
            </li>
        </ul>
        
    `;

    // Adiciona manipuladores de eventos de arrastar e soltar à nova sessão
    section.addEventListener('dragover', allowDrop);
    section.addEventListener('drop', drop);
    
    // Encontrar a div "session-buttons"
    let sessionButtons = document.querySelector('.session-buttons');
    let timerOrg = document.querySelector('.timer-org');

    // Inserir a nova sessão antes da div "session-buttons"
    mainTag.insertBefore(section, sessionButtons);
    mainTag.insertBefore(section, timerOrg);

}


function removeLastSection() {
    let main = document.querySelector('main');
    let lastSection = main.lastElementChild;
    
    // Verificar se o último elemento filho é um botão ou uma seção
    while (lastSection && !lastSection.id.startsWith('exercicio-')) {
        lastSection = lastSection.previousElementSibling;
    }

    if (lastSection) {
        lastSection.parentNode.removeChild(lastSection);
    }
}  

function removeSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        section.parentNode.removeChild(section);
        
        // Selecionar todas as seções restantes
        let sections = document.querySelectorAll('.exercicio-n');
        
        // Atualizar IDs e números das seções subsequentes
        sections.forEach((sec, index) => {
            let newIndex = index + 1;
            sec.id = `exercicio-${newIndex}`;
            sec.querySelector('.lista__nome-do-exercicio__numero').textContent = newIndex;
            sec.querySelector('.exercicio__nome').id = `nomeDoExercicio-${newIndex}`;
            sec.querySelector('input[type="checkbox"]').id = `menu-${newIndex}`;
            sec.querySelector('label').setAttribute('for', `menu-${newIndex}`);
            
            let buttons = sec.querySelectorAll('button');
            buttons.forEach(button => {
                if (button.classList.contains('youtube-button')) {
                    button.setAttribute('onclick', `toggleYouTubeVideo('exercicio-${newIndex}')`);
                } else if (button.classList.contains('lista-secButtons__youtube-button')) {
                    button.setAttribute('onclick', `toggleYouTubeVideo('exercicio-${newIndex}')`);
                } else if (button.classList.contains('clock-button')) {
                    button.setAttribute('onclick', `toggleTimer('exercicio-${newIndex}')`);
                } else if (button.classList.contains('color-button')) {
                    button.setAttribute('onclick', `preventClose(event); changeColor('exercicio-${newIndex}')`);
                } else if (button.classList.contains('lista-secButtons__color-button')) {
                    button.setAttribute('onclick', `preventClose(event); changeColor('exercicio-${newIndex}')`);
                } else if (button.classList.contains('delete-section-button')) {
                    button.setAttribute('onclick', `removeSection('exercicio-${newIndex}')`);
                } else if (button.classList.contains('edit-button-1')) {
                    button.setAttribute('onclick', `toggleEdit('exercicioObs-${newIndex}')`);
                }
            });
            
            sec.querySelector('.video-container').id = `video-container-${newIndex}`;
            sec.querySelector('.exercicioObs-div textarea').id = `exercicioObs-${newIndex}`;
            sec.querySelector('.lista__aquecimento').id = `lista__aquecimento-${newIndex}`;
            sec.querySelector('.lista__aquecimento .remove-list-button').setAttribute('onclick', `removeList('lista__aquecimento-${newIndex}')`);
            sec.querySelector('.lista__segunda-linha').id = `myList${newIndex}`;
            let setButtons = sec.querySelector('.set-buttons');
            setButtons.querySelector('.add-w-button').id = `button${newIndex}-add-w`;
            setButtons.querySelector('.add-button').id = `button${newIndex}-add`;
            setButtons.querySelector('.undo-button').id = `button${newIndex}-undo`;
            setButtons.querySelector('.add-w-button').setAttribute('onclick', `myFunctionWSet('exercicio-${newIndex}', this.id)`);
            setButtons.querySelector('.add-button').setAttribute('onclick', `myFunction('exercicio-${newIndex}', this.id)`);
            setButtons.querySelector('.undo-button').setAttribute('onclick', `undoFunction('exercicio-${newIndex}', this.id)`);
        });
    }
}
