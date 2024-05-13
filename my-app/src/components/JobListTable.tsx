import { ColDef, ColGroupDef, GridOptions } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the gri

interface JobData{
    postedJobs : string ;
    date : string ;
}
export const JobListTable = () => {

    const [columnDefs , setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
        {headerName : "PostedJobs" , field : "postedJobs" , flex : 1} ,
        {headerName : "Date"  , field : "date" , flex : 1}
    ])

    const [rowData , setRowData] = useState<JobData[]>([
        {postedJobs : "Software Developer" , date : "20/23/12"} ,
        {postedJobs: "Senior Developer" , date : "15/21/22"}
    ])

    return (
        <div className={"ag-theme-quartz alignTable"} style={{height: 500 }}>
            <AgGridReact<JobData> 
            rowData={rowData}
            columnDefs={columnDefs}
            />
        </div>
    )
}