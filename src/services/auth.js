import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from '@firebase/auth';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
    this.uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/mypage',
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        GithubAuthProvider.PROVIDER_ID,
      ],
    };
    this.user = null;
  }

  getUser() {
    return this.user;
  }

  onAuthChange(setUser) {
    return this.firebaseAuth.onAuthStateChanged((user) => {
      this.user = user;
      setUser(user);
    });
    // Unsubscribe 리턴함
  }

  signOut() {
    this.user = null;
    this.firebaseAuth.signOut();
  }
}

export default AuthService;
