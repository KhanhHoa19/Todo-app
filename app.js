let task =[];

const addTask = ()=>
{
       const taskInput = document.getElementById('taskInput') 
       const text = taskInput.value.trim()

       if(text)
       {
            task.push({text: text , completed: false});
            taskInput.value ="";
            updateTaskList();
       }
       
};

    const toggleTaskComplete =(index)=>{
        tasks[index].completed = !task[index].completed;

    }
    const deleteTask =(index)=>
    {
        task.splice(index,1);
        updateTaskList();
    }
    const editTask =(index)=>{
        const taskInput =document.getElementById('taskInput');
        taskInput.value= tasks[index].text

        task.splice(index,1);
        updateTaskList();
    }
        const updateTaskList = ()=> 
        {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML =''

            task.forEach(task, index=>{
                const listItem =document.createElement('li')

                listItem.innerHTML=`
                <div class=""taskItem> 
                    <div class ="task>
                        <input type ="checkbox" class ="checkbox" ${task.completed ? "checked" :""} />
                        
                            <p> ${task.text} </p>
                    </div>
                    <div class ="icons>
                        <img src ="delete.png" onClick="deleteTask(${index})/>
                        <img src ="edit.png" onClick="editTask(${index})/>
                    </div>                   
                </div>
                `;
                listItem.addEventListener('change', ()=> toggleTaskComplete(index))
                taskList.append(listItem);
            });
        };
document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();
    addTask();
})