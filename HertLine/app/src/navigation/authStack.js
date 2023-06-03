import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SignInScreen from '../screens/SignInScreen/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import VerifyEmail from '../screens/VerifyEmail/VerifyEmail';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
             cardStyle: {
            backgroundColor: '#0e1529'
          },
          headerShown: false
        }}>
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Reset Password" component={ResetPassword} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          <Stack.Screen name="Verify Email" component={VerifyEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}