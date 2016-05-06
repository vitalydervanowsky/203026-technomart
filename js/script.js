var writeUsLink = document.querySelector(".write-us-btn");
var writeUsPopup = document.querySelector(".write-us");
var writeUsClose = document.querySelector(".write-us-close");
var popupMapLink = document.querySelector(".popup-map-link");
var popupMapPopup = document.querySelector(".popup-map");
var popupMapClose = document.querySelector(".popup-map-close");
var inCartLink = document.querySelectorAll(".btn-buy");
var inCartPopup = document.querySelector(".in-cart");
var inCartClose = document.querySelectorAll(".in-cart-close");

for (var i = 0; i < inCartLink.length; i++) {
	inCartLink[i].addEventListener("click", function(event) {
		event.preventDefault();
		inCartPopup.classList.add("in-cart-show");
	});
};

for (var j = 0; j < inCartClose.length; j++) {
	inCartClose[j].addEventListener("click", function(event) {
		event.preventDefault();
		inCartPopup.classList.remove("in-cart-show");
	});
}

writeUsLink.addEventListener("click", function(event) {
	event.preventDefault();
	writeUsPopup.classList.add("write-us-show");
});

writeUsClose.addEventListener("click", function(event) {
	event.preventDefault();
	writeUsPopup.classList.remove("write-us-show");
});

popupMapLink.addEventListener("click", function(event) {
	event.preventDefault();
	popupMapPopup.classList.add("popup-map-show");
});

popupMapClose.addEventListener("click", function(event) {
	event.preventDefault();
	popupMapPopup.classList.remove("popup-map-show");
});
