let reset = document.querySelector('button');
let gridsize = document.querySelector('input');
let container = document.querySelector(".container");

// loads grid with 20x20 divs
window.addEventListener("load", createGrid(20));

// user enters choice of grid size
gridsize.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		container.innerHTML = "";
		createGrid(gridsize.value);
	}

});

// reloads the page
reset.addEventListener('click', function () {
	window.location.reload();
});

// Creates the grid
function createGrid(arg) {
	var divsPerSide = arg;
	var divNum = divsPerSide * divsPerSide;
	var divSize = 500/divsPerSide;

	for (var i = 0; i < divNum; i++) {
		var div = document.createElement("div");
        div.className = 'square';
        div.style.height = divSize + 'px';
        div.style.width = divSize + 'px';
    	div.addEventListener("mouseover", generateColor);

		container.appendChild(div);
	}
}

// generates random colors
function generateColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
	    color += letters[Math.round(Math.random() * 15)];
	}
	this.style.background = color;
}

