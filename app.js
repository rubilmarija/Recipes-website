function getRecipes() {
    let name = prompt("What is your name?")
    let email = prompt("What is you email adress?")
    alert("Thank you " + name + ", delicious recipes are waiting for you in your inbox :)")
}

let contactButton = document.querySelector("button")
contactButton.addEventListener("click", getRecipes);