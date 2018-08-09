import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {vibrate} from '../utils';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      time: parseInt(props.time),
      curMaxTime: parseInt(props.time),
      timerType : "Work"
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.props.time = nextProps.time;
  }

  updateTime = (newTime) => {
    this.setState({ time: parseInt(newTime) });
  }

  updateCurMaxTime = () => {
    this.setState({ curMaxTime: this.props.time });
  }

  startTimer = () => {
    this.stopTimer();
    // this.setState({ timerType: "Work" });
    // this.updateTime(this.props.time);
    // this.updateCurMaxTime(this.props.time);
    this.setState({ intervalID: setInterval(() => this.decrementTimer(), 1000) });
  }

  stopTimer = () => {
    clearInterval(this.state.intervalID);
    this.setState({ time: 0 });
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({ timerType: "Work" });
    this.updateTime(this.props.time);
    this.updateCurMaxTime(this.props.time);
  }

  changeTimerType = () => {
    if (this.state.timerType == "Work") {
      this.setState({ timerType: "Rest" });
    } else {
      this.setState({ timerType: "Work" });
    }
  }

  decrementTimer = () => {
    if (this.state.time > 0) {
      this.setState(prevState => ({ time: prevState.time - 1 }));
    } else {
      // vibrate();
      // this.stopTimer();
      this.updateTime(this.state.curMaxTime);
      this.changeTimerType();
      // this.startTimer();
    }
  }

  render() {
    return (
      <View>
        <View style={this.props.style}>
          <Text>{this.state.timerType}</Text>
          <Text>{this.state.time}</Text>
        </View>
        <Button title="Start" onPress={this.startTimer}></Button>
        <Button title="Stop" onPress={this.stopTimer}></Button>
        <Button title="Reset" onPress={this.resetTimer}></Button>
      </View>
    );
  }
}