import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const CryptoListItem = (props) => {
  const {TICKER, PRICE} = props.cryptoData;
  const iconPath = "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/color/" + TICKER.toLowerCase() + ".png";
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <View style={styles.iconContainer}>
          <Image 
            source={{uri: iconPath}}
            style={styles.icon}
          />
        </View>
        <View style={styles.textInfoContainer}>
          <Text>{TICKER}</Text>   
          <Text>{PRICE}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: "black",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  icon: {
    height: 30,
    width: 30
  },
  textInfoContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default CryptoListItem;