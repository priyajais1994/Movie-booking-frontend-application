


export const LoginFormValidator= (values)=> {
    const errors = {};
    if(!values.userId){
        errors.userId = "userId is required";
    }

    if(!values.password){
        errors.password = "password is required";
    }

    else if(values.password.length < 5){
        errors.password = "password should be of min 5 characters";
    }
    return errors;
}

export const SignUpFormValidator= (values)=> {
    const errors = {};
    if(!values.userId){
        errors.userId = "userId is required";
    }

    if(!values.password){
        errors.password = "password is required";
    }

    else if(values.password.length < 5){
        errors.password = "password should be of min 5 characters";
    }

    if(!values.name){
        errors.name = "name is required";
    }

     if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }


    return errors;
}


