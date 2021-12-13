const username = document.querySelector(".username")
const password = document.querySelector(".password")
const form = document.querySelector(".form")
const retryPassword = document.querySelector(".retryPassword")
const enterUsername = document.querySelector(".enterUsername")
const accountExists = document.querySelector(".accountExists")
const enterPassword = document.querySelector(".enterPassword")
const symbols8 = document.querySelector(".symbols8")
const passwordMismatch = document.querySelector(".passwordMismatch")
const watchPasswordCB = document.querySelector(".watchPasswordCB")

watchPasswordCB.addEventListener("click", () => {
  if(watchPasswordCB.checked){
    password.setAttribute("type", "text")
    retryPassword.setAttribute("type", "text")
  }else{
    password.setAttribute("type", "password")
    retryPassword.setAttribute("type", "password")
  }
})

form.addEventListener("submit", event => {
  if(username.value === ""){
      enterUsername.style.display = "inline"
      event.preventDefault()
  }else if(password.value === ""){
      enterPassword.style.display = "inline"
      enterUsername.style.display = "none"
      event.preventDefault()
  }else if(password.value.length < 8){
      symbols8.style.display = "inline"
      enterPassword.style.display = "none"
      enterUsername.style.display = "none"
      event.preventDefault()
  }else if(password.value !== retryPassword.value){
      passwordMismatch.style.display = "inline"
      symbols8.style.display = "none"
      enterPassword.style.display = "none"
      enterUsername.style.display = "none"
      event.preventDefault()
   }else if(localStorage.getItem(username.value)!==null){
      accountExists.style.display = "inline"
      passwordMismatch.style.display = "none"
      symbols8.style.display = "none"
      enterPassword.style.display = "none"
      enterUsername.style.display = "none"
      event.preventDefault()
  }else{
      accountExists.style.display = "none"
      passwordMismatch.style.display = "none"
      symbols8.style.display = "none"
      enterPassword.style.display = "none"
      enterUsername.style.display = "none"
      localStorage.setItem(username.value, password.value)
    }
})