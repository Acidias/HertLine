import React, { useState, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

//Auth
import withAuthProtection from '../../../withAuthprotection';
import auth from '../../config/firebase.js';


//My Files
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import BackButton from '../../components/BackButton';

const ProfileScreen = () => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Stack.Screen options={{ headerShown: false }}/>
      <View style={styles.overlay}>
        <BackButton />
        <Text>Profile</Text>
        {currentUser && <Text>Welcome, {currentUser.email}</Text>}
      </View>
    </SafeAreaView>
  );
};

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
});

export default withAuthProtection(ProfileScreen);