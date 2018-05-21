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
        document.querySelector(".container").appendChild(div);
	}
}
