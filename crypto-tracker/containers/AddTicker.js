import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStore } from 'redux';

class AddTicker extends React.Component {
  render() {
    return (
      <View>
        <Text>AddTicker</Text>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return { tickerList: state.tickerList.tickers };
}

export default connect(mapStateToProps)(AddTicker)