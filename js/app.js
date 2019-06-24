'use strict';

const inputWidth = document.querySelector('#widthTxt');
const inputHeight = document.querySelector('#heightTxt');
const sColor = document.querySelector('#sColor');
const sFigura = document.querySelector('#sFigura');
const btnCreate = document.querySelector('#btnCreate');
const elementContainer = document.querySelector('#container');

const bCreate = () => {
    let width = Number(inputWidth.value);
    let height = Number(inputHeight.value);
    let color = sColor.value;
    let figura = sFigura.value;

    switch (figura) {
        case 'square':
            let square = new Square(width, height, color, elementContainer);
            break;
        case 'circle':
            let circle = new Circle(width, height, color, elementContainer);
            break;
        case 'triangle':
            let triangle = new Triangle(width, height, color, elementContainer);
            break;
        default:
            break;
    }
}

btnCreate.addEventListener('click', bCreate);