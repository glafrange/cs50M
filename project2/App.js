import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SearchPage from './Components/SearchPage.js';
import MoviePage from './Components/MoviePage.js';

const AppNavigator = createStackNavigator(
  {
    SearchPage: SearchPage,
    MoviePage: MoviePage
  },
  {
    initialRouteName: 'SearchPage'
  }
);

export default class App extends React.Component {
  render() {
    console.log("search");
    return (
      <AppNavigator />
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


