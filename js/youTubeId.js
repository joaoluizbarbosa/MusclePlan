const muscleGroups = {
    peito: [
        { name: "Supino Reto com Barra - Barbell Bench Press", videoId: "SCVCLChPQFY" },
        { name: "Supino Reto com Halteres - Dumbbell Bench Press", videoId: "YQ2s_Y7g5Qk" },
        { name: "Supino Inclinado com Barra - Incline Barbell Bench Press", videoId: "2jFFCy8JBU8" },
        { name: "Low Incline Dumbbell Press", videoId: "ADl1Ac2ADHQ" }
    ],
    triceps: [
        { name: "Tríceps Pulley com barra reta", videoId: "M88Bt4MMpkI" },
        { name: "Tríceps Testa", videoId: "40Cx-IfJhA0" },
        { name: "Tríceps Francês", videoId: "_dtPoiFWZT4" }
    ],
    ombros: [
        { name: "Elevação Lateral com Halteres", videoId: "ot9nwSC1JnA" },
        { name: "Desenvolvimento de Ombros com Halteres", videoId: "5I7ogOjvdnc" },
        { name: "Elevação Lateral na Polia", videoId: "dgpts8LHOLc" }
    ],
    costas: [
        { name: "Remada Baixa Puxador Anatômico N2 - ", videoId: "klmn2425" },
        { name: "Remada Curvada", videoId: "opqr2627" },
        { name: "Levantamento Terra", videoId: "stuv2829" }
    ],
    biceps: [
        { name: "Rosca Direta", videoId: "mnop1123" },
        { name: "Rosca Martelo", videoId: "qrst1415" },
        { name: "Rosca Scott", videoId: "uvwx1617" }
    ],
    trapezio: [
        { name: "DB Kelso Shrug", videoId: "t6QJTiz35dc" }
    ],
    antebraco: [
        { name: "Exercício 1", videoId: "t6QJTiz35dc" }
    ],
    gluteos: [
        { name: "Cadeira Abdutora - Seated Hip Abductor Machine", videoId: "G_8LItOiZ0Q" },
        { name: "Levantamento Terra Romeno com Halteres - DB Romanian Deadlift", videoId: "xAL7lHwj30E" },
        { name: "Elevação Pélvica com Barra - Barbell Hip Thrust", videoId: "EF7jXP17DPE" },
        { name: "Elevação Pélvica com Peso Corporal - Bodyweight Hip Thrust", videoId: "7XuNzi5rcj4" }
    ],
    quadriceps: [
        { name: "Cadeira Extensora - Leg Extension", videoId: "m0FOpMEgero" }
    ],
    isquiotibiais: [
        { name: "Levantamento Terra Romeno com Halteres - DB Romanian Deadlift", videoId: "xAL7lHwj30E" },
        { name: "Mesa Flexora - Lying Leg Curl", videoId: "SbSNUXPRkc8" },
        { name: "Cadeira Flexora - Seated Leg Curl", videoId: "Orxowest56U" }
    ],
    adutores: [
        { name: "Cadeira Adutora - Seated Hip Adduction Machine", videoId: "CjAVezAggkI" }
    ],
    panturrilha: [
        { name: "Elevação de Panturrilha", videoId: "ijkl3637" },
        { name: "Panturrilha Sentado", videoId: "mnop3839" },
        { name: "Panturrilha em Pé", videoId: "qrst4041" }
    ]
};

// Função para atualizar a lista de exercícios com base nos grupos musculares selecionados
document.querySelectorAll('input[name="group"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Armazena as seleções antes de atualizar os selects
        const selectedExercises = storeExerciseSelections();

        // Atualiza os selects com base nos grupos musculares selecionados
        const selectedGroups = Array.from(document.querySelectorAll('input[name="group"]:checked')).map(input => input.value);
        const exerciseOptions = ['<option value="" disabled selected>Selecione um exercício</option>'];

        selectedGroups.forEach(group => {
            muscleGroups[group].forEach(exercise => {
                exerciseOptions.push(`<option value="${exercise.name}" data-video-id="${exercise.videoId}">${exercise.name}</option>`);
            });
        });

        document.querySelectorAll('.exercicio__nome').forEach(select => {
            select.innerHTML = exerciseOptions.join('');
        });

        // Restaura as seleções após atualizar os selects
        restoreExerciseSelections(selectedExercises);
    });
});

// Função para mostrar ou esconder o vídeo do YouTube com base no ID especificado
function toggleYouTubeVideo(sectionId) {
    const exerciseElement = document.getElementById(sectionId);
    const selectElement = exerciseElement.querySelector('.exercicio__nome');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const videoId = selectedOption ? selectedOption.getAttribute('data-video-id') : '';
    const videoContainer = exerciseElement.querySelector('.video-container');

    if (videoContainer.innerHTML) {
        // Se o vídeo já estiver sendo exibido, remova-o
        videoContainer.innerHTML = '';
    } else {
        // Se o vídeo não estiver sendo exibido, adicione-o
        if (videoId) {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('width', '325');
            iframe.setAttribute('height', '183');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');

            videoContainer.appendChild(iframe);
        } else {
            alert('Por favor, selecione um exercício.');
        }
    }
}

// Função para adicionar novos exercícios aos grupos musculares
function addNewExercise(group, exercise, videoId) {
    if (muscleGroups[group]) {
        muscleGroups[group].push({ name: exercise, videoId: videoId });
    } else {
        muscleGroups[group] = [{ name: exercise, videoId: videoId }];
    }
    document.querySelectorAll('input[name="group"]').forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.dispatchEvent(new Event('change'));
        }
    });
}

// Função para armazenar as seleções de exercícios
function storeExerciseSelections() {
    const selectedExercises = {};
    document.querySelectorAll('.exercicio__nome').forEach(select => {
        const sectionId = select.closest('.exercicio-n').id;
        selectedExercises[sectionId] = select.value;
    });
    return selectedExercises;
}

// Função para restaurar as seleções de exercícios
function restoreExerciseSelections(selectedExercises) {
    Object.entries(selectedExercises).forEach(([sectionId, selectedExercise]) => {
        const select = document.querySelector(`#${sectionId} .exercicio__nome`);
        if (select) {
            select.value = selectedExercise;
        }
    });
}

function ativarDesativarCheckbox(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    var estadoAtual = checkbox.checked;
  
    checkbox.checked = !estadoAtual;
  }