import { useState } from "react"
//import Todotable from "./components/Todotable";
import TodoGrid from "./components/TodoGrid";


//kompomentti
export default function Todolist(){
    //state
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState({date: Date(), description: "", priority: ""});

    //functions
    const handleInputChange = (e) => {
        setTask({...task, [e.target.name] : e.target.value});
    }

    const formatDate = (dateString) => {
        const inputDate = new Date (dateString);
        const formatedDate = inputDate.toLocaleDateString("fi-FI");
        return formatedDate;
    }

    const addTask = () => 
        setTodos([...todos, task]);

    const deleteTask = (id) => { 
        setTodos(todos.filter((task, i) => i != id ))};

    //return
    return (
        <>
            <h1>Todo List</h1>
            <p>Add a new task to your todo list</p>
            <label>Date: </label>
            <input 
                type="date" 
                name="date"
                value={task.date}
                onChange={handleInputChange}
            />
            
            <label>Description: </label>  
            <input 
                type="text" 
                name="description"
                value={task.description}
                onChange={handleInputChange}
            />
            
            <label>Priority: </label>  
            <input 
                type="text" 
                name="priority"
                value={task.priority}
                onChange={handleInputChange}
            />

            <button onClick={addTask}>
                Add
            </button>

        <TodoGrid 
        todos ={todos} 
        deleteTask={deleteTask}
        
        />

        </>
    )
}

//export defalt Todolist;
//formatDate={formatDate}
//<Todotable todos ={todos} deleteTask={deleteTask} formatDate={formatDate}/>
