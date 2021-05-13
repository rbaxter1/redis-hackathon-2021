import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import UserPage from './UserPage'
import ItemListScreen from './ItemListScreen'
import CreateScreen from './CreateScreen'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function drawerToggleButton(navigation) {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" style={{color: 'black', padding: 10, marginLeft: 10, fontSize: 20}}/>
    </TouchableOpacity>
  );
}

function createButton(navigation) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Icon name="add" style={{color: 'black', padding: 10, marginLeft: 10, fontSize: 20}}/>
    </TouchableOpacity>
  );
}

function NetworksStack() {
  return (
      <Stack.Navigator
        initialRouteName="Networks"
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            drawerToggleButton(navigation)
          ),
          headerRight: () => (
            createButton(navigation)
          ),
        })}>
          <Stack.Screen name="Networks" component={NetworksScreen} />
          <Stack.Screen name="Create" component={NewNetworkScreen} />
      </Stack.Navigator>
  );
}

function NetworksScreen () {
  return (
    <ItemListScreen isNetwork={true}></ItemListScreen>
  );
}

function NewNetworkScreen () {
  return (
    <CreateScreen ></CreateScreen>
  );
}

function MyNetworksStack() {
  return (
      <Stack.Navigator
        initialRouteName="My Networks"
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            drawerToggleButton(navigation)
          ),
        })}>
          <Stack.Screen name="My Networks" component={MyNetworksScreen} />
      </Stack.Navigator>
  );
}

function MyNetworksScreen () {
  return (
    <ItemListScreen></ItemListScreen>
  );
}

function MyItemsStack() {
  return (
      <Stack.Navigator
        initialRouteName="My Items"
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            drawerToggleButton(navigation)
          ),
        })}>
          <Stack.Screen name="My Items" component={MyItemsScreen} />
      </Stack.Navigator>
  );
}

function MyItemsScreen () {
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
            initialRouteName="All Networks" >
              <Drawer.Screen name="All Networks" component={NetworksStack} />
              <Drawer.Screen name="My Networks" component={MyNetworksStack} />
              <Drawer.Screen name="My Items" component={MyItemsStack} />
              <Drawer.Screen name="User" component={UserStack} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}