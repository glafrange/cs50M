import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import {vibrate} from '../utils';

const WORKTIMER = "Work Timer";
const BREAKTIMER = "Break Timer";
const STARTTIMERTEXT = "Start";
const PAUSETIMERTEXT = "Pause";
export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
      startTime: props.time,
      timerType : WORKTIMER,
      toggleButtonText : STARTTIMERTEXT
    }
  }

  updateTime = (newTime) => {
    this.pauseTimer();
    this.setState({ startTime: newTime });
    this.setState({ time: newTime });
  }

  toggleTimer = () => {
    if (this.state.toggleButtonText === STARTTIMERTEXT) {
      this.startTimer();
    }
    else if (this.state.toggleButtonText === PAUSETIMERTEXT) {
      this.pauseTimer();
    }
  }

  startTimer = () => {
    this.setState({ intervalID: setInterval(() => this.decrementTimer(), 1000) });
    this.setState({ toggleButtonText: "Pause" });
  }

  pauseTimer = () => {
    this.setState({ toggleButtonText: "Start"});
    clearInterval(this.state.intervalID);
  }

  resetTimer = () => {
    this.pauseTimer();
    this.setState({ timerType: WORKTIMER });
    this.setState({ time: this.state.startTime });
  }

  changeTimerType = () => {
    if (this.state.timerType == WORKTIMER) {
      this.setState({ timerType: BREAKTIMER });
    } else {
      this.setState({ timerType: WORKTIMER });
    }
  }

  decrementTimer = () => {
    if (this.state.time > 0) {
      this.setState(prevState => ({ time: prevState.time - 1 }));
    } else {
      // vibrate();
      this.setState({ time: this.state.startTime });
      this.changeTimerType();
      // this.startTimer();
    }
  }

  render() {
    return (
      <View>
        <View style={styles.timer}>
          <Text>{this.state.timerType}</Text>
          <Text>{this.state.time}</Text>
        </View>
        <View>
          <Button title={this.state.toggleButtonText} onPress={this.toggleTimer}></Button>
          <Button title="Reset" onPress={this.resetTimer}></Button>
        </View>
        <TextInput style={styles.timeInput} onEndEditing={(e) => this.updateTime(parseInt(e.nativeEvent.text))}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    backgroundColor: '#C1A7E1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeInput: {
    height: 40,
    borderColor: "gray"
  }
});