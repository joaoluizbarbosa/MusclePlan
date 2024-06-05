 // Script para alterar cor da sessão + textarea nome do exercicio + textarea obs do exercicio
 const colorCombinations = [
    {
        sectionColor: "#DFD0B8",
        elements: [
            { selector: ".exercicio__nome", color: "#153448", backgroundColor: "#DFD0B8" },
            { selector: ".cabecalho__menu-hamburguer", color: "#F05941" },
            { selector: ".exercicio__obs", color:"#153448", backgroundColor: "#DFD0B8" },
            { selector: ".edit-button-1", color: "#F05941" },
            { selector: ".select-repetitions", backgroundColor: "#948979" },
            { selector: ".select-kg", backgroundColor: "#948979" },
            { selector: ".select-rpe", backgroundColor: "#948979" },
            { selector: ".lista__aquecimento__w", color: "#F05941" },
            { selector: ".lista__segunda-linha__item__numero", color: "#153448" },
            { selector: ".input-reps1", backgroundColor: "#948979" },
            { selector: ".input-reps2", backgroundColor: "#948979" },
            { selector: ".input-kg", backgroundColor: "#3C5B6F" }
        ]
    },
    {
        sectionColor: "#948979",
        elements: [
            { selector: ".exercicio__nome", color: "#153448", backgroundColor: "#948979" },
            { selector: ".cabecalho__menu-hamburguer", color: "#153448" },
            { selector: ".exercicio__obs", color:"#153448", backgroundColor: "#948979" },
            { selector: ".edit-button-1", color: "#153448" },
            { selector: ".select-repetitions", backgroundColor: "#DFD0B8" },
            { selector: ".select-kg", backgroundColor: "#DFD0B8" },
            { selector: ".select-rpe", backgroundColor: "#DFD0B8" },
            { selector: ".lista__aquecimento__w", color: "#153448" },
            { selector: ".lista__segunda-linha__item__numero", color: "#153448" },
            { selector: ".input-reps1", backgroundColor: "#DFD0B8" },
            { selector: ".input-reps2", backgroundColor: "#DFD0B8" },
            { selector: ".input-kg", backgroundColor: "#3C5B6F" }
        ]
    },
    {
        sectionColor: "#3C5B6F",
        elements: [
            { selector: ".exercicio__nome", color: "#F05941", backgroundColor: "#3C5B6F" },
            { selector: ".cabecalho__menu-hamburguer", color: "#F05941" },
            { selector: ".exercicio__obs", color:"#DFD0B8", backgroundColor: "#3C5B6F" },
            { selector: ".edit-button-1", color: "#F05941" },
            { selector: ".select-repetitions", backgroundColor: "#DFD0B8" },
            { selector: ".select-kg", backgroundColor: "#DFD0B8" },
            { selector: ".select-rpe", backgroundColor: "#DFD0B8" },
            { selector: ".lista__aquecimento__w", color: "#F05941" },
            { selector: ".lista__segunda-linha__item__numero", color: "#F05941" },
            { selector: ".input-reps1", backgroundColor: "#DFD0B8" },
            { selector: ".input-reps2", backgroundColor: "#DFD0B8" },
            { selector: ".input-kg", backgroundColor: "#948979" }
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