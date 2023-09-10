const slidingElements = document.querySelectorAll('.section-1');

function debounce(func, wait=20, imidiate=true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(!imidiate) func.apply(context, args);
        };

        var callNow =  imidiate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

function checkSlide() {

    slidingElements.forEach(item => {
            let rect = item.getBoundingClientRect();
            let elemTop = rect.top;
            let elemBottom = rect.bottom;
        
            // Only completely visible elements return true:
            let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            // Partially visible elements return true:
            if(isVisible) {
                item.classList.add('active');
            }else{
                item.classList.remove('active'); 
            }
    })
}

window.addEventListener('scroll', debounce(checkSlide))