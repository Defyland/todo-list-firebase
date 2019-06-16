import React from "react"
import * as views from "../views"
import { DrawerToggle } from '../components/Header'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation"

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
    },
    EditTodo: { 
      screen: views.EditTodo,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          headerTitle: "Edição de tarefas",
        }
      }
    },
    NewTodo: { 
      screen: views.NewTodo,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          headerTitle: "Adicionar nova tarefa",
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#049be5',
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
    contentComponent: views.Drawer,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerTintColor: 'white'
    })
  }
);

export default createAppContainer(MyDrawerNavigator);