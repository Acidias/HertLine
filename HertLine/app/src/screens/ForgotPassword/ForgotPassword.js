import React, { useState, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';

import { SafeAreaView, StyleSheet, View, ImageBackground, Text } from 'react-native';

//My Files
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import BackButton from '../../components/BackButton';


//Auth
import auth from '../../config/firebase.js';
import { sendPasswordResetEmail } from "firebase/auth";


const ForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);



  const handleEmailChange = (text) => {
    setEmail(text);
  };

  useEffect(() => {
    let timer;
    if (isButtonDisabled) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isButtonDisabled]);

  useEffect(() => {
    if (countdown === 0) {
      setIsButtonDisabled(false);
      setCountdown(30);
    }
  }, [countdown]);

  const handleSendRecovery = async () => {
    // Implement your "Send Recovery" functionality here
    console.log("Email: ", email);
    setIsButtonDisabled(true);

    try{
      await sendPasswordResetEmail(auth, email);
      console.log("Email sent");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <ImageBackground source={require('../assets/images/doc.jpg')} style={styles.imageBackground}>
      <SafeAreaView style={styles.root}>
        <Stack.Screen
          options={{
          headerShown: false,
          }}
        />
        <BackButton />
        <View style={styles.overlay}>
          <View style={styles.inputsContainer}>
            <View style={styles.firstField}>
              <Text style={styles.passwordRecoveryText}>
                Please enter your email to receive a password recovery email:
              </Text>
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
            </View>
            {isButtonDisabled && (
              <Text style={styles.countdownText}>
                Resend in {countdown} seconds
              </Text>
            )}
          </View>
          <CustomButton
              title="Send Recovery Email"
              onPress={handleSendRecovery}
              buttonStyle={isButtonDisabled ? styles.disabledButton : styles.button}
              textStyle={styles.buttonText}
            />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 100,
    backgroundColor: 'rgba(128, 0, 128, 0.3)', // Purple color with 30% opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    //height: '50%',
    marginBottom: 10,
    //backgroundColor: 'rgba(255, 255, 255, 0.3)', // White color with 70% opacity
  },
  recoveryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    //height: '50%',
    //marginBottom: 20,
    //backgroundColor: 'rgba(255, 255, 255, 0.3)', // White color with 70% opacity
  },
  customInputStyle: {
    width: '100%',
    marginBottom: 10,
  },
  passwordRecoveryText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  countdownText: {
    color: 'white',
    fontSize: 16,
    marginTop: -15,
    marginBottom: 10,
    marginLeft: '45%',
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
  disabledButton: {
    width: 200,
    height: 40,
    backgroundColor: 'gray',
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
});

export default ForgotPassword;
