 // Script do YouTube
 function searchYouTubeDynamic(sectionId) {
    // Encontra o elemento de exercício correspondente ao sectionId
    var exerciseElement = document.getElementById(sectionId);
    
    // Encontra o textarea dentro do elemento de exercício para obter o nome do exercício
    var exerciseNameTextarea = exerciseElement.querySelector('.exercicio__nome');
    
    // Obtém o texto do nome do exercício inserido pelo usuário
    var userKeyword = exerciseNameTextarea.value.trim();

    // Lista de palavras-chave adicionais que você quer incluir
    var additionalKeywords = ["RP", "Ricardo Cipolli"];

    // Verifica se há uma palavra-chave válida inserida pelo usuário
    if (userKeyword) {
        // Combina a palavra-chave inserida pelo usuário com as palavras-chave adicionais
        var keywords = [userKeyword].concat(additionalKeywords);

        // Combina todas as palavras-chave em uma única string separada por espaços
        var keyword = keywords.join(' ');

        // Substitui os espaços por "+" na palavra-chave para formar a URL de busca
        keyword = keyword.replace(/\s/g, '+');

        // URL de busca do YouTube com a palavra-chave inserida e o número máximo de resultados
        var searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=' + keyword + '&key=AIzaSyAak9tSnzEoKqk50Kmz39nFZWAWAV7V4ro';

        // Requisição AJAX para a API do YouTube
        var xhr = new XMLHttpRequest();
        xhr.open('GET', searchUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.items && response.items.length > 0) {
                    // Obtém o ID do vídeo
                    var videoId = response.items[0].id.videoId;
                    
                    // Cria o iframe para o vídeo incorporado
                    var iframe = document.createElement('iframe');
                    iframe.setAttribute('width', '325');
                    iframe.setAttribute('height', '183');
                    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                    iframe.setAttribute('allowfullscreen', '');

                    // Encontra o contêiner de vídeo correspondente e o preenche com o iframe
                    var videoContainer = exerciseElement.querySelector('.video-container');
                    videoContainer.innerHTML = ''; // Limpa o conteúdo existente
                    videoContainer.appendChild(iframe);
                } else {
                    alert('Nenhum vídeo encontrado para a palavra-chave inserida.');
                }

                    // Após carregar o vídeo com sucesso, exibe o botão de fechar
                    var closeVideoButton = videoContainer.querySelector('.close-video-button');
                    closeVideoButton.style.display = 'block';
            }
        };
        xhr.send();
    } else {
        alert('Por favor, insira o nome do exercício.');
    }
}

function closeVideoContainer(containerId) {
    var videoContainer = document.getElementById(containerId);
    if (videoContainer) {
        videoContainer.style.display = 'none';
    }
}