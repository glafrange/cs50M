import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentWillMount = () => {
    fetch('http://www.omdbapi.com/?apikey=d2043b23&t=' + this.props.navigation.getParam("movieTitle"))
      .then(res => res.json())
      .then(res => this.setState({data: res}));
  }
  
  render() {
    return (
      <View style={{paddingTop: 20}}>
        <View>
          <Image source={{uri: this.state.data.Poster}} style={{height:200, width:300}}/>
        </View>
        <ScrollView>
          <Text><Text style={{fontSize: 25}}>{this.state.data.Title}</Text> ({this.state.data.Year})</Text>
          <Text>{this.state.data.Plot}</Text>
        </ScrollView>
      </View>
    );
  }

}

