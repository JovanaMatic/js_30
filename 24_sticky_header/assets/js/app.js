const getUl = document.querySelector('ul');
const firstList = document.querySelector('li');
const getAlllist = document.querySelectorAll('li')
let headerSty = getUl.offsetTop;
const getConatiner = document.querySelector('.container');

window.onscroll = () => {
    if(window.pageYOffset > headerSty) {
        getUl.classList.add('sticky');
        firstList.style.transform = `translateX(0px)`;
        // adding element hight to body in order to avoid jumping an element when scrolling
        // when we add position fix to an element DOM will ingore that element and then rest of the elemets
        // will us the remaining space (like container in our case)
        document.querySelector('body').style.paddingTop = `${document.querySelector('ul').offsetHeight}px`;
    }else{
        getUl.classList.remove('sticky');
        firstList.style.transform = `translateX(-150px)`;
        document.querySelector('body').style.paddingTop = `0px`;
    }
}