import "./LoginPageLeft.css"

export default function LoginPageLeft(){
    return(
        <>
        <div className="loginPageLeft-container">
            <img src = {process.env.PUBLIC_URL + '/logo512.png'} alt="myImage"/>
        </div>
        </>
    )
}