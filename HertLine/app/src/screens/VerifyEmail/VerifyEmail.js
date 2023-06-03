import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, View, ImageBackground, Text } from 'react-native';


//My Files
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import BackButton from '../../components/BackButton';

const VerifyEmail = () => {
    const router = useRouter();

    const [Text, setText] = useState('');

    const handleVerifyChange = (text) => {
        setText(text);
    };

    const handleVerify = () => {
        if (Text === '123456') {
            router.push('/src/screens/SignInScreen');
        } else {
            console.log('Invalid Verification Code');
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
            <CustomInput
                placeholder="Code"
                value={Text}
                onChangeText={handleVerifyChange}
                inputStyle={styles.customInputStyle}
                icon={{
                    name: 'lock',
                    type: 'font-awesome',
                    color: 'purple',
                }}
            />

            <CustomButton
              title="Verify"
              onPress={handleVerify}
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

export default VerifyEmail;
