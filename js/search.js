const search = document.querySelector(".search");
const searchPopup = document.querySelector(".interest-search");
const date_arrival = document.querySelector("#date-arrival");
const date_departure = document.querySelector("#date-departure");
const interest_form = document.querySelector(".interest-form");
let isStorageSupport = true;
let storage = "";
try {
	storage = localStorage.getItem("date_arrival");
	storage = localStorage.getItem("date_departure");
} catch (err) {
	isStorageSupport = false;
}
searchPopup.classList.remove("interest-search-show");
search.addEventListener("click", function(evt) {
	evt.preventDefault();
	searchPopup.classList.toggle("interest-search-show");
});
interest_form.addEventListener("submit", function(evt) {
	if (date_arrival.value && date_departure.value) {
		searchPopup.classList.remove("interest-search-error");
		if (isStorageSupport) {
			localStorage.setItem("date_arrival", date_arrival.value);
			localStorage.setItem("date_departure", date_departure.value);
		}
	} else if (!date_arrival.value || !date_departure.value) {
		evt.preventDefault();
		searchPopup.classList.add("interest-search-error");
	}
});