import { useEffect, useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useDispatch } from 'react-redux';
import Layout from '../../components/layout/Layout';
import { setLoginUser } from '../../redux/slice';

export default function LoginPage({ authService }) {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authService.onAuthChange(setUser);
    return () => {
      unsubscribe();
    };
  }, [authService]);

  useEffect(() => {
    if (user) {
      dispatch(
        setLoginUser({
          id: user.uid,
          nickName: user.displayName,
        })
      );
    } else {
      dispatch(setLoginUser({}));
    }
  }, [user]);
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
