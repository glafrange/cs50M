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
    // console.log(this.props.crypto);
    return (
      // <ScrollView style={{paddingTop: 10, marginBottom: 10, paddingBottom: 10}}>
        // <FlatList
        //   data={this.props.crypto}
        //   keyExtractor={(cryptoData, index) => cryptoData.name}
        //   renderItem={({item}) => <CryptoListItem cryptoData={item} />}
        // />
      // </ScrollView>
      <ScrollView style={{paddingTop:20, paddingBottom: 100}}>
        {this.renderListItems()}
      </ScrollView>
    );
  }
}

function mapStateToProps (state) {
  console.log(state);
  return { crypto: state.crypto }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoList)