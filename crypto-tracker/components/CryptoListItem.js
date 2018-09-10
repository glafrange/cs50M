import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CryptoListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.cryptoData.ticker} : {this.props.cryptoData.price}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: 'black'
  }
});