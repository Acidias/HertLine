import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const CustomInput = ({ placeholder, value, onChangeText, inputStyle, icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
      {icon && (
        <Icon
          name={icon.name}
          type={icon.type}
          color={icon.color}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[styles.input, inputStyle, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
     inputContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          borderColor: 'grey',
          borderShadow: 50,
          borderWidth: 1.5,
          borderRadius: 20,
          paddingLeft: 10,
          marginBottom: 15,
     },
     inputContainerFocused: {
          borderColor: 'white', // Customize the focused border color
          borderWidth: 2, // Customize the focused border width
          shadowColor: 'grey', // Customize the shadow color
     },
     icon: {
          marginRight: 10,
     },
     input: {
          flex: 1,
          fontSize: 16,
          height: 40,
          marginTop: 10,
          color: 'white'
     },
     inputFocused: {
          //borderWidth: 2, // Customize the focused border width
          //borderColor: 'blue', // Customize the focused border color
     },
});

export default CustomInput;
