import {useRouter} from 'next/router';
import styles from '../../styles/user.module.scss';
import MainContainer from '../../Components/MainContainer';

export default function User({user}) {
  const {query} = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <div className="user">
        <h1 className={styles.user}>User {query.id}</h1>
        <ul>
          {userDataToString(user).map(([key, value], i) => (
            <li key={i}>
              <span>{key}</span> : <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({params}) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id);
  const user = await response.json();

  return {
    props: {
      user
    }, // will be passed to the page component as props
  };
}


function userDataToString(data) {
  let answer = [];
  Object.keys(data).forEach(key => {
    if (typeof data[key] === 'object') {
      answer = [...answer, ...userDataToString(data[key])];
    }
    else {
      answer.push([key, data[key]]);
    }
  });
  return answer;
}