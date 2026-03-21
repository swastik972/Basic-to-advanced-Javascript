import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const UserHome = () => {
    const [users, setUsers] = useState([]);
    const location = useLocation();
    const data = location.state;
   

    const fetchAllUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        const result = await response.json();
        console.log("Data from API:", result);
        setUsers(result);
        //storing data in local storage
      
    };

    useEffect(() => {
        fetchAllUsers();
        
    }, []);
     
    return (
        <div>
            <h1>User Home</h1>
            <p>This is my home page</p>

            <b>
                Data: {data ? data.name : "Empty Data"}
            </b>

            <ul>
                {users.map((u) => (
                    <li key={u.id} style={{
                        backgroundColor:"purple",
                        color:"white",
border:"1px solid white",
padding:"10px",
margin:"10px",
borderRadius:"10px",
cursor:"pointer",

                    }} onClick={()=>navigate(`/details/${u.id}`)} >
                        <h3>Name: {u.name}</h3>
                        <p>Email: {u.email}</p>
                        <p>Company: {u.company.name}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserHome;