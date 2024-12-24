const toggle = document.querySelector(".ps__nav--toggle");
const navBox = document.querySelector(".ps__nav--box");
const navBody = document.getElementById("ps__nav--body");

toggle.addEventListener("click", () => {
	navBox.classList.toggle("ps__nav--box--active");
	navBody.classList.toggle("ps__nav--body--active");
});

const dropdownElements = document.querySelectorAll(".ps__nav--dropdown");
const dropdownList = document.querySelectorAll(".ps__nav--li-child");

dropdownElements.forEach((dropdownElement, index) => {
	let dropdownLink = dropdownElement.querySelector("a");
	// Get the hight of li elements in the dropdown
	let dropdownListHeight = dropdownList[index].scrollHeight;
	dropdownLink.addEventListener("click", () => {
		dropdownList[index].classList.toggle("ps__nav--li-child--active");
		if (
			dropdownList[index].classList.contains("ps__nav--li-child--active")
		) {
			// Set the height of the dropdown list to the height of the li elements
			dropdownList[index].style.height = `${dropdownListHeight + 5}px`;
		} else {
			// Set the height of the dropdown list to 0
			dropdownList[index].style.height = "0";
		}
	});

	// Add event listener for the elements if the reurn key is pressed
	dropdownLink.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			dropdownList[index].classList.toggle("ps__nav--li-child--active");
			if (
				dropdownList[index].classList.contains(
					"ps__nav--li-child--active"
				)
			) {
				// Set the height of the dropdown list to the height of the li elements
				dropdownList[index].style.height = `${
					dropdownListHeight + 5
				}px`;
			} else {
				// Set the height of the dropdown list to 0
				dropdownList[index].style.height = "0";
			}
		}
	});
});
