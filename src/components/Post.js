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

export default class Post extends Component {
  render() {
    return (
      <View>
        <View style={styles.avatar}>
          <Image
            source={{uri: this.props.photo.urlPerfil}}
            style={styles.profilePic}
          />
          <Text>{this.props.photo.loginUsuario}</Text>
        </View>
        <Image
          source={{uri: this.props.photo.urlFoto}}
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
