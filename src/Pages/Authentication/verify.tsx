import Verified from "../../components/verified"
import Unverified from "../../components/unverified"
import {UserModel} from "../../Models/User";
import {isVerified} from "../../Services/AuthHelper";

export default function Verify() {
    if(isVerified())
        return(<Verified/>);
    return(<Unverified/>);
}