import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {vibrate} from './utils';
import Timer from './components/timer';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer time={60}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    backgroundColor: '#8CD9B1',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
