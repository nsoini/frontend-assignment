import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";

export default function TodoGrid(props){

    const gridRef = useRef();

    const columns = [
        { field: "date", 
        sortable: true, 
        filter: true,
        floatingFilter: true },
        { field: "description", 
        sortable: true, 
        filter: true,
        floatingFilter: true },
        { field: "priority", 
        sortable: true, 
        filter: true,
        floatingFilter: true,
            cellStyle: params => params.value ==="High" ? {color: 'red'} : {color: 'black'}}
    ];

    const deleteSelected = () => {
        const selectdNodes = gridRef.current.getSelectedNodes();

        if (selectdNodes.length > 0){
            const removeIndex = selectdNodes[0].id;
            props.deleteTask(removeIndex);
        }else{
            alert("Select row first")
        }
    }

    return (
        <>
        <button onClick={deleteSelected}>Delete</button>
        <div className="ag-theme-material" 
        style={{ height: '700px', width: '80%', margin: 'auto' }}>
          <AgGridReact 
          ref={gridRef}
          onGridReady={params => {gridRef.current = params.api;}}
          rowSelection='single'
          columnDefs={columns} 
          animateRows={true}
          rowData={props.todos} />
        </div>
        </>
      )
}
