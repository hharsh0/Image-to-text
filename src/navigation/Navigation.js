import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen'
import ImagePickScreen from '../screens/ImagePickScreen';
import MainScreen from '../screens/MainScreen';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animation: "slide_from_right" }}
      >
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="ImagePick" component={ImagePickScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation