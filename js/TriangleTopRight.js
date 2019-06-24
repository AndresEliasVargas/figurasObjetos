'use strict';

class TriangleTopRight extends Figura {
    constructor (width, height, color, container) {
        super(width, height, color, container);
        this.div.style.width = '0px';
        this.div.style.height = '0px';
        
        this.div.style.borderTop = this.width + 'px';
        this.div.style.borderTopStyle = 'solid';
        this.div.style.borderTopColor = this.color;

        this.div.style.borderLeft = this.width + 'px';
        this.div.style.borderLeftStyle = 'solid';
        this.div.style.borderLeftColor = 'transparent';

        this.container.appendChild(this.div);
    }
};