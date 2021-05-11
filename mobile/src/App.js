import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import UserPage from './UserPage'
import ItemListScreen from './ItemListScreen'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function drawerToggleButton(navigation) {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" style={{color: 'black', padding: 10, marginLeft: 10, fontSize: 20}}/>
    </TouchableOpacity>
  );
}

function RootStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            drawerToggleButton(navigation)
          ),
        })}>
          <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}

function HomeScreen () {
  return (
    <ItemListScreen></ItemListScreen>
  );
}

function UserStack () {
  return (
    <Stack.Navigator
        initialRouteName="User"
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            drawerToggleButton(navigation)
          ),
        })}>
          <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
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
          <Drawer.Navigator 
            initialRouteName="Root"
          >
              <Drawer.Screen name="Root" component={RootStack} />
              <Drawer.Screen name="User" component={UserStack} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}