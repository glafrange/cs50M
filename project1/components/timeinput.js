import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class TimeInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TextInput onChangeText={(text) => this.props.updateTime(text)}/>
      </View>
    )
  }
}