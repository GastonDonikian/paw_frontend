import Verified from "../../components/verified"
import Unverified from "../../components/unverified"
import {UserModel} from "../../Models/Users/User";
import {isVerified} from "../../Services/AuthHelper";

export default function Verify() {
    if(isVerified())
        return(<Verified/>);
    return(<Unverified/>);
}