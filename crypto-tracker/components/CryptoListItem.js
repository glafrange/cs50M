import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CryptoListItem = (props) => {
  const {ticker, price} = props.cryptoData;
  const iconPath = "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/color/" + ticker.toLowerCase() + '.png';
  return (
    <View style={styles.container}>
      <Text> 
        <Image 
          source={{uri: iconPath}}
          style={{width: 50, height: 50}}
        />
          {ticker} : {price}
      </Text>
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