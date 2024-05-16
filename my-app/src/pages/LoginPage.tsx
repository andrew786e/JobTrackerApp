import LoginPageLeft from "../components/LoginPageComponents/LoginPageLeft"
import LoginPageRight from "../components/LoginPageComponents/LoginPageRight"
import "./LoginPage.css"

export const LoginPage = () =>{
    return(<>
    <div className="loginpage-container">
        <LoginPageLeft/>
        <LoginPageRight/>
    </div>
    </>)
}