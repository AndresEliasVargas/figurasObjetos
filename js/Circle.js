'use strict';

class Circle extends Figura {
	constructor(pwidth, pheight, pcolor, pcontainer) {
		super(pwidth, pheight, pcolor, pcontainer);
		this.div.style.width = this.width + 'px';
		this.div.style.height = this.height + 'px';
		this.div.style.backgroundColor = this.color;
		this.div.style.borderRadius = '100%';
		this.container.appendChild(this.div);
	}
}