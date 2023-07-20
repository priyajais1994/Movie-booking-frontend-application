
import {Formik, Form, Field, ErrorMessage} from "formik";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/login.hooks";
import {  LoginFormValidator } from "../../validators/login.form.validator";

function LoginForm()
{
    const {initialStates, onLogin} = useLogin();

    return <div className="bg-dark vh-100 d-flex justify-content-center align-items-center text-center text-white">

    <div style = {{border:"1px-solid-white"}} className= "p-5">

        <div className="row">

            <h2> login </h2>

            <div>
                <Formik 
                  initialValues={initialStates}
                  validate= {LoginFormValidator}

                  onSubmit= {onLogin}
                  >

                  {({isSubmitting}) => (

                    <Form className="d-flex flex-column justify-content-center align-items-center">

                        <Field

                            type = "text"
                            name= "userId"
                            placeholder = "enter your userId"
                            className = "form-control m-2"
                           
                             />
                            <ErrorMessage name = "userId" component = "div"/>

                            <Field
                              type = "password"
                              name = "password"
                              placeholder = "enter password"
                              className = "form-control m-2"
                              />
                              <ErrorMessage name = "password" component = "div"/>

                              <button className="form-control m-2" type = "submit" disabled={isSubmitting}> Submit </button>

                        
                    </Form>
                  )}

                </Formik>
            </div>
        </div>

        <br/>

        <Link to = "/signup">

            <p className="fw-bolder text-decoration-none text-light"> New user ? sign up </p>

        </Link>
        
        

    </div>
    
</div>

}
export default LoginForm;