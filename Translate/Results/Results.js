// Results React Component contain dropdown list and translate Results
import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Keyword from './Keyword/Keyword.js';
import TranslateResult from './Translate/TranslateResult.js';
import {styles} from '../../index.ios.js';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Keyword keywords={this.props.keywords} />
        <TranslateResult keywords={this.props.keywords} />
      </View>
    )
  }
}

export default Results;