document.addEventListener('DOMContentLoaded', (event) => {
    const configurarArrastarParaDeletar = (elemento) => {
        let toqueInicioX = 0;
        let toqueFimX = 0;
        let cliqueInicioY = 0;
        let cliqueFimY = 0;
        let arrastando = false;

        const tratarArrastar = () => {
            if (toqueFimX < toqueInicioX && !arrastando) {
                elemento.remove();
            }
        };

        // Eventos para dispositivos móveis
        elemento.addEventListener('touchstart', (e) => {
            toqueInicioX = e.changedTouches[0].screenX;
            cliqueInicioY = e.changedTouches[0].screenY;
            arrastando = false;
        });

        elemento.addEventListener('touchmove', (e) => {
            let movimentoX = e.changedTouches[0].screenX;
            let movimentoY = e.changedTouches[0].screenY;
            if (Math.abs(movimentoX - toqueInicioX) < Math.abs(movimentoY - cliqueInicioY)) {
                arrastando = true;
            }
        });

        elemento.addEventListener('touchend', (e) => {
            toqueFimX = e.changedTouches[0].screenX;
            tratarArrastar();
        });

        // Eventos para dispositivos desktop
        elemento.addEventListener('mousedown', (e) => {
            toqueInicioX = e.screenX;
            cliqueInicioY = e.screenY;
            arrastando = false;
        });

        elemento.addEventListener('mousemove', (e) => {
            let movimentoX = e.screenX;
            let movimentoY = e.screenY;
            if (Math.abs(movimentoX - toqueInicioX) < Math.abs(movimentoY - cliqueInicioY)) {
                arrastando = true;
            }
        });

        elemento.addEventListener('mouseup', (e) => {
            toqueFimX = e.screenX;
            tratarArrastar();
        });
    };

    document.querySelectorAll('.lista__aquecimento, .lista__segunda-linha').forEach(configurarArrastarParaDeletar);

    const observador = new MutationObserver((mutacoes) => {
        mutacoes.forEach((mutacao) => {
            mutacao.addedNodes.forEach((nodo) => {
                if (nodo.classList && (nodo.classList.contains('lista__aquecimento') || nodo.classList.contains('lista__segunda-linha'))) {
                    configurarArrastarParaDeletar(nodo);
                }
            });
        });
    });

    observador.observe(document.body, { childList: true, subtree: true });
});