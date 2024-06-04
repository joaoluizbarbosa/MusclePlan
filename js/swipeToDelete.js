document.addEventListener('DOMContentLoaded', (event) => {
    const configurarArrastarParaDeletar = (elemento) => {
        let toqueInicioX = 0;
        let toqueFimX = 0;
        let toqueInicioY = 0;
        let toqueFimY = 0;
        let arrastando = false;

        const tratarArrastar = () => {
            const distanciaX = Math.abs(toqueFimX - toqueInicioX);
            const distanciaY = Math.abs(toqueFimY - toqueInicioY);

            if (distanciaX > distanciaY && toqueFimX < toqueInicioX && !arrastando) {
                elemento.remove();
            }
        };

        // Eventos para dispositivos móveis
        elemento.addEventListener('touchstart', (e) => {
            toqueInicioX = e.changedTouches[0].screenX;
            toqueInicioY = e.changedTouches[0].screenY;
            arrastando = false;
        });

        elemento.addEventListener('touchmove', (e) => {
            const movimentoX = e.changedTouches[0].screenX;
            const movimentoY = e.changedTouches[0].screenY;
            const distanciaX = Math.abs(movimentoX - toqueInicioX);
            const distanciaY = Math.abs(movimentoY - toqueInicioY);

            if (distanciaY > distanciaX) {
                arrastando = true;
            }
        });

        elemento.addEventListener('touchend', (e) => {
            toqueFimX = e.changedTouches[0].screenX;
            toqueFimY = e.changedTouches[0].screenY;
            tratarArrastar();
        });

        // Eventos para dispositivos desktop
        elemento.addEventListener('mousedown', (e) => {
            toqueInicioX = e.screenX;
            toqueInicioY = e.screenY;
            arrastando = false;
        });

        elemento.addEventListener('mousemove', (e) => {
            const movimentoX = e.screenX;
            const movimentoY = e.screenY;
            const distanciaX = Math.abs(movimentoX - toqueInicioX);
            const distanciaY = Math.abs(movimentoY - toqueInicioY);

            if (distanciaY > distanciaX) {
                arrastando = true;
            }
        });

        elemento.addEventListener('mouseup', (e) => {
            toqueFimX = e.screenX;
            toqueFimY = e.screenY;
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
