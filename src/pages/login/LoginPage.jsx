import { useEffect, useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import Layout from '../../components/layout/Layout';

export default function LoginPage({ authService }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = authService.onAuthChange(setUser);
    return () => {
      unsubscribe();
    };
  }, [authService]);

  return (
    <Layout>
      {!user && (
        <>
          {' '}
          <h2>Login with ...</h2>
          <StyledFirebaseAuth
            uiConfig={authService.uiConfig}
            firebaseAuth={authService.firebaseAuth}
          />
        </>
      )}
      {user && (
        <div>
          <h1>My App</h1>
          <p>Welcome {user.displayName}! You are now signed-in!</p>
          <button onClick={() => authService.signOut()}>Sign-out</button>
        </div>
      )}
    </Layout>
  );
}
