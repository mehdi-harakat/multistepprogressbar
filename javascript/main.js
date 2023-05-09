const nums = Array.from(document.querySelectorAll(".numbers .num"));
const after = Array.from(document.querySelectorAll(".numbers .num .after"));
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let catcher = 0;

// the add active to prevoise button
prev.classList.add("active");



// the next button
next.onclick = function () {
	if (catcher < 6) {
		catcher++;
	}
	nums.forEach((e) => {
		if (catcher === parseInt(e.dataset.count)) {
			e.classList.add("active");
			if (e.dataset.count !== "1") {
				e.previousElementSibling.children[1].classList.add("active");
			}
		}
	});

	btnHover(next);

	setTimeout(() => {
		if (nums[nums.length - 1].classList.contains("active")) {
			next.classList.add("active");
		} else {
      next.classList.remove("active");
		}
	}, 150);
  prev.classList.remove("active");
};



// the prevoise button
prev.onclick = function () {
	if (catcher > 0) {
		catcher -= 1;
	}
	nums.forEach((e) => {
		if (catcher === 0) {
			nums[0].classList.remove("active");
		} else {
			if (catcher === parseInt(e.dataset.count)) {
				e.nextElementSibling.classList.remove("active");
				e.children[1].classList.remove("active");
			}
		}
	});

	btnHover(prev);

	setTimeout(() => {
		if (catcher === 0) {
			prev.classList.add("active");
		} else {
			prev.classList.remove("active");
		}
	}, 150);

  next.classList.remove("active");
};


// the setTime function
function btnHover(test) {
	test.classList.add("active");
	setTimeout(() => {
		test.classList.remove("active");
	}, 150);
}
