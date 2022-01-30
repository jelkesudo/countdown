window.onload = () => {
	let root = document.documentElement;
	let question = document.getElementById("askIt");
	let regexQuestion = /\d/;
	let answer, member = 0;
	let colorsArray = ["#79fc68", "#68c6fc", "#fc6892", "#fcf568", "#fca368"];
	question.addEventListener("keyup", (event) => {
		if (event.keyCode === 13) {
			event.preventDefault();
			if(question.value == "0" || !question.value.match(regexQuestion)){
				question.value = "";
				question.setAttribute("placeholder", "number maybe?");
				setTimeout(resetPlaceholder, 2000);
			}
			else{
				answer = parseInt(question.value);
				question.style.display = "none";
				document.getElementById("ask").innerHTML = `<h1>${answer--}</h1>`;
				let countdown = setInterval(() => {
					if(answer == -1){
						clearInterval(countdown);
						document.getElementById("ask").innerHTML = "<h1>Done</h1>";
						setTimeout(() => {
							window.location.reload();
						}, 1000);
					}
					else{
						if(member == 5){
							member = 0;
							root.style.setProperty('--pozadina', `${colorsArray[member++]}`);
						}
						else{
							root.style.setProperty('--pozadina', `${colorsArray[member++]}`);
						}
						document.getElementById("ask").innerHTML = `<h1>${answer}</h1>`;
						answer--;
					}
				}, 1000);
			}
		}
	});

	function resetPlaceholder(){
		question.setAttribute("placeholder", "time?");
	}
}

