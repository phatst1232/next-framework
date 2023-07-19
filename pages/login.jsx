import { useState } from 'react';
import loginStyle from './login.module.css';
import { useRouter } from 'next/router';
import urlJoin from 'url-join';


// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login logic here
//     console.log('Login:', email, password);
//   };

  export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const baseUrl = 'http://localhost:4000/user';
        const uri = 'login-demo';
        const url = urlJoin(baseUrl, uri, email, password)
        // url.searchParams.append('email', email);
        // url.searchParams.append('password', password);

        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          // Handle successful response
          const data = await response.json();
          console.log('Login successful:', data);
        } else {
          // Handle error response
          console.error('Login failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

  function goToIndexPage() {
    router.push('/');
  }

  return (
    <div className={loginStyle.loginContainer}>
      <h1 className={loginStyle.loginHeading}>Login</h1>
      <form className={loginStyle.loginForm} onSubmit={handleSubmit}>
        <div className={loginStyle.formGroup}>
          <label>Email:</label>
          <input className={loginStyle.formInput} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={loginStyle.formGroup}>
          <label>Password:</label>
          <input className={loginStyle.formInput} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={loginStyle.loginButton} type="submit">Login</button>
      </form>
        <a onClick={goToIndexPage} className={loginStyle.backLink}>Back</a>
    </div>
  );
}

