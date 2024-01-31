'use strict'
const fulImg = document.querySelector('.full-img')
const bigImg = document.querySelector('.big-img')
const imgGallery = document.querySelectorAll('.img-gallery>img')
const box = document.querySelector('#btn')

box.addEventListener('click', () => {
    fulImg.style.display = 'none'
})

imgGallery.forEach((img) => {
    img.addEventListener('click', () => {
        bigImg.src = img.src;
        fulImg.style.display = 'flex';
    });
})