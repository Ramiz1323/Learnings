import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([
    {
      name: "User 1",
      age: 20,
      description: "Software Developer",
    },
    {
      name: "User 2",
      age: 25,
      description: "Graphic Designer",
    },
    {
      name: "User 3",
      age: 30,
      description: "Data Scientist",
    },
    {
      name: "User 4",
      age: 35,
      description: "Project Manager",
    },
  ]);

  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      setUsers(response.data.users);
    })

  return (
    <>
      <h1>Users List</h1>
      <div className="users">
        {users.map((user, id) => (
          <div className="user" key={id}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Description: {user.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
