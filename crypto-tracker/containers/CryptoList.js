import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CryptoListItem from '../components/CryptoListItem';

const testData = [{ticker:"BTC", price:6432.68}, {ticker:"ETH", price:227.58}];

export default class CryptoList extends React.Component {
  render() {
    return (
      <ScrollView style={{paddingTop: 10}}>
        <FlatList 
          data={testData}
          keyExtractor={(cryptoData, index) => cryptoData.ticker}
          renderItem={({item}) => <CryptoListItem cryptoData={item} />}
        />
      </ScrollView>
    );
  }
}
