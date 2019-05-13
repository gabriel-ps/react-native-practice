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
      <View style={styles.container}>
        <FlatList
          data={photos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>
            <View>
              <View style={styles.avatar}>
                <Image
                  source={require('./resources/img/s2-checked.png')}
                  style={styles.profilePic}
                />
                <Text>{item.user}</Text>
              </View>
              <Image
                source={require('./resources/img/s2-checked.png')}
                style={styles.photo}
              />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePic: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20
  },
  photo: {
    width,
    height: width
  }
});
