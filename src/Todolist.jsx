import { useState } from "react"

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

    const taskRows = todos.map((task, index) => 
        <tr key={index}>
            <td>{formatDate(task.date)}</td>
            <td>{task.description}</td>
            <td>
            <button onClick={() => deleteTask(index)}>Delete</button>
            </td>
        </tr>)

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
        
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {taskRows}
                </tbody>
            </table>

        </>
    )
}

//export defalt Todolist;