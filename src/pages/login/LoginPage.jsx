import { useEffect, useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';

export default function LoginPage({ authService }) {
  const [user, setUser] = useState({});

  const onClickLogout = () => {
    authService.signOut();
  };

  useEffect(() => {
    const unsubscribe = authService.onAuthChange(setUser);
    return () => {
      unsubscribe();
    };
  }, [authService]);

  return (
    <>
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
          <button onClick={onClickLogout}>Sign-out</button>
        </div>
      )}
    </>
  );
}
