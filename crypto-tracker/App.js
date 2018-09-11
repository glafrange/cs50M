import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator } from 'react-navigation';
import CryptoList from './containers/CryptoList';

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
