import axios from "axios";
import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
const Comments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchComments = async () => {
        setLoading(true);
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/comments");
            console.log("comment Data:", res.data);
            
            //setComments(res.data.slice(0, 10)); // to get only first 10 comments
            setComments(res.data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
        setLoading(false);
    };
    // side effect of component
    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div>
            <h2>Comments</h2>
            {loading && (
                <RingLoader
                    color={"red"}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
            error && <div style={{
                color:"red",
                fontSize:"40px",
                textShadow:"6px 10px 4px purple",
                fontWeight:"bolder",
                letterSpacing:"5px",
            }}>
                something Went Wrong!!!
            </div>
    {
        comments.length===0 ||
        <b>COmment is Empty</b>
    }
            {!loading && comments.map((cmt) => (
                <div key={`${cmt.id}-${cmt.email}`}
                    style={{
                        backgroundColor: "teal",
                        color: "white",
                        padding: "20px",
                        margin: "20px",
                        borderRadius: "10px",
                        maxWidth: "500px",
                        boxShadow: "5px 5px 15px rgba"
                    }}
                >
                    <h3>Name: {cmt.name}</h3>
                    <p>Email: <i>{cmt.email}</i></p>
                    <p>{cmt.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Comments;