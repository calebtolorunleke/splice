// function modifyList(){
//     let tasks = ['Buy groceries', 
//         'Wash the car', 
//         'Don Homework', 
//         'Excercise'];
//     tasks.splice(2,1,"Read a Book") 
   
//     let listElement = document.getElementById('todolist')
//     listElement.innerHTML='';

//     tasks.forEach(task=>{
//         let li = document.createElement('li');
//         li.textContent = task;
//         listElement.appendChild(li)
//     })
// }

// function rollCall(){
//     let students = ['Alice', 'Clinton','Felixe','Bob',]
//     let newlistElement = document.getElementById('studentList')
//     newlistElement.innerHTML = ''

//     students.forEach(students,index)=>
//         let li= document.createElement('li');
//     li.textContent = `Student ${index + 1}: ${students}`
//     listElement.appendChild(li)
// }


function showTopPlayers(){
    let players = ['Alice', 'Bob','Charlie','David','Eve','Bob']
    let topPlayers = players.slice(0,3)
    let listElement = document.getElementById('leaderboard')
    listElement.innerHTML = '';

    topPlayers.forEach(player=>{
        let li = document.createElement('li')
        li.textContent=player;
        listElement.appendChild(li)
    })
}