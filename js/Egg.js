'use strict';

class Egg extends Figura {
    constructor (width, height, color, container) {
        super(width, height, color, container);
        this.div.style.display = 'block';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.width + 54 + 'px';
        this.div.style.background = 'red';
        this.div.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
        this.container.appendChild(this.div);
    }
};