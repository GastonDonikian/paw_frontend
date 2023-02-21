import Verified from "../../components/verify/verified"
import Unverified from "../../components/verify/unverified"
import {isVerified} from "../../Services/AuthHelper";

export default function Verify() {
    if(isVerified())
        return(<Verified/>);
    return(<Unverified/>);
}