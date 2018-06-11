import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  OnPress,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button
} from 'react-native';

const {height,width} = Dimensions.get('window');


export default class Muspelheim extends React.Component{

  static navigationOptions ={
    header:null
  }

  render()
    {
      return(

        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.header}>
            </View>
            <View style={styles.container1}>
             <Image style={styles.image1} source={{uri:'data:image/jpeg;base64,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'}}>
             </Image>
              <View style={styles.textBox1}>
              <Text style={styles.text1}>
                MUSPELHEIM : The land of Fire
              </Text>
              <Text style={styles.text2}>
                Muspelheim (Old Norse: “Múspellsheimr”) was created far to the south of the world in Norse mythology.
                Muspelheim is a burning hot place, filled with lava, flames, sparks, and soot. Muspelheim is the home the of fire giants, fire demons and ruled by the giant Surtr.
                He is a sworn enemy of the Aesir. Surtr will ride out with his flaming sword in his hand at Ragnarok “Ragnarök” “the end of the world” Surtr will then attack Asgard, “the home of the Gods” and turn it into a flaming inferno.
              </Text>
              </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Vanaheim')}>
                <View style = { styles.common_button }>
                <Text style = { styles.button_text }>Continue to Vanaheim</Text>
                </View>
                </TouchableOpacity>
            </View>  
          </ScrollView>
        </View>

        );
    }
}


const styles = StyleSheet.create(
{
  mainContainer:{
    flex:1,
    backgroundColor:'black',
  },

  header:{
      height:height*0.1,
      backgroundColor:'black',
  },

  container1:{
    marginTop:'10%',
    alignItems:'center',
  },

  image1:{
    width:width,
    height:height*0.3,
  },

  textBox1:{
    marginTop:'10%',
    borderWidth:2,
    margin:10,
    backgroundColor:'black',
  },

  text1:{
    marginTop:10,
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center',
    color:'white',
  },

  text2:{
    margin:10,
    fontSize:20,
    color:'white',
    textAlign:'center',
    marginTop:25,
  },

  button_text:
    {
        fontSize: 20,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        alignSelf:'center',
    },

  common_button:
    {
        padding: 10,
        backgroundColor: 'black',
        borderTopWidth:1,
        borderColor:'white',
    },

 });
