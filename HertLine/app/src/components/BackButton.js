import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from 'expo-router';
import { Text } from 'react-native';
import { View } from 'react-native-web';

const BackButton = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
               <Icon name="arrow-back-ios" size={24} color="white" />
               <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          

  );
};

const styles = StyleSheet.create({
     backButton: {
          position: 'absolute',
          top: 50,
          left: 30,
          zIndex: 1,
          flexDirection: 'row',
          alignItems: 'center',
     },
     backText: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
     },

});

export default BackButton;
