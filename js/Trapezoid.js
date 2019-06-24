'use strict';

class Trapezoid extends Figura {
	constructor(width, height,color, container) {
        super(width, height , color, container);

        this.div.style.width = this.width + 'px';
        this.div.style.height = '0px';
        
        this.div.style.borderBottom = this.width + 'px';
        this.div.style.borderBottomStyle = 'solid';
        this.div.style.borderBottomColor = this.color;

        this.div.style.borderLeft = this.height / 4 + 'px';
        this.div.style.borderLeftStyle = 'solid';
        this.div.style.borderLeftColor = 'transparent';

        this.div.style.borderRight = this.height / 4 + 'px';
        this.div.style.borderRightStyle = 'solid';
        this.div.style.borderRightColor = 'transparent';

		this.container.appendChild(this.div);
	}
}