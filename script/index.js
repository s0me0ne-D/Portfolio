const themeBtn = document.querySelector(".theme-toggle");
const body = document.querySelector("body");

themeBtn.addEventListener("change", themeToggle);

function themeToggle() {
	if (body.classList.contains("dark")) {
		body.classList.remove("dark");
		body.classList.add("light");
	} else {
		body.classList.remove("light");
		body.classList.add("dark");
	}
}
const burger = document.querySelector(".menu-burger");
const list = document.querySelector(".list");
const headerBack = document.querySelector(".header");
const clickReverse = document.querySelector(".container");
burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	list.classList.toggle("active");
	headerBack.classList.toggle("active");
});
clickReverse.addEventListener("click", function () {
	burger.classList.remove("active");
	list.classList.remove("active");
	headerBack.classList.remove("active");
});
