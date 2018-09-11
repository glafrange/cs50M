import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CryptoListItem = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.cryptoData.name} : {props.cryptoData.quotes.USD.price}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: 'black'
  }
});

export default CryptoListItem;