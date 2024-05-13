import "./ViewButton.css"
import { useNavigate } from "react-router-dom"

export const ViewButton = () => {
    const navigate = useNavigate() ;
    const handleClick = () => {
        navigate("/CompanyInformation")
    }

    return (
        <button onClick = {handleClick}>View</button>
    )
}