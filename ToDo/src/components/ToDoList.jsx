import React,{useState} from "react";

function ToDoList(){

    const [tasks,setTasks] = useState(["Eat Breakfast","Go to class","Learn React js"])
    const [newTask,setNewTask] = useState("")
    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function handleAddTask(){
        if(newTask.trim() !== ""){
            setTasks(t=>[...t,newTask])
            setNewTask("")
        }  
    }
    function handleDeleteTask(index){
        const updatedTask = tasks.filter((_,i)=> i!==index)
        setTasks(updatedTask);
    }
    function handleMoveDown(index){
        if(index <tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = 
            [updatedTask[index+1],updatedTask[index]]
            setTasks(updatedTask);
        }
    }
    function handleMoveUp(index){
        if (index>0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = 
            [updatedTask[index-1],updatedTask[index]]
            setTasks(updatedTask);
        }

    }
    return(
        <>
        <div className="todo-container">
        <h2 id="heading">To-Do List</h2>
        <input type="text" placeholder="Enter the Task" id="input" value={newTask} onChange={handleInputChange}/>
        <button className="add-button"onClick={handleAddTask}>Add Task</button>
        <div className="container">
            <ol>
                {tasks.map((task,i)=><li key={i}>
                    <span className="text">{task}</span>
                    <button className="delete-button" 
                    onClick={()=>handleDeleteTask(i)}>
                        Delete
                    </button>
                    <button className="Move-button" 
                    onClick={()=>handleMoveUp(i)}>
                        👆
                    </button>
                    <button className="Move-button" 
                    onClick={()=>handleMoveDown(i)}>
                        👇
                    </button>
                </li>)}
            </ol>
        </div>
        </div>
        </>
    )
}
export default ToDoList;