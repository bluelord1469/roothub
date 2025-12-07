document.querySelectorAll('.fact-title').forEach(div => {
    div.addEventListener('click', () => {
        const content = div.nextElementSibling;
        content.classList.toggle('fact-opened');
        div.classList.toggle('active-fact');
    });
});