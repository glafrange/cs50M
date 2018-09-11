import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import CryptoList from './containers/CryptoList';
import Store from './components/Store';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{flex:1}}>
          <Header />
          <CryptoList />
        </View>
      </Provider>
    );
  }
}
