import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';

const MoviePageLink = props => {
  return(
    <TouchableOpacity 
      style={{"padding": 35}}
      onPress={() => props.navigation.navigate('MoviePage', {
        movieTitle: props.movieData.Title
      })}
    >
        <Text><Image source={{uri: props.movieData.Poster}} style={{width:100, height:100}}/>   {props.movieData.Title}</Text>
    </TouchableOpacity>
  )
}

export default class SearchPage extends React.Component {
  state = {
    data: {}
  }

  handleTextChange = (text) => {
    fetch('http://www.omdbapi.com/?apikey=d2043b23&s=' + text)
      .then(res => res.json())
      .then(res => this.setState({data: res}));
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: "flex-start"}}>
        <TextInput style={{width: 350, paddingTop: 50}} placeholder="Search for a movie" onChangeText={this.handleTextChange}/>
        <ScrollView style={{flex: 1}}>
          <FlatList 
            data={this.state.data.Search}
            keyExtractor={(movieData, index) => index}
            renderItem={({item}) => <MoviePageLink movieData={item} navigation={this.props.navigation}/>}
          />
        </ScrollView>
      </View>
    )
  }
}