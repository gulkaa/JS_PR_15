'use strict';

let interval;
const colorBlock = document.getElementById('colorBlock');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('startButton').onclick = () => {
    interval = setInterval(() => {
        colorBlock.style.backgroundColor = getRandomColor();
    }, 500);
};

document.getElementById('stopButton').onclick = () => {
    clearInterval(interval);
};