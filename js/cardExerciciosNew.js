 // Script para adicionar o card de um novo exercício, remove-lo e onde esse card será inserido no código
 function addSection() {
    let j = document.querySelectorAll('.exercicio-n').length + 1;
    let mainTag = document.querySelector('main');
    let section = document.createElement("section");
    section.className = "exercicio-n";
    section.id = "exercicio-" + j;
    section.innerHTML = `
        <ul class="lista__nome-do-exercicio">
            <li class="lista__nome-do-exercicio__item">
                <p class="lista__nome-do-exercicio__numero">${j}</p>
                <textarea id="nomeDoExercicio-${j}" class="exercicio__nome" placeholder="Nome do exercício" maxlength="32" oninput="limitLines(this, 1)" readonly></textarea>
                <input type="checkbox" id="menu-${j}" class="container__botao">
                <label for="menu-${j}" class="container__rotulo">
                    <span class="cabecalho__menu-hamburguer container__imagem">≡</span>
                </label>
                <ul class="lista-menu">
                    <li class="lista-menu__item"><button class="changeEx-button" onclick="toggleEdit('nomeDoExercicio-${j}')">˄˅</button><a onclick="toggleEdit('nomeDoExercicio-${j}')" class="lista-menu__exChange">ALT EXER</a></li>
                    <li class="lista-menu__item"><button class="youtube-button" onclick="searchYouTubeDynamic('exercicio-${j}')">»</button><a onclick="searchYouTubeDynamic('exercicio-${j}')" class="lista-menu__youtube-link">VÍDEO</a></li>
                    <li class="lista-menu__item"><button class="clock-button" onclick="toggleTimer('exercicio-${j}')">Ø</button><a onclick="toggleTimer('exercicio-${j}')" class="lista-menu__clock-link">TIMER</a></li>
                    <li class="lista-menu__item"><button class="color-button" onclick="preventClose(event); changeColor('exercicio-${j}')"></button><a onclick="preventClose(event); changeColor('exercicio-${j}')" class="lista-menu__color-link">TEMAS</a></li>  
                </ul>
            </li>
        </ul>
                
        <div class="video-container" id="video-container-${j}"></div>

        <div class="exercicioObs-div">
            <textarea id="exercicioObs-${j}" class="exercicio__obs auto-expand" placeholder="Observações sobre o exercício" maxlength="300"  oninput="limitLines(this, 10)" readonly></textarea>
            
            <button class="edit-button-1" onclick="toggleEdit('exercicioObs-${j}')">Editar</button>
        </div>

        <div id="timer-container-${j}" style="display: none;" class="timer-container">
            <input type="number" id="minutes-${j}" placeholder="Min" class="timer-container__item">
            <input type="number" id="seconds-${j}" placeholder="Seg" class="timer-container__item">
            <button id="start-button" onclick="startTimer()" class="start-button">Start</button>
        </div>
        
        <div id="timer-${j}" class="timer">00:00</div>

        <ul class="lista__primeira-linha">
            <li>
                <p></p>
            </li>
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
                <button class="remove-list-button" onclick="removeList('lista__aquecimento-${j}')"><img class="trash-img" src="img/trash-branca.png">
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

