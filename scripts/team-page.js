document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        { id: 'organizers-container', data: teamData.team.organizers, startColor: 'purple' },
        { id: 'developers-container', data: teamData.team.developers, startColor: 'green' },
        { id: 'task-developers-container', data: teamData.team.taskDevelopers, startColor: 'purple' },
        { id: 'partners-container', data: teamData.team.partners, startColor: 'green' }
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