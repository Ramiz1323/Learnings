import React, { createContext } from "react";

export const UserDataContext = createContext();

const Usercontext = ({ children }) => {
  const data = [
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      role: "Student",
      location: "Delhi",
    },
    {
      id: 2,
      name: "Neha Verma",
      email: "neha.verma@example.com",
      role: "Frontend Developer",
      location: "Mumbai",
    },
    {
      id: 3,
      name: "Rohan Das",
      email: "rohan.das@example.com",
      role: "Backend Developer",
      location: "Kolkata",
    },
    {
      id: 4,
      name: "Priya Singh",
      email: "priya.singh@example.com",
      role: "UI/UX Designer",
      location: "Bangalore",
    },
    {
      id: 5,
      name: "Aditya Patel",
      email: "aditya.patel@example.com",
      role: "Data Analyst",
      location: "Ahmedabad",
    },
  ];

  return (
    <UserDataContext.Provider value={data}>
        {children}
    </UserDataContext.Provider>
  );
};

export default Usercontext;
