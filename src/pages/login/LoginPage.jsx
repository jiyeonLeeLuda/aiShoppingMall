import { memo, useEffect, useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import styles from './LoginPage.module.css';

const LoginPage = memo(({ authService }) => {
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
        <div className={styles.container}>
          <h2>소셜로그인으로 간편하게 로그인하세요!</h2>
          <StyledFirebaseAuth
            uiConfig={authService.uiConfig}
            firebaseAuth={authService.firebaseAuth}
          />
        </div>
      )}
      {user && (
        <div className={styles.container}>
          <h3>{user.displayName}님 환영합니다!</h3>
          <p>로그아웃을 하려면 아래버튼을 눌러주세요.</p>

          <button
            type='button'
            className={styles.btnLogout}
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
});
export default LoginPage;
