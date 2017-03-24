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
      // keywords: this.props.navigation.state.params.keywords
      keywords: [ { class: 'tiara',
        score: 0.761,
        type_hierarchy: '/headdress/tiara' },
        { class: 'headdress', score: 0.761 },
        { class: 'crown', score: 0.594 },
        { class: 'arm band', score: 0.59 },
        { class: 'circlet decorated band', score: 0.554 },
        { class: 'azure color', score: 0.89 },
        { class: 'indigo color', score: 0.725 } ]
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