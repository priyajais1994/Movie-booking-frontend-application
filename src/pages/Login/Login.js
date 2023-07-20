import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";



function Login(){

    

    const location = useLocation();
    console.log(location);
    const isLoginPage = (location.pathname == "/login");

    
    return <>

       {isLoginPage && <LoginForm/>}

       {!isLoginPage &&  <SignUpForm/>}
    </>
        
}
export default Login;