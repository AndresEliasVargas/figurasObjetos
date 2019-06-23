'use strict';

class Figura {
    constructor(pnWidth, pnHeight, psColor, pContainer) {
        this.width = pnWidth;
        this.height = pnHeight;
        this.color = psColor;
        this.container = pContainer;
        this.div = document.createElement('div');
    }
}