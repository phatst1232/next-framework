import { useState } from 'react';
import { useRouter } from 'next/router';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);
  const router = useRouter();

  function handleClick() {
    setLikes(likes + 1);
  }

  function goToLoginPage() {
    router.push('/login');
  }

  return (
    <div>
      <button onClick={goToLoginPage}>Go to Login</button>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
