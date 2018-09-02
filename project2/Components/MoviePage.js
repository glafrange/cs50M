import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';

const testData = {"Title":"Clerks","Year":"1994","Rated":"R","Released":"09 Nov 1994","Runtime":"92 min","Genre":"Comedy","Director":"Kevin Smith","Writer":"Kevin Smith","Actors":"Brian O'Halloran, Jeff Anderson, Marilyn Ghigliotti, Lisa Spoonauer","Plot":"A day in the lives of two convenience clerks named Dante and Randal as they annoy customers, discuss movies, and play hockey on the store roof.","Language":"English","Country":"USA","Awards":"5 wins & 10 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzE1Njk0NmItNDhlMC00ZmFlLWI4ZTUtYTY4ZjgzNjkyMTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"7.8","imdbVotes":"196,066","imdbID":"tt0109445","Type":"movie","DVD":"29 Jun 1999","BoxOffice":"N/A","Production":"Miramax Films","Website":"N/A","Response":"True"};

export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={{paddingTop: 20}}>
        <View>
          <Image source={{uri: testData.Poster}} style={{height:200, width:300}}/>
        </View>
        <ScrollView>
          {/* <Text>{this.props.navigation.getParam("movieTitle")}</Text> */}
          <Text><Text style={{fontSize: 25}}>{testData.Title}</Text> ({testData.Year})</Text>
          <Text>{testData.Plot}</Text>
        </ScrollView>
      </View>
    );
  }

}

