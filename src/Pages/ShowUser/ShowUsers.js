import React, { useEffect, useState } from 'react';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const axios = require('axios');

const ShowUsers = () => {
  const [user1, setUser] = useState({});
  const [user, loading] = useAuthState(auth);
  const email = user.email;

  useEffect(() => {
    // fetch('http://localhost:5000/user')
    //   .then((res) => res.json())
    //   .then((data) => setuser(data));
    async function getUser() {
      try {
        /* const response = await axios.get('https://mighty-tundra-60572.herokuapp.com/user');
        setUser(response.data); */
        const { data } = await axios.get(`https://mighty-tundra-60572.herokuapp.com/user?email=${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setUser(data);
      } catch (error) {
        // console.error(error);
      }
    }
    getUser();
  }, [email]);

  return (
    <div>
      <h2>User: {user1.length} </h2>
      <h3>Name: {user1[0]?.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
};

export default ShowUsers;
