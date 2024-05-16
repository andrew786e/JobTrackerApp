import { Header } from "../components/Header"
import { ListOfCompanies } from "../components/ListOfCompanies"
import Navbar from "../components/Navbar/Navbar"

export const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="HomepageDesign">
                <ListOfCompanies/> 
            </div>
        </div>
    )
}