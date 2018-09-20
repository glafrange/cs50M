import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CryptoListItem = (props) => {
  const {ticker, price} = props.cryptoData;
  const iconPath = "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/color/" + ticker.toLowerCase() + '.png';
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: iconPath}}
        style={{width: 50, height: 50}}
      />
      <Text>
        {ticker} : {price}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: 'black'
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textInfo: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default CryptoListItem;