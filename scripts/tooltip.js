document.addEventListener('DOMContentLoaded', function() {
    const tooltipData = {
        'Front.png': 'FRONTEND - Разработка интерфейса',
        'Back.png': 'BACKEND - Серверная часть',
        'Boss.png': 'TEAM LEAD - Руководитель команды',
        'design_ach.svg': 'ДИЗАЙН - Графический дизайн',
        'legend_ach.svg': 'ЛЕГЕНДА - Опытный специалист',
        'maskot_ach.svg': 'МАСКОТ - Душа команды'
    };
    
    const achievementsBlocks = document.querySelectorAll('.achievements-purple, .achievements-green');
    
    achievementsBlocks.forEach(block => {
        const images = block.querySelectorAll('img');
        
        images.forEach(img => {
            const src = img.getAttribute('src');
            const filename = src.split('/').pop();
            
            const tooltipText = tooltipData[filename] || 'АЧИВКА';

            const tooltip = document.createElement('div');
            tooltip.textContent = tooltipText;
            tooltip.style.position = 'absolute';
            tooltip.style.left = '50%';
            tooltip.style.top = '-45px';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.backgroundColor = 'rgba(3, 15, 15, 0.4)';
            tooltip.style.padding = '8px 12px';
            tooltip.style.fontSize = '11px';
            tooltip.style.whiteSpace = 'nowrap';
            tooltip.style.zIndex = '1000';
            tooltip.style.visibility = 'hidden';
            tooltip.style.transition = 'opacity 0.2s ease, visibility 0.2s';
            tooltip.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
            tooltip.style.backdropFilter = 'blur(4px)';
            
            if (block.classList.contains('achievements-purple')) {
                tooltip.style.border = '3px solid #ac8ef6';
                tooltip.style.boxShadow = '0 0 7px #6e3ce9, 0 4px 12px rgba(0, 0, 0, 0.3)';
                tooltip.style.textShadow = '0 0 3px #6e3ce9';
            } else if (block.classList.contains('achievements-green')) {
                tooltip.style.border = '3px solid #0dbe3e';
                tooltip.style.boxShadow = '0 0 7px #009945, 0 4px 12px rgba(0, 0, 0, 0.3)';
                tooltip.style.textShadow = '0 0 3px #009945';
            }
            
            block.style.position = 'relative';
            block.appendChild(tooltip);
            
            const wrapper = document.createElement('div');
            wrapper.style.display = 'inline-block';
            wrapper.style.position = 'relative';
            
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            
            wrapper.addEventListener('mouseenter', function(e) {
                const rect = wrapper.getBoundingClientRect();
                const blockRect = block.getBoundingClientRect();

                tooltip.style.left = `${rect.left - blockRect.left + rect.width / 2}px`;
                tooltip.style.top = `${rect.top - blockRect.top - 45}px`;
                tooltip.style.transform = 'translateX(-50%)';
                
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            });
            
            wrapper.addEventListener('mouseleave', function() {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            });
        });
    });
    
    function adaptForMobile() {
        const isMobile = window.innerWidth <= 768;
        const tooltips = document.querySelectorAll('div[style*="position: absolute"]');
        
        tooltips.forEach(tooltip => {
            if (isMobile) {
                tooltip.style.fontSize = '8px';
                tooltip.style.padding = '6px 10px';
                tooltip.style.top = (parseFloat(tooltip.style.top) || -45) + 5 + 'px';
                tooltip.style.backgroundColor = 'rgba(3, 15, 15, 0.9)';
            } else {
                tooltip.style.fontSize = '11px';
                tooltip.style.padding = '8px 12px';
                tooltip.style.backgroundColor = 'rgba(3, 15, 15, 0.8)';
            }
        });
    }
    
    adaptForMobile();
    window.addEventListener('resize', adaptForMobile);
});