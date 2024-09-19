let task =[];

const addTask = ()=>
{
       const taskInput = document.getElementById('taskInput') 
       const text = taskInput.value.trim()

       if(text)
       {
            task.push({text: text , completed: false});
            
            updateTaskList();
       }
       
};

        const updateTaskList = ()=>
        {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML =''

            task.forEach(task, index=>{
                const listItem =document.createElement('li')

                listItem.innerHTML=`
                <div class=""taskItem> 
                    <div class ="task>
                        <input type ="checkbox" class ="checkbox" />
                            <p> Finish this project </p>
                    </div>
                    <div class ="icons>
                        <img src ="delete.png"/>
                        <img src ="edit.png"/>
                    </div>                   
                </div>
                `;
                listItem.addEventListener('change', ()=> toggleTaskComplete(index))
                taskList.append(listItem);
            });
        };
document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault()
    addTask();
})