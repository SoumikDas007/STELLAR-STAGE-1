import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homeScreen';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCraft';
import StarMap from './screens/StarMap';
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="homeScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="homeScreen" component={HomeScreen} />
          <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
          <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
           <Stack.Screen name="StarMap" component={StarMap} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
