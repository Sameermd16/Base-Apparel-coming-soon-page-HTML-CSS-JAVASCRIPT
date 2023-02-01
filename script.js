const form = document.getElementById("form");
const email = document.getElementById("email");
// const invalid_icon = document.getElementById("invalid_icon");
// const invalid_text = document.getElementById("invalid_text");

// form.addEventListener("submit", (e) => {
//     if(email.validity.TypeMismatch){
//         e.preventDefault();
//         invalid_icon.style.opacity = "1";
//         invalid_text.style.opacity = "1";
//     }else{
//         invalid_icon.style.opacity = "0";
//         invalid_text.style.opacity = "0";
//     }
// })
form.addEventListener("submit", e => {
    e.preventDefault();
    const emailVal = email.value;
    if (!validateEmail(emailVal)){
        form.classList.add("error");
    }else{
        form.classList.remove("error");
    }
})

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}