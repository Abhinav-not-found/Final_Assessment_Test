import React, { useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  fetchUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: <br/>
            &nbsp;&nbsp;    Street: {user.address.street}<br/>
            &nbsp;&nbsp;    Suite : {user.address.suite}<br/>
            &nbsp;&nbsp;    City  : {user.address.city}<br/>
            &nbsp;&nbsp;    Zipcode: {user.address.zipcode}
            </p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <p>Catch-Phrase: {user.company.catchPhrase}</p>
           <p>Bs: {user.company.bs}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;