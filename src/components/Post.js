/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class Post extends Component<Props> {
  render() {
    return (
      <View>
        <View style={styles.avatar}>
          <Image
            source={require('../../resources/img/s2-checked.png')}
            style={styles.profilePic}
          />
          <Text>{this.props.photo.user}</Text>
        </View>
        <Image
          source={require('../../resources/img/s2-checked.png')}
          style={styles.photo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
