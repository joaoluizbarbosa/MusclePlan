 // Script para alterar cor da sessão + textarea nome do exercicio + textarea obs do exercicio
 const colorCombinations = [
    {
        sectionColor: "#474E68",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#474E68" },
            { selector: ".exercicio__obs", backgroundColor: "#474E68" }
        ]
    },

    {
        sectionColor: "#153448",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#153448" },
            { selector: ".exercicio__obs", backgroundColor: "#153448" }
        ]
    },

    {
        sectionColor: "#3C5B6F",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#3C5B6F" },
            { selector: ".exercicio__obs", backgroundColor: "#3C5B6F" }
        ]
    },
    
    {
        sectionColor: "#948979",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#948979" },
            { selector: ".exercicio__obs", backgroundColor: "#948979" }
        ]
    },
    
    {
        sectionColor: "#35374B",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#35374B" },
            { selector: ".exercicio__obs", backgroundColor: "#35374B" }               
        ]
    },

    {
        sectionColor: "#8B322C",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#8B322C" },
            { selector: ".exercicio__obs", backgroundColor: "#8B322C" }               
        ]
    }
];

function changeColor(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Recuperar o índice atual da cor
    let currentIndex = parseInt(section.getAttribute('data-color-index')) || 0;

    // Calcular o próximo índice
    let nextIndex = (currentIndex + 1) % colorCombinations.length;

    // Aplicar a nova cor de fundo da seção
    section.style.backgroundColor = colorCombinations[nextIndex].sectionColor;

    // Aplicar as cores nos elementos especificados dentro da seção
    colorCombinations[nextIndex].elements.forEach(item => {
        const fullSelector = `#${sectionId} ${item.selector}`;
        document.querySelectorAll(fullSelector).forEach(element => {
            if (item.color) {
                element.style.color = item.color; // Alterar a cor do texto
            }
            if (item.backgroundColor) {
                element.style.backgroundColor = item.backgroundColor; // Alterar a cor de fundo
            }
        });
    });

    // Armazenar o novo índice
    section.setAttribute('data-color-index', nextIndex);
}

// Função para impedir o fechamento do menu
function preventClose(event) {
    event.stopPropagation();
}