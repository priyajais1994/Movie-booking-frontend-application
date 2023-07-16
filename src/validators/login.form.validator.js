


export const formvalidator= (values)=> {
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


