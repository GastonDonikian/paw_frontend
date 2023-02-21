import * as React from 'react';
import {useEffect, useState} from 'react';
import './verify.css';
import {UserModel} from "../../Models/Users/User";
import {getUserFromToken} from "../../Services/AuthHelper";

export default function Verified() {
    const [user, setUser] = useState<UserModel>();

    const loadUser = async () => {
        setUser(await getUserFromToken());
    }

    useEffect( () => {loadUser()}, [])


    return (
        
        <div className="container-fluid py-5">
    <div className="container">
            
                <h3 className="text-center">Your account has been verified</h3>
            

            <div className="row my-5 justify-content-center">
                <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
                    <div className="email-signature5">
                        <div className="signature-icon">
                            
                        <img src="./profilePhoto.jpeg" height={80} style={{width: '100px', height: '100px', borderRadius: '100px', margin: '10%'}} />
                        </div>
                        <ul className="signature-content">
                            <li><h3 className="title"> {user?.name} {user?.surname}</h3></li>
                            <li>Email: {user?.email}</li>
                            <li>Mobile: {user?.phoneNumber}</li>
                        </ul>
                        <div>
                                <form action="" method="post">
                                    <input type="submit"
                                           style={{backgroundColor: '#009AC2'}}
                                           className="text-white btn float-right login_btn" value="Start">
                                            </input>
                                </form>

                        </div>
                    </div>
                </div>
            </div>
        
    </div>
</div>



       
    );
}