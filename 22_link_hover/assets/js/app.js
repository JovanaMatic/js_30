const getA = document.querySelectorAll('a');

const createSpan = document.createElement('span');
createSpan.classList.add('highlight');
document.body.appendChild(createSpan)


Array.from(getA).map(item => {
    item.addEventListener('mouseenter', (e) => {
        let position = item.getBoundingClientRect();
        
        createSpan.style.transform = `translate(${position.left + window.scrollX}px, ${position.top + window.scrollY}px)`
        createSpan.style.width = `${position.width}px`;
        createSpan.style.height = `${position.height}px`;

    });

});