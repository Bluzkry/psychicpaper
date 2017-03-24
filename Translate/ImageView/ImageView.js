import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {styles} from '../../index.ios';

// ImageView Component only contains imageURL
// Using Stateless style
// Expect App.js pass imageURL data to ImageView
const ImageView = (props) => {
  return (
    <View style={styles.center}>
      <Image source={{uri: props.imgURL}} style={styles.image} />
    </View>
  )
};

export default ImageView;