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
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text>{this.state.timerType}</Text>
          <Text>{this.state.time}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={{height: 20}}>
            <Button title={this.state.toggleButtonText} style={styles.button} onPress={this.toggleTimer}></Button>
          </View>
          <View style={{height: 20}}>
            <Button title="Reset" style={styles.button} onPress={this.resetTimer}></Button>
          </View>
        </View>
        <View style={styles.timeInput}>
          <TextInput onEndEditing={(e) => this.updateTime(parseInt(e.nativeEvent.text))}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8CD9B1'
  },
  timer: {
    flex: 2,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#8CD9B1'
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  timeInput: {
    flex: 1,
    justifyContent: 'center',
    borderColor: "gray"
  }
});