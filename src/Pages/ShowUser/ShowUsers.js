import React, { useEffect, useState } from 'react';
const axios = require('axios');

const ShowUsers = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // fetch('http://localhost:5000/user')
    //   .then((res) => res.json())
    //   .then((data) => setuser(data));
    async function getUser() {
      try {
        const response = await axios.get('https://mighty-tundra-60572.herokuapp.com/user');
        setUser(response.data);
      } catch (error) {
        // console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <div>
      <h2>User: {user.length} </h2>
      <h3>Name: {user[0]?.name}</h3>
      <h3>Email: {user[0]?.email}</h3>
    </div>
  );
};

export default ShowUsers;
