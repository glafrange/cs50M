import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class TimeInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TextInput style={this.props.style} onEndEditing={(e) => this.props.updateTime(e.nativeEvent.text)}/>
      </View>
    )
  }
}