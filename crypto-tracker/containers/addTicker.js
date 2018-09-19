import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { createStore } from 'redux';

// actions
import AddNewTicker from '../actions/AddNewTicker';
import FetchCoinData from '../actions/FetchCoinData';

class AddTicker extends React.Component {
  submitTicker = () => {
    this.props.AddNewTicker(this.state.text);
    this.props.FetchCoinData();
  }

  render() {
    return (
      <View>
        <TextInput style={{marginTop: 25, paddingHorizontal: 5, paddingBottom: 20, marginBottom: 50, borderColor:"black", borderWidth:1}} onChangeText={(text) => this.setState({text: text.toUpperCase()})}/>
        <Button title="AddTicker" onPress={this.submitTicker} />
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