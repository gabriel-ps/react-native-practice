/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View, Dimensions, FlatList} from 'react-native';

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
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={photos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>
            <View>
              <Text>{item.user}</Text>
              <Image
                source={require('./resources/img/s2-checked.png')}
                style={{width, height: width}}
              />
            </View>
          }
        />
      </View>
    );
  }
}
