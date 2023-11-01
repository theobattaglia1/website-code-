var divs = document.querySelectorAll("div");

divs.forEach(function (elm) {
	elm.addEventListener("click", function () {
		var panel = document.querySelector(".highlight");
		if (panel) {
			panel.classList.remove("highlight");
		}
		elm.classList.add("highlight");
	});
});

window.addEventListener("keyup", function (e) {
	var panel = document.querySelector(".highlight");
	if (
		(e.keyCode == 37 || e.keyCode == 38) &&
		panel != document.querySelectorAll("div")[0]
	) {
		panel.previousElementSibling.classList.add("highlight");
		panel.classList.remove("highlight");
	}
	if (
		(e.keyCode == 39 || e.keyCode == 40) &&
		panel != document.querySelectorAll("div")[divs.length - 1]
	) {
		panel.nextElementSibling.classList.add("highlight");
		panel.classList.remove("highlight");
	}
});

window.focus();