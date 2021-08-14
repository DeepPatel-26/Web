const num = {
    form: document.getElementById('contact-form'),
    typeRadios: document.querySelectorAll("input[type=radio][name=type]"),
    rate: {
        container: document.getElementById('rate-container'),
        input: document.getElementById("rate-input"),
    }
}
function Change() {
    if (this.value !== "hiring") 
    {
        num.rate.container.style.display = "none";
        num.rate.input.removeAttribute("required");
    }
    else 
    {
        num.rate.container.style.display = "block";
        num.rate.input.setAttribute("required", "");
    }
}
function Submit(Any) {
    Any.preventDefault();
    if (validator.valid()) 
    {
        this.submit();
    }
}
num.form.addEventListener("submit", Submit);
num.typeRadios.forEach(radio => radio.addEventListener("change", Change));
