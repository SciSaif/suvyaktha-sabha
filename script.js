const next = document.querySelector(".carousel__btn--next"),
	back = document.querySelector(".carousel__btn--back"),
	carousel = document.querySelector(".carousel__cards");
let angle = 0;
let mainPic = 1;

let numberOfPics = carousel.childElementCount;
let pics = carousel.children;
next.addEventListener("click", () => {
	let leftPic = mainPic - 1;
	if (leftPic == 0) leftPic = numberOfPics;
	let rightPic = mainPic + 1;
	if (rightPic > numberOfPics) rightPic = 1;

	pics.item(mainPic - 1).classList.toggle("main_card");
	pics.item(mainPic - 1).classList.toggle("left_card");

	mainPic = rightPic;

	pics.item(leftPic - 1).classList.toggle("left_card");
	let nextRight = rightPic + 1;
	if (nextRight > numberOfPics) nextRight = 1;
	pics.item(nextRight - 1).classList.toggle("right_card");

	pics.item(mainPic - 1).classList.toggle("right_card");
	pics.item(mainPic - 1).classList.toggle("main_card");
});

back.addEventListener("click", () => {
	let leftPic = mainPic - 1;
	if (leftPic == 0) leftPic = numberOfPics;
	let rightPic = mainPic + 1;
	if (rightPic > numberOfPics) rightPic = 1;

	pics.item(mainPic - 1).classList.toggle("main_card");
	pics.item(mainPic - 1).classList.toggle("right_card");

	mainPic = leftPic;

	pics.item(rightPic - 1).classList.toggle("right_card");
	let nextLeft = leftPic - 1;
	if (nextLeft == 0) nextLeft = numberOfPics;
	pics.item(nextLeft - 1).classList.toggle("left_card");

	pics.item(leftPic - 1).classList.toggle("left_card");
	pics.item(leftPic - 1).classList.toggle("main_card");
});

// testimonials

let people = document.querySelector(".people");
const testimony = document.querySelector(".testimony");
const testimonyName = document.querySelector(".testimony-name");
const testimonyInfo = document.querySelector(".testimony-info");

const testimonialsBar = document.querySelector(".testimonials-bar");

const startingMain = document.querySelector(".person-main");

testimony.innerHTML = startingMain.children.item(0).innerHTML;
testimonyName.innerHTML = startingMain.children.item(1).innerHTML;
testimonyInfo.innerHTML = startingMain.children.item(2).innerHTML;

people.addEventListener("click", (e) => {
	let person = e.target;
	if (person.classList.contains("people")) return;

	// handle bar circles
	console.log(person.id);
	let pNum = parseInt(person.id.substring(1, 2));
	const selectedCircle = document.querySelector(".testimonials-circle-selected");
	console.log(selectedCircle);
	selectedCircle.classList.remove("testimonials-circle-selected");
	testimonialsBar.children.item(pNum - 1).classList.add("testimonials-circle-selected");

	testimony.innerHTML = person.children.item(0).innerHTML;
	testimonyName.innerHTML = person.children.item(1).innerHTML;
	testimonyInfo.innerHTML = person.children.item(2).innerHTML;
	if (person.classList.contains("person-1")) {
		let personMain = document.querySelector(".person-main");
		personMain.classList.remove("person-main");
		personMain.classList.add("person-1");
		person.classList.add("person-main");
		person.classList.remove("person-1");
	}
	if (person.classList.contains("person-2")) {
		let personMain = document.querySelector(".person-main");
		personMain.classList.remove("person-main");
		personMain.classList.add("person-2");
		person.classList.add("person-main");
		person.classList.remove("person-2");
	}
	if (person.classList.contains("person-3")) {
		let personMain = document.querySelector(".person-main");
		personMain.classList.remove("person-main");
		personMain.classList.add("person-3");
		person.classList.add("person-main");
		person.classList.remove("person-3");
	}
	if (person.classList.contains("person-4")) {
		let personMain = document.querySelector(".person-main");
		personMain.classList.remove("person-main");
		personMain.classList.add("person-4");
		person.classList.add("person-main");
		person.classList.remove("person-4");
	}
});
