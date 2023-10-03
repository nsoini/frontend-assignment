import React from 'react';

export default function Todotable(props){

const taskRows = props.todos.map((task, index) => 
<tr key={index}>
    <td>{props.formatDate(task.date)}</td>
    <td>{task.description}</td>
    <td>
    <button onClick={() => props.deleteTask(index)}>Delete</button>
    </td>
</tr>)

return(
    <div>
        <table>
            <tbody>
                <tr><th>Date</th><th>Description</th></tr>
                {taskRows}
            </tbody>
        </table>
    </div>
);
}