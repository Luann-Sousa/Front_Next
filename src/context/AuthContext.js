/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import { createContext, useState, useEffect } from 'react'; // esse cara cria nosso contexto
import Router from 'next/router';
import cookie from 'js-cookie';
import firebase from '../lib/.firebase';

const AuthContext = createContext(); // passando nossa funcao

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
});

// preciso criar nosso provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const handleUser = async (currentUser) => {
    if (currentUser) {
      const formatedUser = await formatUser(currentUser);
      setUser(formatedUser);
      setSession(true);
      return formatedUser.email;
    }
    setUser(false);
    setSession(false);
    return false;
  };
  const setSession = (session) => {
    if (session) {
      cookie.set('luansousa-auth', session, {
        expires: 1,
      });
    } else {
      cookie.remove('luansousa-auth');
    }
  };
  const signinGitHub = async () => {
    try {
      setIsloading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider());
      handleUser(response.user);
    } finally {
      setIsloading(false);
    }
  };

  const signinGoogle = async () => {
    try {
      setIsloading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      handleUser(response.user);
    } finally {
      setIsloading(false);
    }
  };
  const signout = async () => {
    try {
      Router.push('/');
      await firebase.auth().signOut();
      handleUser(false);
    } finally {
      setIsloading(false);
    }
  };
  // toda vez que a pagina recarrega ele verifica se usuario ta logado ou não
  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  // criando o provider e passando as info
  return (
    <AuthContext.Provider
      value={{
        user,
        isloading,
        signout,
        signinGitHub,
        signinGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const AuthConsummer = AuthContext.Consumer; //

export default AuthContext; // exportando noosso contexto
