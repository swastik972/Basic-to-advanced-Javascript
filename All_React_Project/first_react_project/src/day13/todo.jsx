
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchTodos = async () => {
        setLoading(true);
        setError(false);
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log("todo Data:", res.data);
            // setTodos(res.data.slice(0, 10)); // to get only first 10 todos
            setTodos(res.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
            setError(true);
        }
        setLoading(false);
    };
    // side effect of component
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h2>Todos</h2>
            {loading && (
                <RingLoader
                    color={"red"}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
            {error && (
                <div style={{
                    color: "red",
                    fontSize: "40px",
                    textShadow: "6px 10px 4px purple",
                    fontWeight: "bolder",
                    letterSpacing: "5px",
                }}>
                    Something Went Wrong!!!
                </div>
            )}
            {!loading && !error && todos.length === 0 && (
                <b>Todo is Empty</b>
            )}
            {!loading && !error && todos.map((todo) => (
                <div key={todo.id}
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
                    <h3>Title: {todo.title}</h3>
                    <p>User ID: <i>{todo.userId}</i></p>
                    <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Todo;