'use strict';

class Figura {
	constructor(pwidth, pheight, pcolor, pcontainer) {
		this.width = pwidth;
		this.height = pheight;
		this.color = pcolor;
		this.container = pcontainer;
		this.div = document.createElement('div');
		this.div.onmouseover = this.onMouseOver.bind(this);
		this.div.onmouseout = this.onMouseOut.bind(this);
	}

	onMouseOver() {
		this.div.style.backgroundColor = 'pink';
	}

	onMouseOut() {
		this.div.style.backgroundColor = this.color;
	}
}