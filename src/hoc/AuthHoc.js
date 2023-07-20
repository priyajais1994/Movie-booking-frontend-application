import UnAuthenticated from "../component/UnAuthenticated/UnAuthenticated";


function AuthHOC(props)
{
    // Authentication

    const user = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if(!user || !token)
    {
        return <UnAuthenticated/>
    }

    return <div>
        {props.children}
    </div>


}
export default AuthHOC;