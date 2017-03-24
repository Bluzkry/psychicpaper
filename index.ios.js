import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  CameraRoll,
  ScrollView,
  TouchableHighlight,
  ImagePickerIOS,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Translate from './Translate/Translate.js'


export default class purple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      text: '',
      keywords: null,
      urlImage: null,
    };

    this.sendText = this.sendText.bind(this);
    this.pickImage = this.pickImage.bind(this);
    this.sendPhoto = this.sendPhoto.bind(this);
  }

  static navigationOptions = {
    title: 'Home',
  };

  sendText() {
    this.setState({urlImage: this.state.text})
    return fetch('http://138.197.213.36:8080/api/upload', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: this.state.text
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        keywords: responseJson
      });
      this.props.navigation.navigate('Translation', {imgURL: this.state.text})
  })
    .catch(err => console.log('error1!!: ', err));
  }

  sendPhoto() {
    console.log('yay');
  }

  pickImage() {
    ImagePickerIOS.openSelectDialog(
      {}, 
      imageUri => {this.setState({ image: imageUri }); console.log('IMAGE: ', this.state.image)}, 
      error => console.log(error)
    );
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.main}>Translate a Photo</Text>
        <Text style={styles.section}>Choose photo from URL</Text>
        <TextInput style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} placeholder="URL" />
        <Button title="Send URL" onPress={this.sendText} />
        <View>
         {this.state.urlImage ? <Image source={{uri : this.state.urlImage}} style={{width: 100, height: 100}}/> : null}
       </View>

        <Text style={styles.section}>Choose photo from library</Text>
        <Button title="Open photo library" onPress={this.pickImage} />
          { this.state.image ? 
            <View>
              <Image style={styles.image} source={{uri: this.state.image}} /> 
              <Button title="Send photo" onPress={this.sendPhoto} />
            </View>
          : null}
        <View> 
          {this.state.keywords ? this.state.keywords.map((word) => <Text>{word.class} {word.score}</Text>) : null}
        </View>
      </View>
      </ScrollView>
    );
  }
}

const Application = StackNavigator({
  Home: {screen: purple},
  Translation: {screen: Translate}
});

const styles = StyleSheet.create({
  main: {
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  section: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5
  },
    container: {
    flex: 1,
    // backgroundColor: '#1CABBD',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }
});

AppRegistry.registerComponent('purple', () => Application);
