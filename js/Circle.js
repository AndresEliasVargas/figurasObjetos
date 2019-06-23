'use strict';

class Circle extends Figura {
    constructor(pnWidth, pnHeight, psColor, pContainer) {
        super(pnWidth, pnHeight, psColor, pContainer);
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.backgroundColor = this.color;
        this.div.style.borderRadius = '100%';
        this.container.appendChild(this.div);
    }
}