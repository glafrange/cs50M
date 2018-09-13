import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import CryptoList from './containers/CryptoList';
import Store from './components/Store';
import Header from './components/Header';
import AddTicker from './containers/AddTicker';

const AppNavigator = createBottomTabNavigator(
  {
    CryptoList: CryptoList,
    AddTicker: AddTicker
  },
  {
    initialRouteName: "CryptoList",
    order: ["CryptoList", "AddTicker"]
  }
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigator />
        {/* <View style={{flex:1}}>
          <Header />
          <CryptoList />
        </View> */}
      </Provider>
    );
  }
}
