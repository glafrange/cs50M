import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {vibrate} from './utils';
import Timer from './components/timer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer style={styles.timer} time="10"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8CD9B1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    backgroundColor: '#C1A7E1',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
