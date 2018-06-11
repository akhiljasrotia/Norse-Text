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


export default class Niflheim extends React.Component{

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
                NIFLHEIM : World of Fog and Mist
              </Text>
              <Text style={styles.text2}>
                Niflheim (Old Norse: “Niðavellir”) and it means (“Mist home” or “Mist World”) is the darkest and coldest region in the world according to Norse mythology.
                Niflheim is the first of the nine worlds and Niflheim is placed in the northern region of Ginnungagap.
                The eldest of the three wells are located in Niflheim which is called Hvergelmir “bubbling boiling spring” and it is protected by the huge dragon called Nidhug (Níðhöggr).
                It is said that all cold rivers come from the well called Hvergelmir, and it is said to be the source of the eleven rivers in Norse mythology.
                The well Hvergelmir is the origin of all living and the place where every living being will go back. Elivagar “ice waves” are the rivers which existed in Niflheim at the beginning of the world.
                They were the streams floating out of Hvergelmir. The water from Elivagar flowed down the mountains to the plains of Ginnungagap, where it solidified to frost and ice, which gradually formed a very dense layer.
                This is the reason that it is very cold in the northern plains. As the world tree Yggdrasil started to grow, it stretched one of its three large roots far into Niflheim and drew water from the spring Hvergelmir.
              </Text>
              </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Muspelheim')}>
                <View style = { styles.common_button }>
                <Text style = { styles.button_text }>Continue to Muspelheim</Text>
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
