'use strict';

class TriangleRight extends Figura {
    constructor (width, height, color, container) {
        super(width, height, color, container);

        this.div.style.width = '0px';
        this.div.style.height = '0px';
        
        this.div.style.borderLeft = this.width + 'px';
		this.div.style.borderLeftStyle = 'solid';
		this.div.style.borderLeftColor = this.color;

		this.div.style.borderBottom = this.width / 2 + 'px';
		this.div.style.borderBottomStyle = 'solid';
		this.div.style.borderBottomColor = 'transparent';

		this.div.style.borderTop = this.width / 2 + 'px';
		this.div.style.borderTopStyle = 'solid';
		this.div.style.borderTopColor = 'transparent';

		this.container.appendChild(this.div);
    }
};