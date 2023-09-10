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

const images = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    console.log(e);
    images.forEach(item => {
        const beginSlide = (window.scrollY + window.innerHeight) - item.height / 2;
        const imgBottom = item.offsetTop + item.height;

        if(beginSlide > item.offsetTop && window.scrollY < imgBottom) {
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide))