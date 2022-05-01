import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';

import { useCreateUserMutation } from '@/graphql/generated';

import firebaseApp from './firebase';

const useFirebase = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const router = useRouter();
  const [createUserMutation] = useCreateUserMutation();

  const Logout = () => {
    firebaseAuth.signOut().then(() => {
      router.replace('/signin');
    });
  };

  const SignUp = async (accountName: string, userName: string, email: string, password: string) => {
    await (await createUserWithEmailAndPassword(firebaseAuth, email, password)).user.getIdToken(true);
    await createUserMutation({
      variables: {
        username: {
          accountName,
          userName,
        },
      },
    });
    Logout();
  };

  const SignIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        router.replace('/private');
      })
      .catch((error) => {
        alert(error);
      });
  };

  const SignInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider)
      .then((user_credential) => {
        user_credential.user.getIdToken(true).then(() => {
          createUserMutation();
          router.replace('/private');
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    firebaseAuth,
    Logout,
    SignUp,
    SignIn,
    SignInGoogle,
  };
};

export { useFirebase };
