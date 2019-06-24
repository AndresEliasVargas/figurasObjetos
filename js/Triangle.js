'use strict';

class Triangle extends Figura {
	constructor(width, height, pcolor, container) {
		super(width, height, pcolor, container);

		this.div.style.width = '0px';
		this.div.style.height = '0px';
		this.div.style.borderLeft = this.height / 2 + 'px';
		this.div.style.borderLeftStyle = 'solid';
		this.div.style.borderLeftColor = 'transparent';

		this.div.style.borderRight = this.height / 2 + 'px';
		this.div.style.borderRightStyle = 'solid';
		this.div.style.borderRightColor = 'transparent';

		this.div.style.borderBottom = this.width + 'px';
		this.div.style.borderBottomStyle = 'solid';
		this.div.style.borderBottomColor = this.color;

		this.container.appendChild(this.div);
	}
}