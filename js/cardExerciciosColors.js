 // Script para alterar cor da sessão + textarea nome do exercicio + textarea obs do exercicio
 const colorCombinations = [
    {
        sectionColor: "#153448",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#153448" },
            { selector: ".exercicio__obs", backgroundColor: "#153448" }
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
        sectionColor: "#6F4E37",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#6F4E37" },
            { selector: ".exercicio__obs", backgroundColor: "#6F4E37" }
        ]
    },

    {
        sectionColor: "#BE3144",
        elements: [
            { selector: ".exercicio__nome", backgroundColor: "#BE3144" },
            { selector: ".exercicio__obs", backgroundColor: "#BE3144" },
            { selector: ".input-rpe2", backgroundColor: "#872341" }
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