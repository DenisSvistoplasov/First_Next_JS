import Link from 'next/link';
import {useState} from 'react';
import Nav from '../Components/Nav';
import {useEffect} from 'react';
import MainContainer from '../Components/MainContainer';

const Users = ({users}) => {
  

  return (
    <MainContainer>
      <h1>Users list</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={'/users/' + user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;



export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users
    }
  };
}