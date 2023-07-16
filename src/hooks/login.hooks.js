import { signIn } from "../api/auth.api";
import { TOKEN, userTypes, USER_TYPES } from "../utils/constants";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";




export const useLogin =()=>{

    const initialStates = {userId:"", password:""};

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