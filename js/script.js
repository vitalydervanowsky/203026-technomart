var writeUsLink = document.querySelector(".write-us-btn");
var writeUsPopup = document.querySelector(".write-us");
var writeUsClose = document.querySelector(".write-us-close");
var writeUsName = writeUsPopup.querySelector("[name='write-us__name']");
var writeUsEmail = writeUsPopup.querySelector("[name='write-us__email']");
var writeUsText = writeUsPopup.querySelector("[name='write-us__text']");
// двойные кавычки нельзя вставлять в двойные - будет ошибка,
// без одинарных кавычек не обойтись
var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");
var popupMapLink = document.querySelector(".popup-map-link");
var popupMapPopup = document.querySelector(".popup-map");
var popupMapClose = document.querySelector(".popup-map-close");
var inCartLink = document.querySelectorAll(".btn-buy");
var inCartPopup = document.querySelector(".in-cart");
var inCartClose = document.querySelectorAll(".in-cart-close");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < inCartLink.length; i++) {
	inCartLink[i].addEventListener("click", function(event) {
		event.preventDefault();
		inCartPopup.classList.add("in-cart-show");
		overlay.classList.add("overlay-show");
	});
};

for (var j = 0; j < inCartClose.length; j++) {
	inCartClose[j].addEventListener("click", function(event) {
		event.preventDefault();
		inCartPopup.classList.remove("in-cart-show");
		overlay.classList.remove("overlay-show");
	});
}

overlay.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("overlay-show");
	inCartPopup.classList.remove("in-cart-show");
	writeUsPopup.classList.remove("write-us-show");
	popupMapPopup.classList.remove("popup-map-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (writeUsPopup.classList.contains("write-us-show")) {
			writeUsPopup.classList.remove("write-us-show");
			overlay.classList.remove("overlay-show");
		} else if (popupMapPopup.classList.contains("popup-map-show")) {
			popupMapPopup.classList.remove("popup-map-show");
			overlay.classList.remove("overlay-show");
		} else if (inCartPopup.classList.contains("in-cart-show")) {
			inCartPopup.classList.remove("in-cart-show");
			overlay.classList.remove("overlay-show");
		}
	}
});

writeUsLink.addEventListener("click", function(event) {
	event.preventDefault();
	writeUsPopup.classList.add("write-us-show");
	writeUsName.focus();
	if (storageName && storageEmail) {
		writeUsName.value = storageName;
		writeUsEmail.value = storageEmail;
		writeUsText.focus();
	} else {
		writeUsName.focus();
	}
	overlay.classList.add("overlay-show");
});

writeUsClose.addEventListener("click", function(event) {
	event.preventDefault();
	writeUsPopup.classList.remove("write-us-show");
	writeUsPopup.classList.remove("write-us-error");
	overlay.classList.remove("overlay-show");
});

writeUsPopup.addEventListener("submit", function(event) {
	if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
		event.preventDefault();
		writeUsPopup.classList.remove("write-us-error");
		writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
		writeUsPopup.classList.add("write-us-error");
	} else {
		localStorage.setItem("name", writeUsName.value);
		localStorage.setItem("email", writeUsEmail.value);
	}
})

popupMapLink.addEventListener("click", function(event) {
	event.preventDefault();
	popupMapPopup.classList.add("popup-map-show");
	overlay.classList.add("overlay-show");
});

popupMapClose.addEventListener("click", function(event) {
	event.preventDefault();
	popupMapPopup.classList.remove("popup-map-show");
	overlay.classList.remove("overlay-show");
});
