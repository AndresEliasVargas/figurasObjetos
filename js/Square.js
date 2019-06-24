'use strict';

class Square extends Figura {
	constructor (width, height, color, container) {
		super(width, height, color, container);
		this.div.style.width = this.width + 'px';
		this.div.style.height = this.height + 'px';
		this.div.style.backgroundColor = this.color;
		this.container.appendChild(this.div);
	}
}