const getBacDiv = document.querySelector('.dropBac');
const getLinks = document.querySelectorAll('li');
const getNav = document.querySelector('nav');

Array.from(getLinks).forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        console.log(e)
        e.target.classList.add('trigger-enter');

        // triger opacity animation after 300ms
        setTimeout(() => {
            
            // added if statement to only add trigger-enter-active / animation part if we triggered dropdown
            // so that we can mitigate strange behaviour if we quickly go through dropdowns
            // it will show dropdown background before the content and vice versa
            if(e.target.classList.contains('trigger-enter')) {
                e.target.classList.add('trigger-enter-active')
            }
            // alternative sintacs - make it oneliner with && / if left is true it will run elseit will ignore everything
            //e.target.classList.contains('trigger-enter') && e.target.classList.add('trigger-enter-active')

        }, 300);

        getBacDiv.classList.add('open');

        // get the dropdowns here in order to get each time the specific one (tie it to the e.target or item)
        const getDropdown = item.querySelector('.dropdown-content');
        console.log(getDropdown);
        
        // dropdown position is relative to the page so it will not take into account if we for example add element
        // so we need to calculate position of a nav as well / this is also handled in jquery with .offset
        let position = getDropdown.getBoundingClientRect();

        let navPosition = getNav.getBoundingClientRect();

        getBacDiv.style.width = `${position.width}px`;
        getBacDiv.style.height = `${position.height}px`;
        getBacDiv.style.transform = `translate(${position.left - navPosition.left}px, ${position.top - navPosition.top}px )`;
    });
});

Array.from(getLinks).forEach(item => {
    item.addEventListener('mouseleave', (e) => {
        // we can remove all classes at once
        e.target.classList.remove('trigger-enter', 'trigger-enter-active');

        getBacDiv.classList.remove('open');
    });
});
