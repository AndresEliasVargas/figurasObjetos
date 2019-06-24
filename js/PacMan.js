'use strict';

class PacMan extends Figura {
    constructor (width, height, color, container) {
        super(width, height, color, container);
        this.div.style.width = '0px';
        this.div.style.height = '0px';

        this.div.style.borderRight = this.width + 'px';
        this.div.style.borderRightStyle = 'solid';
        this.div.style.borderRightColor = 'transparent';

        this.div.style.borderTop = this.width + 'px';
        this.div.style.borderTopStyle = 'solid';
        this.div.style.borderTopColor = this.color;

        this.div.style.borderLeft = this.width + 'px';
        this.div.style.borderLeftStyle = 'solid';
        this.div.style.borderLeftColor = this.color;

        this.div.style.borderBottom = this.width + 'px';
        this.div.style.borderBottomStyle = 'solid';
        this.div.style.borderBottomColor = this.color;
        
        this.div.style.borderTopLeftRadius = this.width + 'px';
        this.div.style.borderTopRightRadius = this.width + 'px';
        this.div.style.borderBottomLeftRadius = this.width + 'px';
        this.div.style.borderBottomRightRadius = this.width + 'px';

        this.container.appendChild(this.div);
    }
};