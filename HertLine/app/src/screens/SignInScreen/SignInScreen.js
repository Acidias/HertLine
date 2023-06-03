import React from 'react'
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";


import { View, Text, ScrollView, SafeAreaView, ImageBackground, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

//My Files
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import BackButton from '../../components/BackButton'
import auth from '../../config/firebase.js';


const SignInScreen = () => {
  const router = useRouter();


  //console.log("Connection Successfull on SignInScreen: ", auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };



  const handleForgotPassword = () => {
    // Implement your "Forgot Password" functionality here
    console.log('Forgot Password button pressed');
    router.push('/src/screens/ForgotPassword')

  };

  const Submit = async () => {
    console.log("Email: ", email);
    console.log("Password: ", password);

    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in
        const user = userCredential.user;
        console.log('User signed in: '+ user.email);
        router.push('/src/screens/HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };


  return (
<ImageBackground source={require('../assets/images/doc.jpg')} style={styles.imageBackground}>
            <SafeAreaView style={styles.root}>
              {/* Removing Header */}
              <Stack.Screen
                options={{
                headerShown: false,
                }}
              />
                {/* Welcome & Logo */}
                <View style={styles.overlay}>
                    <BackButton />
                    {/* Buttons */}
                    <View style={styles.inputsContainer}>
                      <CustomInput
                        placeholder="Email"
                        value={email}
                        onChangeText={handleEmailChange}
                        inputStyle={styles.customInputStyle}
                        icon={{
                          name: 'user',
                          type: 'font-awesome',
                          color: 'purple',
                        }}
                      />

                      <CustomInput
                        placeholder="Password"
                        value={password}
                        onChangeText={handlePasswordChange}
                        inputStyle={styles.customInputStyle}
                        icon={{
                          name: 'lock',
                          type: 'font-awesome',
                          color: 'purple',
                        }}
                        secureTextEntry
                      />
                      <TouchableOpacity onPress={handleForgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                      </TouchableOpacity>

                      <CustomButton
                        title="Sign In"
                        onPress={Submit}
                      />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
},
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
},
overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 0, 128, 0.3)', // Purple color with 30% opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -50,
    marginLeft: 200,
  },
  logo: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: 'purple',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  customInputStyle: {
    width: '100%',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 16,
    marginTop: -5,
    marginBottom: 20,
    marginLeft: '55%', // 'auto' positions the element to the right
    textDecorationLine: 'underline',
  },
});

export default SignInScreen