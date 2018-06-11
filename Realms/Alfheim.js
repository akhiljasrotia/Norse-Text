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


export default class Alfheim extends React.Component{

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
                ALFHEIM : Home of the Light Elves
              </Text>
              <Text style={styles.text2}>
               Alfheim (Old Norse: “Álfheimr or Ljósálfheimr”) is right next to Asgard in the heaven. 
               The light elves are beautiful creatures. They are considered the “guardian angels” The God Freyr, is the ruler of Alfheim.
               The Light elves are minor Gods of nature and fertility; they can help or hinder humans with their knowledge of magical powers.
               They also often delivered an inspiration to art or music.
              </Text>
              </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Nidavellir')}>
                <View style = { styles.common_button }>
                <Text style = { styles.button_text }>Continue to Nidavellir</Text>
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
