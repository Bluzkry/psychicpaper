// TranslateResult component contain drop down menu allow user to select language
// display the translated word from API
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Select,
  Option
} from 'react-native-chooser';
import axios from 'axios';
import {styles} from '../../../index.ios.js';


class TranslateResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: [],
      translatedKeywords: [],
      targetLanguage: 'en'
    };

    this.onSelect = this.onSelect.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(data) {
    let language;
      if (data === 'English') {
        language = 'en';
      } else if (data === 'Spanish') {
        language = 'es';
      } else if (data === 'Chinese') {
        language = 'zh-CN';
      } else if (data === 'French') {
        language = 'fr';
      } else if (data === 'Hindi') {
        language = 'hi';
      } else if (data === 'Korean') {
        language = 'ko';
      } else if (data === 'Hebrew') {
        language = 'iw';
      } else if (data === 'German') {
        language = 'de';
      } else if (data === 'Japanese') {
        language = 'ja';
      }

    this.setState({
      targetLanguage: language
    }, () => {
      axios.post('http://138.197.213.36:8080/api/translate', { keywords: this.state.keywords, source: 'en', target: this.state.targetLanguage })
        .then((result) => {
          var translations = result.data.data.translations.map(v => v.translatedText);
          this.setState({
            translatedKeywords: translations
          });
        })
        .catch(err => console.error(err));
    });
  }

  componentWillMount(prevProps, prevState) {
    const mappedKeywords = this.props.keywords.map(v => v.class);
    this.setState({
      keywords: mappedKeywords
    });
  }

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.section}>Target Language</Text>
        <Select
          defaultText="Select a language"
          onSelect={this.onSelect}
          ref="select"
          style={{marginTop: 10}}
        >

        {/*<Option value="English">English</Option>*/}
        <Option value="Spanish">Spanish</Option>
        <Option value="Chinese">Chinese</Option>
        <Option value="French">French</Option>
        <Option value="Hindi">Hindi</Option>
        <Option value="Korean">Korean</Option>
        <Option value="Hebrew">Hebrew</Option>
        <Option value="German">German</Option>
        <Option value="Japanese">Japanese</Option>

        </Select>

        {this.state.translatedKeywords.map((keyword, index) => {
          return (
            <Text style={styles.smallText} key={index}>
            {keyword}
            </Text>
          )}
        )}

      </View>
      )
  }
}

export default TranslateResult;