// Script para exportar treino para o WhatsApp
// Função para exportar o texto para o WhatsApp
function exportToWhatsApp() {
    // Selecionar os elementos desejados
    let tituloTreinoInput = document.querySelector('.titulo-do-treino');
    let obsTreinoInput = document.querySelector('.treino__obs');
    let exercicios = document.querySelectorAll('.exercicio-n');
    let textoExercicios = '';

    // Obter o título do treino em letras maiúsculas
    let tituloTreino = tituloTreinoInput.value.toUpperCase();
    let obsTreino = obsTreinoInput.value;

    // Iterar sobre cada exercício
    exercicios.forEach((exercicio, index) => {
        let nomeExercicioInput = exercicio.querySelector('.exercicio__nome');
        let nomeExercicio = nomeExercicioInput.value.toUpperCase();
        let obsExercicio = exercicio.querySelector('.exercicio__obs').value;
        let sets = exercicio.querySelectorAll('.lista__segunda-linha__item');
        let aquecimentoInputs = exercicio.querySelectorAll('.lista__aquecimento__input');
        let segundaLinhaInputs = exercicio.querySelectorAll('.lista__segunda-linha__input');

        // Adicionar uma quebra de linha entre os exercícios, exceto para o primeiro
        if (index !== 0) {
            textoExercicios += '\n\n';
        }

        // Montar o texto do exercício
        textoExercicios += `${index + 1}: ${nomeExercicio}\n`;
        textoExercicios += `\nObservações: \n${obsExercicio}\n\n`;

        // Adicionar os valores dos aquecimentos
        textoExercicios += "Aquecimento:\n";
        for (let i = 0; i < aquecimentoInputs.length; i += 3) {
            textoExercicios += `- ${aquecimentoInputs[i].value}-${aquecimentoInputs[i + 1].value} reps ${aquecimentoInputs[i + 2].value}kg\n`;
        }

        // Adicionar os valores da segunda linha
        textoExercicios += "\nSéries efetivas:\n";
        for (let i = 0; i < segundaLinhaInputs.length; i += 5) {
            textoExercicios += `- ${segundaLinhaInputs[i].value}-${segundaLinhaInputs[i + 1].value} reps ${segundaLinhaInputs[i + 2].value}kg @${segundaLinhaInputs[i + 3].value}-${segundaLinhaInputs[i + 4].value}\n`;
        }
    });

    // Montar o texto completo
    let textoCompleto = `${tituloTreino}\n`;
    textoCompleto += `\nObservações Gerais: \n${obsTreino}\n\n`;
    textoCompleto += `${textoExercicios}\n`;

    // Formatar o texto para o formato de URL do WhatsApp
    let textoWhatsApp = encodeURIComponent(textoCompleto);

    // Abrir o WhatsApp com o texto formatado
    window.open(`https://wa.me/?text=${textoWhatsApp}`, '_blank');
}






 // Script para exportar para o Excel
 function exportToExcel() {
    let data = [];

    // Coleta os dados do título da periodização, semana e dia
    let tituloPeriodizacao = document.querySelector('.titulo-da-periodizacao').value;
    let semana = document.querySelector('.semana').value;
    let dia = document.querySelector('.dia').value;
    data.push([tituloPeriodizacao]);
    data.push([semana]);
    data.push([dia]);

    // Coleta os dados do título do treino e observações gerais
    let tituloTreino = document.querySelector('.titulo-do-treino').value;
    let obsTreino = document.querySelector('.treino__obs').value;
    data.push([tituloTreino]);
    data.push([obsTreino]);

    // Coleta os dados de cada exercício
    let exercicios = document.querySelectorAll('.exercicio-n');
    exercicios.forEach((exercicio, index) => {
        let nomeExercicio = exercicio.querySelector('.exercicio__nome').value;
        let obsExercicio = exercicio.querySelector('.exercicio__obs').value;

        // Coleta e formata os dados do aquecimento
        let aquecimentoInputs = exercicio.querySelectorAll('.lista__aquecimento__input');
        let aquecimentoData = [];
        aquecimentoInputs.forEach((input, i) => {
            aquecimentoData.push(input.value);
        });

        // Coleta e formata os dados da segunda linha
        let segundaLinhaInputs = exercicio.querySelectorAll('.lista__segunda-linha__input');
        let segundaLinhaData = [];
        segundaLinhaInputs.forEach((input, i) => {
            segundaLinhaData.push(input.value);
        });

        // Adiciona os dados do exercício à matriz de dados
        data.push([nomeExercicio, obsExercicio, ...aquecimentoData, ...segundaLinhaData]);
        // data.push([]); // Adiciona uma linha em branco entre os exercícios
    });

    // Cria um novo workbook
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Dados");

    // Salva o workbook como um arquivo Excel
    XLSX.writeFile(wb, 'import_model.xlsx');
}





 // Script para importar do Excel
 function importFromExcel(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
        const data = new Uint8Array(reader.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assume the first sheet is the one we want to import
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Index to track the data position
        let dataIndex = 0;

        // Fill in the data
        document.querySelector('.titulo-da-periodizacao').value = sheetData[dataIndex++][0];
        document.querySelector('.semana').value = sheetData[dataIndex++][0];
        document.querySelector('.dia').value = sheetData[dataIndex++][0];
        document.querySelector('.titulo-do-treino').value = sheetData[dataIndex++][0];
        document.querySelector('.treino__obs').value = sheetData[dataIndex++][0];

        // Iterate over each exercise section
        const exercicios = document.querySelectorAll('.exercicio-n');
        exercicios.forEach((exercicio, index) => {
            if (dataIndex < sheetData.length) {
                const [nomeExercicio, obsExercicio, ...restData] = sheetData[dataIndex++];

                // Fill exercise name and observations
                exercicio.querySelector('.exercicio__nome').value = nomeExercicio || '';
                exercicio.querySelector('.exercicio__obs').value = obsExercicio || '';

                // Distribute restData between aquecimento and segunda linha inputs
                const aquecimentoInputs = exercicio.querySelectorAll('.lista__aquecimento__input');
                const segundaLinhaInputs = exercicio.querySelectorAll('.lista__segunda-linha__input');

                restData.slice(0, aquecimentoInputs.length).forEach((value, index) => {
                    aquecimentoInputs[index].value = value || '';
                });

                restData.slice(aquecimentoInputs.length).forEach((value, index) => {
                    segundaLinhaInputs[index].value = value || '';
                });
            }
        });
    };
    reader.readAsArrayBuffer(input.files[0]);
}


 // Script para exportar e importar arquivo .json
 function saveFormData() {
    const formData = {};

    // Capture o HTML completo da página
    formData['pageHTML'] = document.documentElement.outerHTML;

    // Capture estados dos checkboxes no divPrincipal-group
    document.querySelectorAll('.divPrincipal-group .checkbox-group').forEach(element => {
        formData[element.id] = {
            type: element.type,
            checked: element.checked
        };
    });

    // Transforme os dados em JSON e salve em um arquivo
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "formData.json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function loadFormData() {
    const input = document.getElementById('fileInput');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const formData = JSON.parse(event.target.result);

            // Carregue o HTML completo da página
            if (formData['pageHTML']) {
                document.documentElement.innerHTML = formData['pageHTML'];
            }

            // Preencha os inputs com os dados do JSON
            for (const key in formData) {
                if (key !== 'pageHTML' && formData.hasOwnProperty(key)) {
                    const elementData = formData[key];
                    const element = document.getElementById(key);

                    if (element) {
                        if (elementData.type === 'checkbox') {
                            element.checked = elementData.checked;
                        } else {
                            element.value = elementData.value;
                        }
                    } else {
                        // Se o elemento não existir, recrie-o
                        const tempSection = document.createElement('section');
                        tempSection.innerHTML = elementData.outerHTML;
                        document.body.appendChild(tempSection.firstChild);
                        const newElement = document.getElementById(key);
                        if (newElement) {
                            if (elementData.type === 'checkbox') {
                                newElement.checked = elementData.checked;
                            } else {
                                newElement.value = elementData.value;
                            }
                        }
                    }
                }
            }
        };
        reader.readAsText(file);
    }
}






// Script para esconder o input file "escolher arquivo" .json
    document.getElementById('fileInputButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});