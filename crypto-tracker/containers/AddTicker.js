import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import AddNewTicker from '../actions/AddNewTicker';
import FetchCoinData from '../actions/FetchCoinData';

class AddTicker extends React.Component {
  handleClick = () => {
    this.props.AddNewTicker("LTC");
    this.props.FetchCoinData();
  }

  render() {
    return (
      <View>
        <TextInput style={{paddingTop: 50}}/>
        <TouchableOpacity onPress={this.handleClick}>
          <Text>AddTicker</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return { tickerList: state.tickerList.tickers };
}

const mapDispatchToProps = dispatch => ({
  AddNewTicker: ticker => dispatch(AddNewTicker(ticker)),
  FetchCoinData: () => dispatch(FetchCoinData)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTicker)