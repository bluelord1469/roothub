document.querySelectorAll('.helper').forEach(helper => {
    helper.addEventListener('click', () => {
        document.querySelectorAll('.helper').forEach(h => {
            h.classList.remove('active-tab');
        });
        
        helper.classList.add('active-tab');
        document.querySelector('#help').classList.remove('ron-mode');

        const spans = document.querySelectorAll('.helper-content span');

        if (helper.getAttribute('id') === 'ron') {
            spans[0].textContent = 'РОН';
            spans[1].textContent = 'Ворон-робот';
            spans[2].textContent = '15';
            spans[3].textContent = '20';
            
            document.querySelector('#help').classList.add('ron-mode');
            document.querySelector('#helper-info img').src = '../images/ron.png';
            document.querySelector('#helper-info p').textContent = 'Ты patched? Или просто ещё не exploited?';
        } 
        else {
            spans[0].textContent = 'С.Е.Р.Ч';
            spans[1].textContent = 'Робот';
            spans[2].textContent = '20';
            spans[3].textContent = '30';
            
            document.querySelector('#help').classList.remove('ron-mode');
            document.querySelector('#helper-info img').src = '../images/search.png';
            document.querySelector('#helper-info p').textContent = 'Запомни: байт - это байт, а бит - это не байт.';
        }
    });
});