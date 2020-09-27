'use strict';

const PAGE_LIMIT = 5;
const data = [];

let setVH = function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();

window.addEventListener('resize', () => {
    setVH();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/worker.min.js', { scope: '/' }).then(() => { });
}