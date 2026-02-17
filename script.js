// Форма заявки (демо)
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    message.textContent = "Спасибо! Ваша заявка отправлена.";
    message.style.color = "#c6a75e";

    form.reset();
});

// Кнопки покупки
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Для оплаты свяжитесь с нами через форму заявки.");
    });
});