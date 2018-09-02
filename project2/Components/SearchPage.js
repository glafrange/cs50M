import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';

const testData = {
  "Response": "True",
  "Search": [
    {
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzE1Njk0NmItNDhlMC00ZmFlLWI4ZTUtYTY4ZjgzNjkyMTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "Title": "Clerks",
      "Type": "movie",
      "Year": "1994",
      "imdbID": "tt0109445"
    },
    {
      "Poster": "https://m.media-amazon.com/images/M/MV5BODg1MzY2NDY0OF5BMl5BanBnXkFtZTcwNDgyMzQzMQ@@._V1_SX300.jpg",
      "Title": "Clerks II",
      "Type": "movie",
      "Year": "2006",
      "imdbID": "tt0424345"
    },
    {
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODUzMmY3Y2ItZjkyYS00MTAxLThlOTctYzEzZmIzZDg0MDU3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      "Title": "Clerks",
      "Type": "series",
      "Year": "2000–2001",
      "imdbID": "tt0210413"
    },
    {
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWFkYTIyZmQtMDAwNC00MGE3LWI0NDctOTVjYjE1MWU5YjU3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
      "Title": "Clerks: The Lost Scene",
      "Type": "movie",
      "Year": "2004",
      "imdbID": "tt0433537"
    },
    {
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTg3YTM5OGUtOGY4ZC00ODAzLWIwNjAtZTBhZTg4ZWQyYmQ0XkEyXkFqcGdeQXVyNTQ4OTIxOTk@._V1_SX300.jpg",
      "Title": "Snowball Effect: The Story of 'Clerks'",
      "Type": "movie",
      "Year": "2004",
      "imdbID": "tt0420917"
    },
    {
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYTljMmQ2MGEtNzI4My00NTI2LWIyNWYtYTI1MDYzYjZhNmFmXkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_SX300.jpg",
      "Title": "Clerks.",
      "Type": "movie",
      "Year": "1995",
      "imdbID": "tt0352045"
    },
    {
      "Poster": "N/A",
      "Title": "Back to the Well: 'Clerks II'",
      "Type": "movie",
      "Year": "2006",
      "imdbID": "tt0772155"
    },
    {
      "Poster": "N/A",
      "Title": "'Clerks' 10th Anniversary Q & A",
      "Type": "movie",
      "Year": "2004",
      "imdbID": "tt0447616"
    },
    {
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjk2MjNlOGYtOTQyOC00MjQ4LTk4YzktMDZlNmVkZGEwMDkxXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg",
      "Title": "Why Jones Discharged His Clerks",
      "Type": "movie",
      "Year": "1900",
      "imdbID": "tt0270736"
    },
    {
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODYzOTA4ODgxOF5BMl5BanBnXkFtZTgwMTc3MTg2MDI@._V1_SX300.jpg",
      "Title": "Shooting Clerks",
      "Type": "movie",
      "Year": "2016",
      "imdbID": "tt3449200"
    }
  ],
  "totalResults": "23"
}

const MoviePageLink = props => {
  return(
    <TouchableOpacity 
      style={{"padding": 35}}
      onPress={() => props.navigation.navigate('MoviePage', {
        movieTitle: props.movieData.Title
      })}
    >
        <Text>{/*<Image source={{uri: props.movieData.Poster}} style={{width:100, height:100}}/>*/}   {props.movieData.Title}</Text>
    </TouchableOpacity>
  )
}

export default class SearchPage extends React.Component {
  state = {
    text: ""
  }

  handleTextChange = (text) => {
    this.setState({text: text});
    console.log(text);
  }

  // componentWillMount = () => {
  //   fetch('http://www.omdbapi.com/?apikey=d2043b23&s=clerks')
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // }

  render() {
    return (
      <View style={{flex: 1, alignItems: "flex-start"}}>
        <TextInput onChangeText={this.handleTextChange}/>
        <ScrollView style={{flex: 1}}>
          <FlatList 
            data={testData.Search}
            keyExtractor={(movieData, index) => index}
            renderItem={({item}) => <MoviePageLink movieData={item} navigation={this.props.navigation}/>}
          />
        </ScrollView>
      </View>
    )
  }
}