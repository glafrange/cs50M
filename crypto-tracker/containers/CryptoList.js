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

  render() {
    // console.log(this.props.crypto);
    return (
      <ScrollView style={{paddingTop: 10}}>
        <FlatList 
          data={this.props.crypto}
          keyExtractor={(cryptoData, index) => cryptoData.name}
          renderItem={({item}) => <CryptoListItem cryptoData={item} />}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps (state) {
  console.log(state);
  return { crypto: state.crypto.data }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoList)