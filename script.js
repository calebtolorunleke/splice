function modifyList(){
    let tasks = ['Buy groceries', 'Wash the car', 'Don Homework', 'Excercise'];
    tasks.splice(2,1,"Read a Book") 
   
    let listElement = document.getElementById('todolist')
    listElement.innerHTML='';

    tasks.forEach(task=>{
        let li = document.createElement('li');
        li.textContent = task;
        listElement.appendChild(li)
    })
}