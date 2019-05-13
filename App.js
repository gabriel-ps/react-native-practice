/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View, Dimensions, FlatList} from 'react-native';

import Post from './src/components/Post';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {
    const photos = [
      {
        id: 1,
        user: 'Gabriel'
      },
      {
        id: 2,
        user: 'John Doe'
      }
    ];

    return (
      <View style={styles.container}>
        <FlatList
          data={photos}
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
