import { ColDef, ColGroupDef, GridOptions } from "ag-grid-community";
import {QuerySnapshot, collection , getDocs, doc , onSnapshot} from "firebase/firestore" ;
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import {db} from "../config/firestoreConfig"
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the gri

interface JobData{
    postedJobs : string ;
    date ?: string ;
}

async function getListOfJobs(setListOfJobs: React.Dispatch<React.SetStateAction<JobData[]>>) {
    try{
        let testList : JobData[] = [] ;
        const querySnapshot : QuerySnapshot = await getDocs(collection(db , "GoogleCompanyList")) ;
        querySnapshot.forEach((doc) => {
            testList.push(doc.data() as JobData) ;
        }) ;

        setListOfJobs((prevList) => {
            const updatedList = testList.concat(prevList) ;
            return updatedList ;
        }) ;

    }catch(error){
        console.log(error) ;
    }
}

function updatedList(setListOfJobs: React.Dispatch<React.SetStateAction<JobData[]>>){
    const unsub = onSnapshot(collection(db, "GoogleCompanyList") , (snapshot) => {
        snapshot.docChanges().forEach((jobInfo) =>{
            if(jobInfo.type == 'added'){
                console.log("new Doc") ;
            }
        })
    }) ;
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

    updatedList(setRowData) ;

    useEffect(()  => {
        getListOfJobs(setRowData) ;
    }, []) ;

    return (
        <div className={"ag-theme-quartz alignTable"} style={{height: 500 }}>
            <AgGridReact<JobData> 
            rowData={rowData}
            columnDefs={columnDefs}
            />
        </div>
    )
}