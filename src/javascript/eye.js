let eye = document.querySelector("#eye");

eye.addEventListener("click", () => {
	let inputpassword = document.querySelector("#password");
	if (inputpassword.getAttribute("type") == "password") {
		inputpassword.setAttribute("type", "text");
	} else {
		inputpassword.setAttribute("type", "password");
	}
});
