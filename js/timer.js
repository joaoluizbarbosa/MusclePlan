 // Script com funções do timer
 let timerInterval;
 let totalTime;
 let remainingTime;
 let timerDisplay = document.getElementById('timer-1');
 let timerContainer = document.getElementById('timer-container-1');
 let startPauseButton = document.getElementById('start-pause-button');

 let isTimerRunning = false;

 function toggleTimer(sectionId) {
     let timerElement = document.getElementById('timer-1');
     let timerContainer = document.getElementById('timer-container-1');
     let escClockButton = document.getElementById('esc-clock-button-1'); // Obter o botão de fechar

     // Garantir que os elementos existam
     if (!timerElement || !timerContainer || !escClockButton) {
         console.error('Timer elements not found');
         return;
     }

     // Inicializar o estilo do display se necessário
     if (timerContainer.style.display === '') {
         timerContainer.style.display = 'none';
     }

     if (timerContainer.style.display === 'none') {
         timerContainer.style.display = 'block';
         timerElement.style.display = 'block';
         escClockButton.style.display = 'block'; // Mostrar o botão de fechar
     } else {
         timerContainer.style.display = 'none';
         timerElement.style.display = 'none';
         escClockButton.style.display = 'none'; // Esconder o botão de fechar
     }
 }

 function startPauseTimer() {
     if (!isTimerRunning) {
         let minutesInput = document.getElementById('minutes-dropdown').value;
         let secondsInput = document.getElementById('seconds-dropdown').value;

         // Calcula o tempo total em segundos
         totalTime = parseInt(minutesInput) * 60 + parseInt(secondsInput);
         if (isNaN(totalTime) || totalTime <= 0) {
             alert("Por favor, insira um valor válido para o temporizador.");
             return;
         }

         remainingTime = remainingTime || totalTime; // Se não houver tempo restante, use o tempo total
         // Inicia o timer
         timerInterval = setInterval(updateTimer, 1000);
         startPauseButton.textContent = 'Pause';
     } else {
         clearInterval(timerInterval);
         startPauseButton.textContent = 'Start';
     }
     isTimerRunning = !isTimerRunning;
 }

 function resetTimer() {
     clearInterval(timerInterval);
     timerDisplay.textContent = '00:00';
     timerContainer.style.display = 'block'; // Exibe o timer-container
     isTimerRunning = false;
     startPauseButton.textContent = 'Start';
     remainingTime = 0; // Reinicia o tempo restante
 }

 function playSound() {
     // Crie um contexto de áudio
     const audioContext = new AudioContext();

     // Função para tocar um bip
     function beep() {
         const oscillator = audioContext.createOscillator();
         oscillator.type = "sine";
         oscillator.connect(audioContext.destination);
         oscillator.start();

         // Defina o tempo de duração do som (em milissegundos)
         const duration = 100; // 0.5 segundos

         // Pare o oscilador após a duração especificada
         setTimeout(() => {
             oscillator.stop();
         }, duration);
     }

     // Toque três bips com intervalos de 500ms entre eles
     beep();
     setTimeout(beep, 500);
     setTimeout(beep, 1000);
     setTimeout(beep, 1500);
 }


 function updateTimer() {
     let minutes = Math.floor(remainingTime / 60);
     let seconds = remainingTime % 60;

     timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

     if (remainingTime <= 0) {
         clearInterval(timerInterval);
         playSound(); // Emite um sinal sonoro
         // alert("Tempo esgotado!");
         timerDisplay.textContent = '00:00';
         timerDisplay.style.display = 'block'; // Esconde o timer 'none'
         timerContainer.style.display = 'block'; // Esconde o timer-container 'none'
         startPauseButton.textContent = 'Start'; // Redefine o botão para 'Start'
         isTimerRunning = false; // Redefine o estado do cronômetro
     } else {
         remainingTime--;
     }
 }

 function formatTime(time) {
     return time < 10 ? "0" + time : time;
 }