document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        { id: 'task-developers-container', data: teamData.community.taskDevelopers, startColor: 'purple' },
        { id: 'media-group-container', data: teamData.community.mediaGroup, startColor: 'green' }
    ];
    
    const renderers = [];
    sections.forEach(section => {
        const container = document.getElementById(section.id);
        if (container) {
            const renderer = new TeamRenderer(section.id, section.data, section.startColor);
            renderer.render();
            renderers.push(renderer);
        }
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            renderers.forEach(renderer => renderer.render());
        }, 250);
    });
});