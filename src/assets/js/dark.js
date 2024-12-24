//
//    The Dark Mode System
//

// helper functions to toggle dark mode
function enableDarkMode() {
	document.body.classList.add("theme--dark");
	document.body.classList.remove("theme--default");
	localStorage.setItem("theme", "dark");
	document.querySelector(
		"#ps__toggle--dark input[type='checkbox']"
	).checked = true;
}
function disableDarkMode() {
	document.body.classList.remove("theme--dark");
	document.body.classList.add("theme--default");
	localStorage.setItem("theme", "light");
	document.querySelector(
		"#ps__toggle--dark input[type='checkbox']"
	).checked = false;
}

// determines a new users dark mode preferences
function detectColorScheme() {
	const isDarkModePreferred = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const storedTheme = localStorage.getItem("theme");

	if (isDarkModePreferred) {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
}

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", detectColorScheme);
// run on page load
detectColorScheme();

document
	.querySelector("#ps__toggle--dark input[type='checkbox']")
	.addEventListener("change", (event) => {
		// On switch change, update the dark mode based on the switch state
		event.target.checked ? enableDarkMode() : disableDarkMode();
	});

// add an event listener for the dark mode toggle on enter key press
document.querySelector("#ps__toggle--dark").addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		const checkbox = e.target.querySelector("input[type='checkbox']");
		if (checkbox.checked) {
			disableDarkMode();
		} else {
			enableDarkMode();
		}
	}
});
