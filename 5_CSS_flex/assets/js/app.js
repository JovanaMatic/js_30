let panels = document.querySelectorAll('.panel');


Array.from(panels).forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

Array.from(panels).forEach(item => {
    item.addEventListener('transitionend', () => {
            item.classList.toggle('transit');        
    });
});