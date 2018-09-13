import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import FetchCoinData from '../actions/FetchCoinData';
import CryptoListItem from '../components/CryptoListItem';

class CryptoList extends React.Component {

  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderListItems = () => {
    const {crypto} = this.props;
    return crypto.data.map((cryptoData, index) => {
      return (
      <CryptoListItem 
        key={index}
        cryptoData={cryptoData}
      />
      )
    });
  }

  render() {
    return (
      <ScrollView style={{paddingTop:20, paddingBottom: 100}}>
        {this.renderListItems()}
      </ScrollView>
    );
  }
}

function mapStateToProps (state) {
  console.log(state.crypto.data);
  return { crypto: state.crypto }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoList)