const addToDo = document.querySelector(".addToDo")
const content = document.querySelector(".content")
const submit = document.querySelector(".submit")
const error = document.querySelector(".error")
const edit = document.querySelector(".edit")
const deleteText = document.querySelector(".delete")


submit.addEventListener("click", () =>{
    if(addToDo.value === ""){
        error.textContent = "enter text"
    } else {
        error.textContent = ""
        content.innerHTML += `
        <div class="app">
            <p class="text">${addToDo.value}</p>
            <button class="edit">edit</button>
            <button class="delete">delete</button>
        </div>
        `
    }
})

deleteText.addEventListener("click", () => {
    content.innerHTML = ""
})

