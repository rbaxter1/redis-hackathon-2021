import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import UserPage from './UserPage'
import ItemListScreen from './ItemListScreen'
import CreateScreen from './CreateScreen'
import ItemDetailScreen from './ItemDetailScreen'

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
          <Stack.Screen name="Items" component={NetworkItemsScreen} />
          <Stack.Screen name="Create" component={NewNetworkScreen} />
          <Stack.Screen name="Item Details" component={ItemDetailsScreen} />
      </Stack.Navigator>
  );
}

function NetworksScreen () {
  return (
    <ItemListScreen context="all networks"></ItemListScreen>
  );
}

function NetworkItemsScreen ({route}) {
  const {network} = route.params;
  return (
    <ItemListScreen context="network items" network={network}></ItemListScreen>
  );
}

function NewNetworkScreen () {
  return (
    <CreateScreen context="network"></CreateScreen>
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
          <Stack.Screen name="Items" component={MyNetworkItemsScreen} />
          <Stack.Screen name="Item Details" component={ItemDetailsScreen} />
      </Stack.Navigator>
  );
}

function MyNetworksScreen () {
  return (
    <ItemListScreen context="my networks"></ItemListScreen>
  );
}

function MyNetworkItemsScreen ({route}) {
  const {network} = route.params;
  return (
    <ItemListScreen context="network items" network={network}></ItemListScreen>
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
          headerRight: () => (
            createButton(navigation)
          ),
        })}>
          <Stack.Screen name="My Items" component={MyItemsScreen} />
          <Stack.Screen name="Create" component={NewItemScreen} />
          <Stack.Screen name="Item Details" component={ItemDetailsScreen} />
      </Stack.Navigator>
  );
}

function MyItemsScreen ({navigation}) {
  return (
    <ItemListScreen context="my items" navigation={navigation}></ItemListScreen>
  );
}

function NewItemScreen () {
  return (
    <CreateScreen context="item"></CreateScreen>
  );
}

function ItemDetailsScreen ({route}) {
  const {item} = route.params;
  console.log("item: " + item);
  return (
    <ItemDetailScreen item={item}></ItemDetailScreen>
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