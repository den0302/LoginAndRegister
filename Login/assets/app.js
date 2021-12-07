
const username = document.querySelector(".username")
const password = document.querySelector(".password")
const form = document.querySelector(".form")
const but = document.querySelector("button-login")
const errorPassword = document.querySelector(".errorPassword")
const errorAcc = document.querySelector(".errorAcc")
const errorNotEnterUsername = document.querySelector(".errorNotEnterUsername")
const errorNotEnterPassword = document.querySelector(".errorNotEnterPassword")
const watchPasswordCB = document.querySelector(".watchPasswordCB")


watchPasswordCB.addEventListener("click", () => {
  if(watchPasswordCB.checked){
    password.setAttribute("type", "text");
  } else{
    password.setAttribute("type", "password");
  }

})



form.addEventListener("submit", event => {
 
    if(username.value === "") {
        //не відправляти на форму
        errorNotEnterUsername.style.display = "inline"
        event.preventDefault();
    } else if(localStorage.getItem(username.value)===null){
        errorNotEnterUsername.style.display = "none"
        errorAcc.style.display = "inline"
        event.preventDefault();
    }else{
        errorAcc.style.display = "none"
        errorNotEnterUsername.style.display = "none"
    }


    if(localStorage.getItem(username.value)===null){
        //не відправляти на форму
        errorPassword.style.display = "none"
        event.preventDefault();
    }else if(password.value === ""){
        errorNotEnterPassword.style.display = "inline"
        event.preventDefault();
    }else if(localStorage.getItem(username.value) !== password.value ) {
        errorPassword.style.display = "inline"
        errorNotEnterPassword.style.display = "none"
        event.preventDefault();
    } else {
        errorNotEnterPassword.style.display = "none"
        errorPassword.style.display = "none"
    }
 
    if(localStorage.getItem(username.value)!==null && localStorage.getItem(username.value) === password.value){
        
    }

  });




