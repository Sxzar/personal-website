function reveal() {
	var sections = document.querySelectorAll("section");

	sections.forEach(function (section) {
		var reveals = section.querySelectorAll(".reveal");

		reveals.forEach(function (reveal, index) {
			var windowHeight = window.innerHeight;
			var elementTop = reveal.getBoundingClientRect().top;
			var elementVisible = 20;
			var delay = index * 0.2; // Incremental delay for each reveal within the section

			if (elementTop < windowHeight - elementVisible) {
				setTimeout(function () {
					reveal.classList.add("active");
				}, delay * 1000); // Convert delay to milliseconds
			} else {
				reveal.classList.remove("active");
			}
		});
	});
}

window.addEventListener("scroll", reveal);

// To check the scroll position on the page load
reveal();
