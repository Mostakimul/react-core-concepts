import React, { useEffect, useState } from 'react';
import User from './User';

const UserFetch = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('Use Effect Inside!');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>External Users</h3>
      {users.map((user) => (
        <User name={user.name}></User>
      ))}
    </div>
  );
};

export default UserFetch;
