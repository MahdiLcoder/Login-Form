const label = document.querySelectorAll(".form-controll label");
label.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`
		)
		.join(""); 
})