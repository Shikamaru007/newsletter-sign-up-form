const form = document.getElementById("contentForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailPattern = /^[\w\.\-_]+@[\w\.\-_]+\.[a-z]{2,5}$/;

    let isEmailValid = emailPattern.test(emailInput.value) ? true : false;
    
    if(!isEmailValid || emailInput === ""){
        form.classList.add("error");
    }else {
        form.classList.remove("error");
        displaySuccessTab(emailInput.value);
    }

})

function displaySuccessTab(userEmail) {
    const mainBody = document.getElementById("container");
    const registeredEmail = document.getElementById("registeredEmail");

    mainBody.classList.add("success");
    registeredEmail.textContent = userEmail;

    document.getElementById("resetBtn").addEventListener("click", ()=> {
        resetPage(mainBody);
    });
}

function resetPage(container) {
    container.classList.remove("success");
    form.reset();    
}


