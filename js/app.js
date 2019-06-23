'use strict';

const inputWidth = document.querySelector('#widthTxt');
const inputHeight = document.querySelector('#heightTxt');
const sColor = document.querySelector('#sColor');
const sFigura = document.querySelector('#sFigura');
const btnCreate = document.querySelector('#btnCreate');
const elementContainer = document.querySelector('#container');

const bCreate = () => {
    let nWidth = Number(inputWidth);
    let nHeight = Number(inputHeight);
    let color = sColor.value;
    let figura = sFigura.value;

    switch(figura){
        case 'square':
            let square = new Square(nWidth, nHeight, color, elementContainer);
        break;
        case 'circle':
            let circle = new Cricle(nWidth, nHeight, color, elementContainer);
        break;
        case 'triangle': 
            let triangle = new Triangle(nWidth, nHeight, color, elementContainer);
        break;
        default:
        break;
    }
}

btnCreate.addEventListener('click', bCreate);