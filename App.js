import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  speakingVoice = () => {
    var Text = this.state.text;
    Speech.speak(Text);
  };

  render() {
    return (
      <View>
       <Header
          backgroundColor={'#a5d0e5'}
          centerComponent={{
            text: 'Text To Speech',
            style: { color: '#fff', fontSize: 23 },
          }}
        />
        <Image
          style={style.imageIcon}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YI5gx2bO__WzFpsSMaciD4lTdoWuVS0fuc_K0ZIywODfQ-yM3yFfQFlXVx2cJtQKloc&usqp=CAU',
          }}
        />
        <Text style={style.text}>Enter The Word</Text>
        <TextInput
          onChangeText={(TEXT) => {
            this.setState({
              text: TEXT,
            });
          }}
          style={style.textInput}></TextInput>
        <TouchableOpacity
          onPress={() => {
            var word=this.state.text;
           // var sp='!';
           // var sp2='@';
         //   var sp3='#';

            word === ''?alert("please enter a word"):this.speakingVoice();
           // sp?alert("enter a word"):(this.speakingVoice)
          }}>
          <Text style={style.button}>Click here to hear the speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var style = StyleSheet.create({

  textInput: {
     marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },

  button: {
    display: 'flex',
    backgroundColor: '#a5d0e5',
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderRadius: 40,
    marginBottom: 20,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  text:{
     fontStyle:'bold',
     fontSize:20,
    color:'indigo',
    textAlign:'center',
   
  }
});
