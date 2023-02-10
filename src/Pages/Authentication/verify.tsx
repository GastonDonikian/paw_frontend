import Verified from "../../components/verify/verified"
import Unverified from "../../components/verify/unverified"
import {UserModel} from "../../Models/Users/User";
import {isVerified} from "../../Services/AuthHelper";

export default function Verify() {
    if(isVerified())
        return(<Verified/>);
    return(<Unverified/>);
}