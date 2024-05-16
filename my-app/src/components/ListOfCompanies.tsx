import "./ListOfCompanies.css"
import {ViewButton} from "./ViewButton"

const people = [
    {
        id : 0 ,
        companyName : "Facebook"
    }  ,
    {
        id : 1 ,
        companyName : "Amazon"
    }
]


export const ListOfCompanies = () => {
    const listItems : JSX.Element[] = people.map(person => 
        <li className = "companyItem">{person.companyName} <ViewButton/></li>
    ) ;

    return (
        <ul className="companyItemHolder">{listItems}</ul>
    )
}