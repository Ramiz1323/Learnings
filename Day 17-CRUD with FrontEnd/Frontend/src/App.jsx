import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  function fetchData() {
    axios.get("http://localhost:3000/api/users").then((response) => {
      setUsers(response.data.users);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const description = form.description.value;

    axios
      .post("http://localhost:3000/api/users", {
        name,
        age,
        description,
      })
      .then((response) => {
        console.log(response.data);
        fetchData();
        form.reset();
      });
  }

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3000/api/users/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchData();
      });
  }

  function handleUpdate(id) {
    const newDescription = prompt("Enter new description:");
    if (newDescription) {
      axios
        .patch(`http://localhost:3000/api/users/update/${id}`, {
          description: newDescription,
        })
        .then((response) => {
          console.log(response.data);
          fetchData();
        });
    }
  }
  return (
    <>
      <h1>Users List</h1>
      <form className="user-create-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" />
        <input name="age" type="number" placeholder="Age" />
        <input name="description" type="text" placeholder="Description" />
        <button type="submit">Create User</button>
      </form>
      <div className="users">
        {users.map((user, id) => (
          <div className="user" key={id}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Description: {user.description}</p>
            <span className="update-btn" onClick={() => handleUpdate(user._id)}>
              Update
            </span>
            <span className="delete-btn" onClick={() => handleDelete(user._id)}>
              Delete
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
