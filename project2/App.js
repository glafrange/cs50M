import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SearchPage />
      </View>
    );
  }
}

class SearchPage extends React.Component {
  state = {
    text: ""
  }

  handleTextChange = (text) => {
    this.setState({text: text});
    console.log(text);
  }

  componentWillMount = () => {
    fetch('http://www.omdbapi.com/?apikey=d2043b23&t=clerks')
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <View style={{paddingTop: 100}}>
        <TextInput style={{height: 40}} onChangeText={this.handleTextChange}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
