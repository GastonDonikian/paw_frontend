import {logout} from "../../Services/AuthHelper";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function Logout() {
    let navigate = useNavigate();
    useEffect(() =>
    {
        logout()
        navigate('/')
    })

    return(
        <div></div>
    )
}