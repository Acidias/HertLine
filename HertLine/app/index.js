import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from 'expo-router';
import { userRouter } from 'expo-router';
import { Link } from 'expo-router';

//Files
import SignInScreen from './src/screens/SignInScreen';

const Home = () => {
    const router = useRouter();

    const navigateLogin = () => {
        console.log("Login button pressed");
        router.push('/src/screens/SignInScreen');
    };

    const navigateRegister = () => {
        console.log("Register button pressed");
    };
    
    return (
        <ImageBackground source={require('./src/screens/assets/images/doc.jpg')} style={styles.imageBackground}>
            <SafeAreaView style={styles.root}>
                <Stack.Screen
                    options={{
                    headerShown: false,
                    }}
                />
                {/* Welcome & Logo */}
                <View style={styles.overlay}>
                    <Text style={styles.overlayText}>Welcome to</Text>
                    <Image source={require('./src/screens/assets/images/logo.png')} style={styles.logo} />
                
                
                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={navigateLogin}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateRegister}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Register</Text>
                            </View>
                        </TouchableOpacity>
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

export default Home;