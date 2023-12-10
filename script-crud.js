const btnAddTask = document.querySelector(".app__button--add-task")
const formAddTask = document.querySelector(".app__form-add-task")
const btnCancelAdd = document.querySelector(".app__form-footer__button--cancel")
const textArea = document.querySelector(".app__form-textarea")
const ulTasks = document.querySelector(".app__section-task-list")
const tasks = JSON.parse(localStorage.getItem("tasksStorage")) || []

function attTasks(){
    localStorage.setItem("tasksStorage", JSON.stringify(tasks))
}
btnAddTask.addEventListener("click", () => {
    formAddTask.classList.toggle("hidden")
})
btnCancelAdd.addEventListener("click", () => {
    textArea.value = ""
    formAddTask.classList.add("hidden")
})
formAddTask.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = {
        descricao: textArea.value
    }
    tasks.push(task)
    const elementTask = createTask(task)
    ulTasks.append(elementTask)
    attTasks()
    textArea.value = ""
    formAddTask.classList.add("hidden")
})

function createTask(task) {

    const li = document.createElement("li")
    li.classList.add("app__section-task-list-item")
    const svg = document.createElement("svg")

    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg> 
    `
    const p = document.createElement("p")
    p.textContent = task.descricao
    p.classList.add("app__section-task-list-item-description")
    const btn = document.createElement("button")
    btn.classList.add("app_button-edit")


    btn.onclick = () =>{
        const newDesc = prompt('Qual o novo nome da tarefa?')
        if(newDesc){
            p.textContent = newDesc
            task.descricao = newDesc
            attTasks()
        }
       
    }

    const imageBtn = document.createElement("img")

    imageBtn.setAttribute("src", "/imagens/edit.png")

    btn.append(imageBtn)

    li.append(svg)
    li.append(p)
    li.append(btn)

    return li
}

tasks.forEach(tsk => {
    const elementTask = createTask(tsk)
    ulTasks.append(elementTask)
});

