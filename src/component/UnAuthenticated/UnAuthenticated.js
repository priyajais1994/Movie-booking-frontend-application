import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


function UnAuthenticated()
{

    const location = useLocation();
    console.log(location);
    const currentpath = location.pathname;
    console.log(currentpath);

    return <div className="vh-100 bg-dark text-light d-flex flex-column align-items-center justify-content-center">

        <h3 className="fw-bolder"> you need to be logged in to access this page </h3>

        <Link to = {`/login?redirectKey=${currentpath}`}>

            <Button variant="primary"> Login </Button>
        </Link>

    </div>

}
export default UnAuthenticated;