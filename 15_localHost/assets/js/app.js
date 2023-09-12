const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');

const clearAll = document.querySelector('#clear');
const checkAll = document.querySelector('#check-all');
const uncheckkAll = document.querySelector('#uncheck-all');

let items = JSON.parse(localStorage.getItem('items')) || [];

addItems.addEventListener('submit', (e) => {
    e.preventDefault();

    const item = {
        text: document.querySelector('#input-text').value,
        done: false
    };
    items.push(item);
    document.querySelector('#input-text').value = '';

    localStorage.setItem('items', JSON.stringify(items))

    
    populateList(items, itemList);
    
});

const populateList = (items = [], itemList) => {
    let newList = items.map((elem, index) => {
        return `
        <li>
            <input type="checkbox" data-index=${index} id="item${index}" ${elem.done ? 'checked' : ''}>
            <label for="item${index}">${elem.text}</label>
        </li>`
    }).join('');

    itemList.innerHTML = newList;
};

populateList(items, itemList);

itemList.addEventListener('click', (e) => {
    
    if(!e.target.matches('input')) {
        return;
    };
    const elemIndex = e.target.dataset.index;
    items[elemIndex].done = !items[elemIndex].done;

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList);

});

clearAll.addEventListener('click', () => {
    items = [];
    localStorage.removeItem('items');
    populateList(items, itemList);
});

checkAll.addEventListener('click', () => {
    
    items.map(elem => {
        elem.done = true;
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList);
});

uncheckkAll.addEventListener('click', () => {
    items.map(elem => {
        elem.done = false;
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList);
})

