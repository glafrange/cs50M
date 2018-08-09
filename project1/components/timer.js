import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {vibrate} from '../utils';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: parseInt(props.time)
    };
  }

  componentDidMount = () => {
    this.startTimer();
  }

  startTimer = () => {
    this.setState({
      intervalID: setInterval(() => this.decrement(), 1000)
    });
  }

  decrement = () => {
    if (this.state.time > 0) {
      this.setState(prevState => ({
        time: prevState.time - 1
      }));
    } else {
      // vibrate();

      clearInterval(this.state.intervalID);
    }
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text>{this.state.time}</Text>
      </View>
    );
  }
}