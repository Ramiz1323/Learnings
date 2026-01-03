import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {

  const [imageURL, setImageURL] = useState("")
  const [username, setUsername] = useState("")
  const [desc, setDesc] = useState("")
  const [role, setRole] = useState("")

  const [allUsers, setAllUsers] = useState([])

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    const newUser = {
      imageURL,
      username,
      desc,
      role
    };
    allUsers.push(newUser);
    setAllUsers([...allUsers]);

    setUsername("");
    setImageURL("");
    setDesc("");
    setRole("");
    console.log("Form Submitted!")
  };
  const deleteUser = (index) => {
    allUsers.splice(index,1);
    setAllUsers([...allUsers]);
    console.log("User Deleted");
  }
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-10 py-10 px-50 justify-center items-center">
      <div className="flex gap-5 w-[50%]">
        <input
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value);
        }}
          type="text"
          name="imageURL"
          id=""
          placeholder="Enter Your Image URL"
          className="bg-white text-black py-2! px-3! w-full"
          required
        />
        <input
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value);
        }}
          type="text"
          name="username"
          id=""
          placeholder="Enter Your Name"
          className="bg-white text-black py-2! px-3! w-full"
          required
        />
      </div>
      <div className="flex w-[50%] gap-5 ">
        <input
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value);
        }}
          type="text"
          name="desc"
          id=""
          placeholder="Enter Your Description"
          className="bg-white text-black py-2! px-3! w-full"
          required
        />
        <input
        value={role}
        onChange={(e)=>{
          setRole(e.target.value);
        }}
          type="text"
          name="role"
          id=""
          placeholder="Enter Your Role"
          className="bg-white text-black py-2! px-3! w-full"
          required
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded w-[25%] active:scale-95">Submit</button>
      </form>
        {allUsers.map((user, index) => (
          <Card key={index} user={user} deleteUser={deleteUser} />
        ))}
    </div>
  );
};

export default App;
