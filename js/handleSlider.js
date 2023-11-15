function debug(element) {
    console.log(element);
}

function isNull(element) {
    return element == undefined;
}

let items = document.querySelectorAll('.slider-item');
let prevBtn = document.querySelector('button.prev');
let nextBtn = document.querySelector('button.next');
const prevAnimation = "prev-animation";
const nextAnimation = "next-animation";
const prevAnimationNone = "prev-animation-none";
const nextAnimationNone = "next-animation-none";

function findCurrentItem() {
    for(let i = 0; i < items.length; i++) {
        let item = items[i];
        if(item.style.display != 'none') {
            return i;
        }
    }
    return undefined;
}

function handleIndex({index, del}) {
    index = Number(index) + del;
    if(index >= 0 && index < items.length) {
        return index;
    }
    if(index == -1) {
        return items.length - 1;
    }
    if(index == items.length) {
        return 0;
    }
}

function removeClass(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

function handleSlider(del) {
    debug({del});
    let index = findCurrentItem();
    let curItem = items[index];
    removeClass(curItem, prevAnimation);
    removeClass(curItem, nextAnimation);
    removeClass(curItem, prevAnimationNone);
    removeClass(curItem, nextAnimationNone);
    let nextIndex = handleIndex({index, del});
    let nextItem = items[nextIndex];
    nextItem.classList.add((del == -1 ? prevAnimation : nextAnimation));
    curItem.style.display = "none";
    nextItem.style.display = "block";
}   

prevBtn.addEventListener('click', (event) => {
    handleSlider(-1);
});
nextBtn.addEventListener('click', (event) => {
    handleSlider(1);
});