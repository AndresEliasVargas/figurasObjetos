'use strict';

class Square extends Figura {
	constructor(pwidth, pheight, pcolor, pcontainer) {
		super(pwidth, pheight, pcolor, pcontainer);
		this.div.style.width = this.width + 'px';
		this.div.style.height = this.height + 'px';
		this.div.style.backgroundColor = this.color;
		this.container.appendChild(this.div);
	}
}