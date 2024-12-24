// Get all containers with the class "ps__infiniteScroll--left"
const scrollContainers = document.querySelectorAll(".ps__infiniteScroll--left");

scrollContainers.forEach((container) => {
	const scrollWidth = container.scrollWidth;
	let isScrollingPaused = false;

	const scrollDisabler = container.querySelector(".scroll-disabler");

	window.addEventListener("load", () => {
		self.setInterval(() => {
			if (isScrollingPaused) {
				return;
			}
			const first = container.querySelector("article");

			if (!isElementInViewport(first)) {
				container.appendChild(first);
				container.scrollTo(container.scrollLeft - first.offsetWidth, 0);
			}
			if (container.scrollLeft !== scrollWidth) {
				container.scrollTo(container.scrollLeft + 1, 0);
			}
		}, 15);
	});

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return rect.right > 0;
	}

	function pauseScrolling() {
		isScrollingPaused = true;
	}

	function resumeScrolling() {
		isScrollingPaused = false;
	}
	const allArticles = container.querySelectorAll("article");
	for (let article of allArticles) {
		article.addEventListener("mouseenter", pauseScrolling);
		article.addEventListener("mouseleave", resumeScrolling);
	}
});

const scrollRightElements = document.querySelectorAll(
	".ps__infiniteScroll--right"
);
let isScrollingPaused = false;

const reviewsScrollDisabler = document.querySelector(".scroll-disabler-right");

window.addEventListener("load", () => {
	self.setInterval(() => {
		if (isScrollingPaused) {
			return;
		}

		scrollRightElements.forEach((reviewsContainer) => {
			const allArticles = reviewsContainer.querySelectorAll("article");
			const last = allArticles[allArticles.length - 1];

			if (!isElementInViewport(last)) {
				reviewsContainer.prepend(last);
				reviewsContainer.scrollTo(
					reviewsContainer.scrollLeft + last.offsetWidth,
					0
				);
			}
			if (reviewsContainer.scrollLeft !== 0) {
				reviewsContainer.scrollTo(reviewsContainer.scrollLeft - 1, 0);
			}

			for (let article of allArticles) {
				article.addEventListener("mouseenter", pauseScrolling);
				article.addEventListener("mouseleave", resumeScrolling);
			}
		});
	}, 15);
});

function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return rect.left < window.innerWidth;
}

function pauseScrolling() {
	isScrollingPaused = true;
}

function resumeScrolling() {
	isScrollingPaused = false;
}
