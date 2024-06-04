document.addEventListener('DOMContentLoaded', (event) => {
    const setupSwipeToDelete = (element) => {
        let touchstartX = 0;
        let touchendX = 0;

        const handleSwipe = () => {
            if (touchendX < touchstartX) {
                element.remove();
            }
        };

        element.addEventListener('touchstart', (e) => {
            touchstartX = e.changedTouches[0].screenX;
        });

        element.addEventListener('touchend', (e) => {
            touchendX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        element.addEventListener('mousedown', (e) => {
            touchstartX = e.screenX;
        });

        element.addEventListener('mouseup', (e) => {
            touchendX = e.screenX;
            handleSwipe();
        });
    };

    document.querySelectorAll('.lista__aquecimento, .lista__segunda-linha').forEach(setupSwipeToDelete);

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.classList && (node.classList.contains('lista__aquecimento') || node.classList.contains('lista__segunda-linha'))) {
                    setupSwipeToDelete(node);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
