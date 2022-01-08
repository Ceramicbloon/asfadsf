import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import IssLocation from './screens/IssLocation';
import MeteorScreen from './screens/Meteor';

export default class App extends React.Component {
  render(){
    return(
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component = {Home} ></Stack.Screen>
        <Stack.Screen name='IssLocation' component = {IssLocation}></Stack.Screen>
        <Stack.Screen name='MeteorScreen' component = {MeteorScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    ) 
  }
    
  
}

const styles = StyleSheet.create({
  
});

const Stack = createStackNavigator()

