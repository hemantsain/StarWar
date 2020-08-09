import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../common/routes';
import {Colors} from '../styles';
import Auth from '../screens/Auth/Auth';
import Search from '../screens/Search/Search';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.themeColor,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 26,
  },
  headerTitleAlign: 'left',
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.auth}
      screenOptions={screenOptions}>
      <Stack.Screen name={routes.auth} component={Auth} />
      <Stack.Screen name={routes.search} component={Search} />
    </Stack.Navigator>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
