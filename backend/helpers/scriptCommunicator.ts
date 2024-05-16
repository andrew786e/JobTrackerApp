import { ScriptData } from "../interface/scriptDataInterface";
import fetch from "node-fetch"

export async function fetchData(data: ScriptData){
    try{
        const respose = await fetch("http://localhost:3000/addJob" , {
            method : "POST" ,
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data) ,
        }) ;

        console.log(respose.status) ;
    }catch(error){
        console.log(error) ;
    }
}