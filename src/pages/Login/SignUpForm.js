
import {Formik, Form, Field, ErrorMessage} from "formik";
import { Link } from "react-router-dom";
import {  useRegister } from "../../hooks/login.hooks";
import {  SignUpFormValidator } from "../../validators/login.form.validator";

function SignUpForm()
{
    const {initialStates, onRegister} = useRegister();

    return <div className="bg-dark vh-100 d-flex justify-content-center align-items-center text-center text-white">

    <div style = {{border:"1px-solid-white"}} className= "p-5">

        <div className="row">

            <h2> Sign up </h2>

            <div>
                <Formik 
                  initialValues={initialStates}
                  validate= {SignUpFormValidator}

                  onSubmit= {onRegister}
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

                            <Field
                            type = "text"
                            name= "name"
                            placeholder = "enter your name"
                            className = "form-control m-2"
                           
                             />
                            <ErrorMessage name = "name" component = "div"/>

                            <Field

                            type = "text"
                            name= "email"
                            placeholder = "enter your email"
                            className = "form-control m-2"
                           
                             />
                            <ErrorMessage name = "email" component = "div"/>

                            <Field name="userType" as="select" className="form-control bg-white m-2" >
                                    <option disabled>Select Usertype</option>
                                    <option value="CLIENT">CLIENT</option>
                                    <option value="CUSTOMER">CUSTOMER</option>
                                    
                                    
                                </Field>


                              <button className="form-control m-2" type = "submit" disabled={isSubmitting}> Submit </button>

                        
                    </Form>
                  )}

                </Formik>
            </div>
        </div>

        <br/>

        <Link to = "/login">

            <p className="fw-bolder text-decoration-none text-light"> Existing  user ? login </p>

        </Link>
        
        

    </div>
    
</div>

}
export default SignUpForm;