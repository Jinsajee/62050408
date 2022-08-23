import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://fakestoreapi.com/users");
    const resJson = await res.json();

    setUsers(resJson);
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
        Home
        {number}
        <button className
    </div>
  )

export default Home
