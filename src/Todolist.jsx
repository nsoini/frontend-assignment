import { useState } from "react"
import Todotable from "./components/Todotable";

//kompomentti
export default function Todolist(){
    //state
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState({date: Date(), description: ""});

    //functions
    const handleInputChange = (e) => {
        setTask({...task, [e.target.name] : e.target.value});
    }

    const formatDate = (dateString) => {
        const inputDate = new Date (dateString);
        const formatedDate = inputDate.toLocaleDateString("en-GB");
        return formatedDate;
    }

    const addTask = () => 
        setTodos([...todos, task]);

    const deleteTask = (index) => {
        const updatedTodos = todos.filter((task, i) => i !==index);
        setTodos(updatedTodos);

    }

    //return
    return (
        <>
            <h1>Todo List</h1>
            <p>Add a new task to your todo list</p>
            Date:
            <input 
                type="date" 
                name="date"
                value={task.date}
                onChange={handleInputChange}
            />
            
            Description:  
            <input 
                type="text" 
                name="description"
                value={task.description}
                onChange={handleInputChange}
            />
            
            <button onClick={addTask}>
                Add
            </button>
            <Todotable todos ={todos} deleteTask={deleteTask} formatDate={formatDate}/>

        </>
    )
}

//export defalt Todolist;