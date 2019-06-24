'use strict';

const inputWidth = document.querySelector('#widthTxt');
const inputHeight = document.querySelector('#heightTxt');
const sColor = document.querySelector('#sColor');
const sFigura = document.querySelector('#sFigura');
const btnCreate = document.querySelector('#btnCreate');
const elementContainer = document.querySelector('#container');
const elementChild = elementContainer.getElementsByTagName('div');

const limpiarPantalla = () => {
    Array.from(elementChild).map(item => elementContainer.removeChild(item));
};

const bCreate = () => {
    limpiarPantalla();

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
        case 'trapezoid': 
            let trapezoid = new Trapezoid(width, height, color, elementContainer);
            break;
        case 'parallelogram':
            let parallelogram = new Parallelogram(width, height, color, elementContainer);
            break;
        case 'triangleBottomRight':
            let triangleBottomRight = new TriangleBottomRight(width, height, color, elementContainer);
            break;
        case 'triangleTopRight':
            let triangleTopRight = new TriangleTopRight(width, height, color, elementContainer);
            break;
        case 'triangleRight':
            let triangleRight = new TriangleRight(width, height, color, elementContainer);
            break;
        case 'egg':
            let egg = new Egg(width, height, color, elementContainer);
            break;
        case 'pacMan':
            let pacMan = new PacMan(width, height, color, elementContainer);
            break;
        default:
            console.log('error');
            break;
    }
}

btnCreate.addEventListener('click', bCreate);