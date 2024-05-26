    // Script para textareas: expandir com o texto e carregar a função para textareas criadas dinamicamente

    // Função para expandir a textarea automaticamente
    function autoExpandTextarea(element) {
        element.style.height = 'auto';
        element.style.height = (element.scrollHeight) + 'px';
    }

    // Executa a função autoExpandTextarea em todas as textareas com a classe 'auto-expand' ao carregar a página
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.auto-expand').forEach(function(textarea) {
            autoExpandTextarea(textarea);
        });
    });

    // MutationObserver para observar adições de novos elementos ao DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && node.classList.contains('auto-expand')) {
                    autoExpandTextarea(node);
                }
            });
        });
    });

    // Observa mudanças no DOM
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Event listener para expandir a textarea quando o conteúdo é alterado
    document.addEventListener('input', function(event) {
        if (event.target && event.target.classList.contains('auto-expand')) {
            autoExpandTextarea(event.target);
        }
    });

    // Event listener para adicionar nova textarea dinâmica
    document.getElementById('addTextarea').addEventListener('click', function() {
        const newTextarea = document.createElement('textarea');
        newTextarea.className = 'auto-expand';
        newTextarea.rows = 1; // Defina o número inicial de linhas conforme necessário
        document.body.appendChild(newTextarea);
    });

        





    // Script para textareas: Limitar o número de caracteres e de parágrafos

    // Adiciona eventos para limitar o número de caracteres em cada textarea
    document.addEventListener("DOMContentLoaded", function() {
        var textareas = document.querySelectorAll('textarea');
    
        textareas.forEach(function(textarea) {
            textarea.addEventListener('input', function() {
                var maxLength = parseInt(this.getAttribute('maxlength'));
                var currentLength = this.value.length;
    
                if (currentLength > maxLength) {
                    this.value = this.value.slice(0, maxLength);
                }
            });
        });
    });



    // Função para limitar o número de linhas em uma textarea
    function limitLines(textarea, maxLines) {
        var lines = textarea.value.split('\n');
        if (lines.length > maxLines) {
            textarea.value = lines.slice(0, maxLines).join('\n');
        }
    }







     // Script para textareas: editar, salvar e bloquear

     function toggleEdit(textareaId) {
        const textarea = document.getElementById(textareaId);
        const isReadOnly = textarea.hasAttribute('readonly');
        if (isReadOnly) {
            textarea.removeAttribute('readonly');
            textarea.focus();
            textarea.nextElementSibling.textContent = 'Salvar';

            // Adiciona o evento de clique ao documento para salvar ao clicar fora
            document.addEventListener('click', handleClickOutside, true);
        } else {
            textarea.setAttribute('readonly', 'readonly');
            textarea.nextElementSibling.textContent = 'Editar';
            saveChanges(textarea);

            // Remove o evento de clique ao documento
            document.removeEventListener('click', handleClickOutside, true);
        }
    }

    function handleClickOutside(event) {
        const textareas = document.querySelectorAll('textarea[id^="nomeDoExercicio-"]');
        textareas.forEach(textarea => {
            if (!textarea.contains(event.target) && event.target !== textarea.nextElementSibling && !textarea.hasAttribute('readonly')) {
                textarea.setAttribute('readonly', 'readonly');
                textarea.nextElementSibling.textContent = 'Editar';
                saveChanges(textarea);
            }
        });

        // Remove o evento de clique ao documento após processar
        document.removeEventListener('click', handleClickOutside, true);
    }

    function saveChanges(textarea) {
        console.log('Changes saved for', textarea.id);
        // Aqui você pode adicionar o código para salvar os dados, por exemplo, enviá-los para um servidor
    }

    document.addEventListener('DOMContentLoaded', function() {
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(addEditButton);
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'TEXTAREA') {
                        addEditButton(node);
                    } else if (node.querySelectorAll) {
                        node.querySelectorAll('textarea').forEach(addEditButton);
                    }
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });