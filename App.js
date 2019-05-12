/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View, Dimensions} from 'react-native';
// import logo from './resources/img/s2.png';

const width = Dimensions.get('screen').width;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const users = [
      {
        id: 1,
        name: 'Gabriel'
      },
      {
        id: 2,
        name: 'John Doe'
      }
    ];

    return (
      <View>
        <Text>Hello</Text>
        {users.map(user =>
          <View key={user.id}>
            <Text>{user.name}</Text>
            <Image source={require('./resources/img/s2-checked.png')} style={{width, height: width}} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
