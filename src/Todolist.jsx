import { useState } from "react"
//import Todotable from "./components/Todotable";
import TodoGrid from "./components/TodoGrid";
import { Button, TextField, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';


//kompomentti
export default function Todolist(){
    //state
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState({date: null, description: "", priority: ""});

    //functions
    const handleInputChange = (e) => {
        setTask({...task, [e.target.name] : e.target.value});
    }

    const formatDate = (dateString) => {
        const formattedDate = dayjs(dateString).format('DD.MM.YYYY');
        return formattedDate; 
    }

    const handleDateChange = (date) => {
        setTask({...task, date : date.toDate()})
    }

    const addTask = () => 
        setTodos([...todos, task]);

    const deleteTask = (id) => { 
        setTodos(todos.filter((task, i) => i != id ))};

    //return
    return (
        <>
            <h3>Todolist</h3>
            <p>Add a new task to your todo list</p>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <DatePicker
                label="Date" 
                name="date"
                selected={task.date}
                onChange={handleDateChange}
            
            />
            
             
            <TextField
                label="Description" 
                variant="standard"
                name="description"
                value={task.description}
                onChange={handleInputChange}
            />
            
            
            <TextField 
                label="Priority"
                variant="standard" 
                name="priority"
                value={task.priority}
                onChange={handleInputChange}
            />

            <Button onClick={addTask} variant="contained">Add</Button>
            
            </Stack>
       
        <TodoGrid 
        todos ={todos} 
        deleteTask={deleteTask}
        formatDate={formatDate}
         />

        </>
    )
}

//export defalt Todolist;
//formatDate={formatDate}
//<Todotable todos ={todos} deleteTask={deleteTask} formatDate={formatDate}/>
