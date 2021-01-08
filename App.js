import React from 'react';
import { StyleSheet } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import MyListScreen from './screens/MyListScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';


export default class App extends React.Component {
  render(){
    return (
        <AppContainer/>
    );
  }
}


const switchNavigator = createSwitchNavigator({
   SignUpLoginScreen : {screen:SignUpLoginScreen},
   MyListScreen : {screen:MyListScreen}
})

const AppContainer  = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
