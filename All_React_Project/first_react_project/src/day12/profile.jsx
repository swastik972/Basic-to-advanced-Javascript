import { useNavigate, useSearchParams } from "react-router";

const Profile = () => {
    // using useNavigate hook to navigate programmatically
    let navigate = useNavigate();
    let goToHome = ()=>{
        navigate("/", ) // navigate to home page and pass some data
    }
    let [searchParams] = useSearchParams();
    let profileId = searchParams.get("profileId")
    let name = searchParams.get("name")
    return (
        <div>
            <h1>User Profile</h1>
            <p>This is my profile page</p>
            <p>Profile ID: {profileId}</p>
            <p>Name: {name}</p>
            <button onClick={goToHome}>Go To Home</button>
        </div>
    )
}

export default Profile;