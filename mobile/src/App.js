import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import UserPage from './UserPage'
import ItemListScreen from './ItemListScreen'
import CreateScreen from './CreateScreen'
import ItemDetailScreen from './ItemDetailScreen'
import OffersScreen from './OffersScreen'

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
  const route = useRoute();
  const network = route.params ? route.params.network : ""
  console.log("createbutton route: " + JSON.stringify(route));
  console.log("createbutton network: " + network);
  if (route.name === "Create" || route.name === "Item Details") {
    return null;
  }
  let context;
  if (route.name === "Networks" || route.name === "My Networks") {
    context = "network"
  }
  if (route.name === "Items" || route.name === "My Items") {
    context = "item"
  }
  return (
    <TouchableOpacity onPress={() => {
        navigation.navigate('Create', {context: context, network: network})
      }
    }>
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
          <Stack.Screen name="Create" component={CreateThingScreen} />
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

function CreateThingScreen ({route}) {
  const {context, network} = route.params;
  return (
    <CreateScreen context={context} network={network}></CreateScreen>
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
          headerRight: () => (
            createButton(navigation)
          ),
        })}>
          <Stack.Screen name="My Networks" component={MyNetworksScreen} />
          <Stack.Screen name="Items" component={MyNetworkItemsScreen} />
          <Stack.Screen name="Item Details" component={ItemDetailsScreen} />
          <Stack.Screen name="Create" component={CreateThingScreen} />
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
          <Stack.Screen name="Create" component={CreateThingScreen} />
          <Stack.Screen name="Item Details" component={ItemDetailsScreen} />
      </Stack.Navigator>
  );
}

function MyItemsScreen ({navigation}) {
  return (
    <ItemListScreen context="my items" navigation={navigation}></ItemListScreen>
  );
}

function ItemDetailsScreen ({navigation, route}) {
  const {item} = route.params;
  console.log("item: " + item);
  return (
    <ItemDetailScreen navigation={navigation} item={item}></ItemDetailScreen>
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

function UserScreen ({navigation}) {
  return (
    <UserPage navigation={navigation}></UserPage>
  );
}

function OffersReceivedScreen () {
  return (
    <Stack.Navigator
    initialRouteName="Offers Received"
    screenOptions={({navigation}) => ({
      headerLeft: () => (
        drawerToggleButton(navigation)
      ),
    })}>
      <Stack.Screen name="Offers Received" component={OffersReceived} />
    </Stack.Navigator>
  );
}

function OffersReceived () {
  return (
    <OffersScreen context="received"></OffersScreen>
  );
}

function MyOffersScreen () {
  return (
    <Stack.Navigator
    initialRouteName="My Offers"
    screenOptions={({navigation}) => ({
      headerLeft: () => (
        drawerToggleButton(navigation)
      ),
    })}>
      <Stack.Screen name="My Offers" component={MyOffers} />
    </Stack.Navigator>
  );
}

function MyOffers () {
  return (
    <OffersScreen context="my offers"></OffersScreen>
  );
}

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="User" >
              <Drawer.Screen name="All Networks" component={NetworksStack} />
              <Drawer.Screen name="My Networks" component={MyNetworksStack} />
              <Drawer.Screen name="Browse Items" component={MyItemsStack} />
              <Drawer.Screen name="User" component={UserStack} />
              <Drawer.Screen name="Offers Received" component={OffersReceivedScreen} />
              <Drawer.Screen name="My Offers" component={MyOffersScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}