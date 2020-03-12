var filterForm = document.querySelector("form")
var filterButton = document.querySelector("button")

document.querySelector("button").addEventListener('click', function() {
  if (filterForm.classList.contains("visible")) {
    filterForm.classList.remove("visible");
    filterButton.classList.remove("showFilter");
    filterOptions.classList.remove("showForm")
  } else {
    filterForm.classList.add("visible");
    filterButton.classList.add("showFilter");
    filterOptions.classList.add("showForm")
  }
})

// Javascript voor het updaten van de slider value

var slider = document.getElementById("myRange");
var output = document.getElementById("sliderRange");
output.innerHTML = slider.value; // hier wordt de initiele waarde van de slider ingevoegd, deze begint bij een leestijd van max 5 min

// Hier wordt de waarde geupdatet

slider.oninput = function() {
  output.innerHTML = this.value;
}