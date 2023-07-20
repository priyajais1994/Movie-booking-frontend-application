
import axios from 'axios';

  const BASE_URL = "https://mba-backend-app.onrender.com";

  // const BASE_URL = "https://movie-booking-application.onrender.com";

  // const BASE_URL = "http://localhost:8000";

 // const BASE_URL = "http://localhost:8080";

// defining API function
export const signIn = async(user) =>{

    try{
        const response = await axios.post(`${BASE_URL}/mba/api/v1/auth/signin`, user);
        const {name, email, userId, userTypes, userStatus, accessToken, _id} = response.data;
        // console.log(response.data);

        if(accessToken)
        {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("userId", userId);
            localStorage.setItem("userTypes", userTypes);
            localStorage.setItem("userStatus", userStatus);
            localStorage.setItem("token", accessToken);
            localStorage.setItem("Id", _id);
        }
        return response.data;
    }

    catch(err){
        console.log(err);
        return err;
    }
}