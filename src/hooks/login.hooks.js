import { signIn } from "../api/auth.api";
import { TOKEN, userTypes, USER_TYPES } from "../utils/constants";
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { createnewUser } from "../api/user.api";




export const useLogin =()=>{

    const location = useLocation();
    console.log(location);

    const redirectUrl = new URLSearchParams(location.search).get('redirectKey');
    console.log(redirectUrl);

    const initialStates = {userId:"", password:""};

    const navigate = useNavigate();

    const redirect= ()=>{

      const userType = localStorage.getItem(USER_TYPES);
      const token = localStorage.getItem(TOKEN);

      if(!userType || !token)
      {
          return;
      }

      if(redirectUrl)
      {
          navigate(redirectUrl);
      }
      
      else if(userType === userTypes.ADMIN)
      {
          navigate("/ADMIN");
      }
     else if(userType === userTypes.CLIENT)
      {
          navigate("/CLIENT");
      }
      else
      {
          navigate("/");
      }

    }

    useEffect(()=>{

        redirect();

    }, [])

    const onLogin =  async (values, {setSubmitting }) => {

        const userDetails = {userId:values.userId, password:values.password};
        // make API CALL 
        const loginResponse = await signIn(userDetails);
        console.log(loginResponse);
        setSubmitting(false);
        redirect();
      }

      return {initialStates, onLogin};

}

export const useRegister =()=>{

    const initialStates = {userId:"", password:"" , name:"", email:"", userType:""};

    const navigate = useNavigate();

    const redirect= ()=>{

      const userType = localStorage.getItem(USER_TYPES);
      const token = localStorage.getItem(TOKEN);

      if(!userType || !token)
      {
          return;
      }
      
      if(userType === userTypes.ADMIN)
      {
          navigate("/ADMIN");
      }
     else if(userType === userTypes.CLIENT)
      {
          navigate("/CLIENT");
      }
      else{
          navigate("/login");
      }
    

    }

    useEffect(()=>{

        redirect();

    }, [])

    const onRegister =  async (values, {setSubmitting }) => {

        const userDetails = {userId:values.userId, password:values.password, name:values.name, email:values.email, userType:values.userType};
        // make API CALL 
        const registerResponse = await createnewUser(userDetails);
        console.log(registerResponse);
        setSubmitting(false);
        
        if(registerResponse.status === 201)
        {
            console.log("signup successful");
            navigate("/login");
        }
      }

      return {initialStates, onRegister};

}