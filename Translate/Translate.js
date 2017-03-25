import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import ImageView from './ImageView/ImageView.js';
import Results from './Results/Results.js';
import {styles} from '../index.ios.js';

class Translate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: this.props.navigation.state.params.keywords
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.main}>Translation Results</Text>
        <ImageView imgURL={this.props.navigation.state.params.imgURL} />
        <Results keywords={this.state.keywords}/>
      </ScrollView>
    )
  }
}

export default Translate;