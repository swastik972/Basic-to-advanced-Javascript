import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";



const UserDetails = () => {
    let navigate = useNavigate();
    let goToProfile = () => {
        navigate("/profile")
    }
    //extracting the userid from the url
    const { userid } = useParams()
    const [userDetails, setUserDetails] = useState(null);
    let fetchUserDetails = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
        let data = await res.json();
        console.log("User details", data);
        setUserDetails(data);
    }
    useEffect(() => {
        fetchUserDetails();
    }
        , [userid])

    return (
        <div>
            <h1>User1 Details</h1>
            <p>
                This is my details page
            </p>
            <p>UserId: {userid}</p>
        
            <button onClick={goToProfile}>Go to Profile</button>
            {userDetails && (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>Phone: {userDetails.phone}</p>
                    <p>Address: {userDetails.address?.street}, {userDetails.address?.city}</p>
                    <p>Company: {userDetails.company?.name}</p>
                </div>
            )}
        </div>
    )
}
export default UserDetails;