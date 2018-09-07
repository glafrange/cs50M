import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CryptoListItem extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.cryptoData.ticker} : {this.props.cryptoData.price}</Text>
      </View>
    )
  }
}