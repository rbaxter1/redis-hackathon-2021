import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import UserPage from './UserPage'
import ItemListScreen from './ItemListScreen'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function RootScreen() {
  return (
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }} />
      </Stack.Navigator>
  );
}

function HomeScreen () {
  return (
    <ItemListScreen></ItemListScreen>
  );
}

function UserScreen () {
  return (
    <UserPage></UserPage>
  );
}

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Root" component={RootScreen} />
              <Drawer.Screen name="User" component={UserScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}