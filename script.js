const form = document.getElementsByTagName("form")[0];
function validateForm() {
    if (!form.checkValidity()) {
        alert("Валидация не пройдена!");
        return false;
    }
    form.classList.add("was-validated");
    alert("Валидация пройдена!");
    return true;
}

// Управление слайдером
const mySlider = document.getElementById("carouselExampleIndicators");
const mySliderInstance = new bootstrap.Carousel(mySlider, {
    interval: 3000, // Интервал смены слайдов (в миллисекундах)
});
