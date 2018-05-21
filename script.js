window.addEventListener("load", createGrid);



function createGrid() {
	var divsPerSide = 20;
	var divNum = divsPerSide * divsPerSide;
	var divSize = 500/divsPerSide;

	for (var i = 0; i < divNum; i++) {
		var div = document.createElement("div");
        div.className = 'square';
        div.style.height = divSize + 'px';
        div.style.width = divSize + 'px';
    	div.addEventListener("mouseover", black);


        document.querySelector(".container").appendChild(div);
	}
}

function generateColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
	    color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

function black () {
	this.style.cursor = 'pointer';
	this.style.background = 'black';
}

