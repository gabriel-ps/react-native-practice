/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View, Dimensions, FlatList} from 'react-native';
import axios from 'axios';

import Post from './src/components/Post';

const width = Dimensions.get('screen').width;

const API = 'http://192.168.0.4:8080/api/public';

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get(API + '/fotos/rafael')
      .then(response => {
        // handle success
        this.setState({photos: response.data});
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>OI</Text>
        <FlatList
          data={this.state.photos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>
            <Post photo={item} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});
