import Verified from "../../components/verified"
import Unverified from "../../components/unverified"
import {UserModel} from "../../Models/User";

export default function Verify() {
    return(<Unverified/>);
    // let userString = localStorage.getItem("user");
    // if(userString === null) {
    //     return(<Unverified/>);
    // }
    // let user = JSON.parse(userString) as UserModel;
    // if(user !== null && user.verified) {
    //     return(<Verified/>);
    // }
}