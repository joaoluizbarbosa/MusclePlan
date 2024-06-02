// Script para eventos de clique na checkbox .container__botao do menu de exercícios

// Adiciona evento de clique no documento
document.addEventListener('click', function(event) {
    // Seleciona todas as checkboxes com a classe específica
    const checkboxes = document.querySelectorAll('.container__botao');
    checkboxes.forEach(function(checkbox) {
        // Verifica se o alvo do clique não é a checkbox específica
        if (checkbox !== event.target) {
            checkbox.checked = false;
        }
    });
});

// Função para adicionar uma nova checkbox dinâmica
document.getElementById('addCheckbox').addEventListener('click', function() {
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.className = 'container__botao';
    document.body.appendChild(newCheckbox);
});