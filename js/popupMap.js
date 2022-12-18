
var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evnt) {
	evnt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evnt) {
	evnt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evnt) {
	if (evnt.keyCode === 27) {
		
		if (mapPopup.classList.contains("modal-show")) {
			evnt.preventDefault();
			mapPopup.classList.remove("modal-show");
			mapPopup.classList.remove("modal-error");
		}
	}
});