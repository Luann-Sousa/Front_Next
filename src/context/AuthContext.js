/* eslint-disable consistent-return */
import { createContext, useState } from 'react'; // esse cara cria nosso contexto
import Router from 'next/router';
import firebase from '../lib/.firebase';

const AuthContext = createContext(); // passando nossa funcao

// preciso criar nosso provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const signin = () => {
    // conexao com firebase
    try {
      setIsloading(false);
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((response) => {
          setUser(response.user);
          Router.push('/dashboard');
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };
  const signout = () => {
    try {
      Router.push('/');
      return firebase
        .auth()
        .signOut()
        .then(() => setUser(false));
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  // criando o provider e passando as info
  return (
    <AuthContext.Provider
      value={{
        user,
        isloading,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const AuthConsummer = AuthContext.Consumer; //

export default AuthContext; // exportando noosso contexto
