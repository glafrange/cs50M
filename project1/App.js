import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {vibrate} from './utils';
import Timer from './components/timer';
import TimeInput from './components/timeinput';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  updateTime = (newTime) => {
    this.setState({
      time: newTime
    });
  }

  componentWillMount = () => {
    this.updateTime(15);
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer style={styles.timer} time={this.state.time}/>
        <TimeInput updateTime={this.updateTime}/>
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
