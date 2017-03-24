import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {styles} from '../../../index.ios'

class Keyword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
  render() {
    return (
      <View style={styles.keywordOverall}>
        <View style={styles.keywordColumn} key={-1}>
          <Text style={styles.keywordHeading}>Main</Text>
          <Text style={styles.keywordHeading}>Score</Text>
        </View>
        {this.props.keywords.map((keyword, index) => {
          return (
            <View style={styles.keywordColumn} key={index}>
              <Text style={styles.keywordRow}>{keyword.class}</Text>
              <Text style={styles.keywordRow}>{keyword.score}</Text>
            </View>
          )
        })}
      </View>
    );
  }
}

export default Keyword;
