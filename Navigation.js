import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MainRouter from './Pages/Main/MainRouter'

const Tab = createBottomTabNavigator();

export default function App_m() {

  
  return (
<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainRouter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}