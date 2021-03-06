import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>CryptoTracker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
      display: "flex",
      marginTop: 55,
      alignItems: "center",
      justifyContent: "center"
  },
  header: {
      fontWeight: "bold",        
      fontSize: 20,
  }
})

export default Header;