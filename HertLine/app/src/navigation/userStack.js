import React from "react";
import { Modal, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function UserStack() {
     return (
     <NavigationContainer>
          <Modal>
          <View>
               <Text>Hello World!</Text>
          </View>
          </Modal>
     </NavigationContainer>
     );
     }