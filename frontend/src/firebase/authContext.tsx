import { createContext, ReactNode, useEffect, useState, FC } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

import firebaseApp from './firebase';

type Props = {
  children: ReactNode;
};

type AuthContextState = {
  useAuthGuard: () => void;
  userID: string;
};

const AuthContext = createContext({} as AuthContextState);

const AuthProvider: FC<Props> = ({ children }) => {
  const firebaseAuth = getAuth(firebaseApp);
  const router = useRouter();
  const [userID, setUserID] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const tokenStorageKey = 'firebase-authentication-jwt';

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUserID(user.uid);
        user.getIdToken().then((idToken) => {
          localStorage.setItem(tokenStorageKey, idToken);
        });
      } else {
        setUserID('');
        localStorage.removeItem(tokenStorageKey);
      }
      setIsLoading(false);
    });
  }, [firebaseAuth]);

  const useAuthGuard = () => {
    useEffect(() => {
      if (!isLoading && userID === '') {
        router.replace('/signin');
      }
    });
  };

  return <AuthContext.Provider value={{ useAuthGuard, userID }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
