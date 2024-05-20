import React, {createContext, useState, useEffect} from 'react';
import {db} from '../firestore/firestore';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [serviceLevel, setServiceLevel] = useState('');
  const [loading, setLoading] = useState(true);

  const getCurrentServiceLevel = async () => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      console.log(currentUser);
      setServiceLevel('bronze');
    }
    console.log('current service level:', serviceLevel);
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        // getCurrentServiceLevel();
        console.log('user context now is:', user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{user, setUser, serviceLevel, loading}}>
      {children}
    </AuthContext.Provider>
  );
};
