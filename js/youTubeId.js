const muscleGroups = {
    peito: [
        { name: "Supino Reto com Barra - Barbell Bench Press", videoId: "SCVCLChPQFY" },
        { name: "Supino Reto com Halteres - Dumbbell Bench Press", videoId: "YQ2s_Y7g5Qk" },
        { name: "Supino Horizontal na Máquina - Machine Chest Press", videoId: "DcSMIlBnnZ8"},
        { name: "Supino Inclinado com Barra - Incline Barbell Bench Press", videoId: "2jFFCy8JBU8" },
        { name: "Low Incline Dumbbell Press", videoId: "ADl1Ac2ADHQ" },
        { name: "Crucifixo no Pec Deck - Pec Deck Flye", videoId: "FDay9wFe5uE" },
        { name: "Crucifixo no Cabo - Cable Bent Flye", videoId: "Cj6P91eFXkM" },
        { name: "Crucifixo com Halteres - Flat Dumbbell Flye", videoId: "JFm8KbhjibM" }
        
    ],
    triceps: [
        { name: "Tríceps na Polia com Barra Reta - Cable Triceps Pushdown", videoId: "6Fzep104f0s" },
        { name: "Tríceps na Polia com Corda - Rope Pushdown", videoId:"-xa-6cQaZKY" },
        { name: "Tríceps Testa com Barra W - EZ Bar Skull Crusher", videoId:"eluOhtYkm-0" },
        { name: "Tríceps Francês Unilateral com Halteres - Single Arm Dumbbell French Press", videoId:"9uDyYtQ1JzM" },
        { name: "Tríceps Acima da Cabeça na Polia com Corda - Rope Overhead Cable Triceps Extension", videoId:"KvrP8c6eVBc" },
        { name: "Tríceps Coice no Cabo - Cable Triceps Kickback", videoId:"DYsQWSbj7UM" }
    ],
    ombros: [
        { name: "Desenvolvimento de Ombros Sentado com Halteres - Seated Dumbbell Shoulder Press", videoId: "SSXS4Z8OkCg" },
        { name: "Desenvolvimento de Ombros na Máquina - Machine Shoulder Press", videoId: "WvLMauqrnK8" },
        { name: "Desenvolvimento de Ombros em Pé com Barra - Standing Barbell Shoulder Press", videoId: "G2qpTG1Eh40" },
        { name: "Standing Arnold Press - Arnold Press em Pé", videoId: "pQDrcNoDNVM" },
        { name: "Seated Arnold Press - Arnold Press Sentado", videoId: "R-RTgOxrj88" },
        { name: "Elevação Lateral com Halteres - Dumbbell Lateral Raise", videoId: "XPPfnSEATJA"},
        { name: "Elevação Lateral no Cabo - Cable Lateral Raise", videoId: "Z5FA9aq3L6A"},
        { name: "Elevação Lateral na Máquina - Machine Lateral Raise", videoId: "0yEX5In9YTg"}
    ],
    costas: [
        { name: "Remada Baixa no Cabo - Seated Cable Row", videoId: "UCXxvVItLoM" },
        { name: "Remada Inclinada com Peito Apoiado com Halteres - Incline Chest-Supported Dumbbell Row", videoId: "tZUYS7X50so" },
        { name: "Remada com Peito Apoiado Pegada T - Chest-Supported T-Bar Row", videoId: "0UBRfiO4zDs" },
        { name: "Remada com Peito Apoiado Pegada Diagonal - Chest-Supported Diagonal-Grip Row", videoId: "vee7qopvx3Y" },
        { name: "Remada com Peito Apoiado Pegada Neutra - Chest-Supported Neutral-Grip Row", videoId: "eOcHlx6E9ok" },
        { name: "Remada Unilateral com Halter - Single Arm Supported Dumbbell Row", videoId: "DMo3HJoawrU" },
        { name: "Crucifixo Invertido no Pec Deck - Machine Reverse Flye", videoId: "5YK4bgzXDp0" },
        { name: "Crucifixo Invertido com Halteres - Bent Over Reverse Dumbbell Flye", videoId: "hf7jnF45N_I" },
        { name: "Crucifixo Invertido no Cabo - Rear Delt Cable Flye", videoId: "er15V96hG5U" },
        { name: "Puxada Frente com Puxador Anatômico N3 - Lat Pulldown N3", videoId: "JyTjbMnwDHw" },
        { name: "Puxada Frente Pegada Aberta Pronada - Overhand Lat Pulldown", videoId: "EUIri47Epcg" },
        { name: "Puxada Frente com Pegada Neutra - Neutral Grip Lat Pulldown", videoId: "kxeklf1Tkhw" },
        { name: "Graviton Pegada Aberta Pronada - Graviton Overhand Wide-Grip", videoId: "BkRGxqQMlzM" },
        { name: "Graviton Pegada Fechada Supinada - Graviton Underhand Close-Grip", videoId: "Lt96nC-W9s0" }
    ],
    biceps: [
        { name: "Rosca Bíceps com Barra W - EZ Bar Curl", videoId: "-gSM-kqNlUw" },
        { name: "Rosca Bíceps com Halteres - Dumbbell Bicep Curl", videoIde: "HnHuhf4hEWY" },
        { name: "Rosca Bíceps Inclinado com Halteres - Incline Dumbbell Curl", videoId: "aTYlqC_JacQ" },
        { name: "Rosca Bíceps Bayesiana - Bayesian Curl", videoId: "JVRpQSWJ6JU" },
        { name: "Rosca Martelo com Halteres - Dumbbell Hammer Curl", videoId: "CFBZ4jN1CMI" },
        { name: "Rosca Scott com Barra W - EZ Bar Preacher Curl", videoId: "sxA__DoLsgo" },
        { name: "Rosca Scott na Máquina - Machine Preacher Curl", videoId: "Ja6ZlIDONac" }

    ],
    trapezio: [
        { name: "Encolhimento Kelso com Halteres - DB Kelso Shrug", videoId: "qKCuWRx-hKk" },
        { name: "Encolhimento Kelso na Máquina - Machine Kelso Shrug", videoId: "aWeUsSDuHbs"}
    ],
    antebraco: [
        { name: "Extensão de Punhos com Halteres - Dumbbell Wrist Extension", videoId: "sCaQ7OZZ1MY" },
        { name: "Flexão de Punhos com Halteres - Dumbbell Wrist Flexion", videoId: "3VLTzIrnb5g" }
    ],
    gluteos: [
        { name: "Cadeira Abdutora - Seated Hip Abductor Machine", videoId: "G_8LItOiZ0Q" },
        { name: "Elevação Pélvica com Barra - Barbell Hip Thrust", videoId: "EF7jXP17DPE" },
        { name: "Elevação Pélvica com Peso Corporal - Bodyweight Hip Thrust", videoId: "7XuNzi5rcj4" },
        { name: "Extensão Lombar no Banco 45° Foco em Glúteos - Back Extension Glute Focused", videoId: "nk7x3eZgsmM" }
    ],    
    gluteosequadriceps: [
        { name: "Leg Press 45°", videoId: "3KJKb1aN6HA" },
        { name: "Leg Press Horizontal - Horizontal Leg Press", videoId: "NZlaV9_C-GE" },
        { name: "Agachamento Búlgaro - Bulgarian Split Squat", videoId: "vgn7bSXkgkA" },
        { name: "Passada Afundo com Halteres - Dumbbell Walking Lunge", videoId:"eFWCn5iEbTU" },
        { name: "Passada Afundo - Walking Lunge", videoId: "L8fvypPrzzs" },
        { name: "Agachamento com Peso Corporal - Air Squat", videoId: "rMvwVtlqjTE" },
        { name: "Agachamento com Barra nas Costas - Barbell Back Squat", videoId: "rrJIyZGlK8c" }
    ],
    gluteoseisquiotibiais: [
        { name: "Levantamento Terra Romeno com Barra - Barbell Romanian Deadlift", videoId: "LURGDIX3adY" },
        { name: "Levantamento Terra Romeno com Halteres - DB Romanian Deadlift", videoId: "xAL7lHwj30E" },
        { name: "Barbell Stiff Legged Deadlift", videoId: "CN_7cz3P-1U" },
        { name: "Extensão Lombar no Banco 45° Glúteos e Isquiotibiais - 45° Glute Ham Raise", videoId: "5_ejbGfdAQE" }
    ],
    quadriceps: [
        { name: "Cadeira Extensora - Leg Extension", videoId: "m0FOpMEgero" },
        { name: "Agachamento Sissy - Sissy Squat", videoId: "FTmbNjUu7CI" },
        { name: "Flexão Nórdica Reversa - Reverse Nordic Curl", videoId: "GbpDfXXKuk0" }
    ],
    isquiotibiais: [
        { name: "Mesa Flexora - Lying Leg Curl", videoId: "SbSNUXPRkc8" },
        { name: "Cadeira Flexora - Seated Leg Curl", videoId: "Orxowest56U" },
        { name: "Flexão Nórdica - Nordic Hamstring Curl", videoId: "kjv4WQXWl_A" },
        { name: "Flexão de Joelhos na Bola Suíça - Swiss Ball Hamstring Curl", videoId: "Kk8dpH4ZPos" }
    ],
    adutores: [
        { name: "Cadeira Adutora - Seated Hip Adduction Machine", videoId: "CjAVezAggkI" },
        { name: "Adução de Quadril Copenhague - Copenhagen Hip Adduction", videoId: "KZMIND6LvRY" },
        { name: "Adução de Quadril Unilateral com Elástico - Single Leg Banded Hip Adduction", videoId: "GMCTJvMB-is" }
    ],
    panturrilha: [
        { name: "Panturrilha no Hack de Agachamento - Hack Squat Calf Raise", videoId: "V_9E0TNBA5w" },
        { name: "Panturrilha com peso corporal - Bodyweight Calf Raise", videoId: "c5Kv6-fnTj8" }
    ],
    soleo: [
        { name: "Cadeira Solear - Seated Calf Raise", videoId: "NL897yzS30g" }
    ],
    abdomen: [
        { name: "Abdominal Remador - Tuck Up", videoId: "vb6DC9_NDcE" },
        { name: "Abdominal Canivete - V Up", videoId: "7UVgs18Y1P4" },
        { name: "Abdominal Bicicleta - Bicycle Crunch", videoId: "cbKIDZ_XyjY" },
        { name: "Elevação de Joelhos Pendurado - Hanging Knee Raise", videoId: "RD_A-Z15ER4" },
        { name: "Abdominal na Máquina - Crunch Machine", videoId: "kLL2RwhNE68" }
    ],
    lombar: [
        { name: "Extensão Lombar na Máquina - Machine Back Extension", videoId: "4sla2xidkD0" },
        { name: "Extensão Lombar no Banco 45° - Back Extension", videoId: "Q4_W0wBLXBc" }
    ],
    cardio: [
        { name: "Esteira - Treadmill", videoId: "" },
        { name: "Elíptico - Elliptical", videoId: "" },
        { name: "Simulador de Escada - Climbmill", videoId: "" }
    ],
    lpo: [
        { name: "", videoId: "" },
        { name: "", videoId: "" }
    ],
    ativarDesativar: [
        { name: "", videoId: "" }
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

// Função para ativar/desativar o checkbox e disparar o evento de mudança
function ativarDesativarCheckbox(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change'));
}