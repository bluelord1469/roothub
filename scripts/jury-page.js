document.addEventListener('DOMContentLoaded', () => {
    const juryRenderer = new TeamRenderer('jury-container', teamData.jury, 'purple');
    juryRenderer.render();
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            juryRenderer.render();
        }, 250);
    });
});