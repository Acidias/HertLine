import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ImageBackground, Text } from 'react-native';
import { useRouter } from 'expo-router';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import BackButton from '../../components/BackButton';

const ResetPassword = () => {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handlePasswordAgainChange = (text) => {
    setPasswordAgain(text);
  };

  const handleResetPassword = () => {
    if (password != passwordAgain){
      console.log('Passwords do not match');
      alert('Passwords do not match');
    } else if (password.length < 6){
      console.log('Password must be at least 6 characters');
      alert('Password must be at least 6 characters');
    } else {
      console.log('Reset Password Success');
      router.push('/src/screens/SignInScreen');
    }
  };

  return (
    <ImageBackground source={require('../assets/images/doc.jpg')} style={styles.imageBackground}>
      <SafeAreaView style={styles.root}>
        <BackButton />
        <View style={styles.overlay}>
          <View style={styles.inputsContainer}>
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

            <CustomInput
              placeholder="Password Again"
              value={passwordAgain}
              onChangeText={handlePasswordAgainChange}
              inputStyle={styles.customInputStyle}
              icon={{
                name: 'lock',
                type: 'font-awesome',
                color: 'purple',
              }}
              secureTextEntry
            />

            <CustomButton
              title="Sign In"
              onPress={handleResetPassword}
              disabled={password !== passwordAgain || password.length < 6}
            />
          </View>
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
    backgroundColor: 'rgba(128, 0, 128, 0.3)', // Purple color with 30% opacity
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default ResetPassword;
