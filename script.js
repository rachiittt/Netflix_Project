document.addEventListener("DOMContentLoaded", function () {
    var faqs = document.querySelectorAll(".faqbox");

    faqs.forEach(function (faq) {
        faq.addEventListener("click", function () {
            var answer = this.querySelector(".answer");
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});