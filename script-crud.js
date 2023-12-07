const btnAddTask = document.querySelector(".app__button--add-task")
const formAddTask = document.querySelector(".app__form-add-task")
const btnCancelAdd = document.querySelector(".app__form-footer__button--cancel")
const textArea = document.querySelector(".app__form-textarea")

const tasks = []

btnAddTask.addEventListener("click", () => {
    formAddTask.classList.toggle("hidden")
})


btnCancelAdd.addEventListener("click", () => { formAddTask.classList.add("hidden") })

formAddTask.addEventListener("submit", (e) => {

    e.preventDefault();
   
    const task = {
        descricao: textArea.value
    }

    tasks.push(task)
alert
})