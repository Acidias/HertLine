// withAuthProtection.js
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import auth from './src/config/firebase.js';
import SignInScreen from './src/screens/SignInScreen';



export default function withAuthProtection(Component) {
  return function AuthProtectedComponent(props) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setLoading(false);
      });

      return unsubscribe; // Clean up subscription on unmount
    }, []);

    if (loading) {
      return <ActivityIndicator />;
    }

    if (!currentUser) {
      return <SignInScreen />;
    }

    return <Component {...props} />;
  };
}
