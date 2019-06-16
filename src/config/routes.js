import React from "react"
import { Button } from 'react-native'
import * as views from "../views"
import { DrawerToggle, Drawer } from '../components/Header'

import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer } from "react-navigation"

// static navigationOptions = {
//   headerTitle: "Lista de Tarefas",
//   headerLeft: (
//     <Button
//       onPress={() => alert('This is a button!')}
//       title="Info"
//       color="#fff"
//     />
//   ),
//   headerStyle: {
//     backgroundColor: '#f4511e',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// };


const AppNavigator = createStackNavigator(
  {
    Home: { 
      screen: views.Home,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          headerTitle: "Lista de tarefas",
          headerLeft: (
            <DrawerToggle navigation={navigation} />
          ),
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      // headerTitle: "Lista de Tarefas",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppNavigator,
    },
  },
  {
    initialRouteName: 'Home',
    lazy: true,
    contentComponent: views.Drawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    navigationOptions: () => ({
      headerBackTitle: null,
      headerTintColor: 'white'
    })
  }
);

export default createAppContainer(MyDrawerNavigator);