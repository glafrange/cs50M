import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator } from 'react-navigation';
import CryptoList from './containers/CryptoList';
// import AddTicker from 'containers/addTicker';

// const store = createStore();

// const AppNavigator = createStackNavigator(
//   {
//     cryptoList: cryptoList,
//     addTicker: addTicker
//   },
//   {
//     initialRouteName: "cryptoList"
//   }
// )

export default class App extends React.Component {
  render() {
    return (
      <CryptoList />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
