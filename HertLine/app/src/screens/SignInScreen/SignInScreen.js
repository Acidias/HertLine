import React from 'react'

import { Stack, useRouter } from 'expo-router';
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const SignInScreen = () => {
  return (
<ImageBackground source={require('../assets/images/doc.jpg')} style={styles.imageBackground}>
            <SafeAreaView style={styles.root}>

                {/* Welcome & Logo */}
                <View style={styles.overlay}>
                    {/* Buttons */}
                    <View style={styles.inputsContainer}>
                      <Text>
                        Username:
                      </Text>
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
});

export default SignInScreen