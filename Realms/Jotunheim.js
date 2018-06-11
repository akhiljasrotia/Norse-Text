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


export default class Jotun extends React.Component{

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
                JOTUNHEIM : Home of the Giants
              </Text>
              <Text style={styles.text2}>
                Jotunheim (Old Norse: “Jötunheimr or Útgarðr”) is the home of the giants (also called Jotuns).
                They are the sworn enemies of the Aesir. Jotunheim consists mostly of rocks, wilderness, and dense forests, and it lies in the snowy regions on the outermost shores of the ocean.
                Because of this, the giants live mostly from the fish from the rivers, and the animals from the forest, because there is no fertile land in Jotunheim.
                The giants and the Aesir are constantly fighting, but it also happens from time to time, that love affairs will occur. 
                Odin, Thor and a few others, had lovers who were giants. Loki also came from Jotunheim, but he was accepted by the Aesir and lived in Asgard. 
                Jotunheim is separated from Asgard by the river Iving, which never freezes over. Mimir’s well of wisdom is in Jotunheim, beneath the Midgard root of the ash tree Yggdrasil. 
                The stronghold of Utgard is so big that it is hard to see the top of it. And there the feared Jotun king Utgard-Loki lives. Utgard is carved from blocks of snow and glistening icicles.
              </Text>
              </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Niflheim')}>
                <View style = { styles.common_button }>
                <Text style = { styles.button_text }>Continue to Niflheim</Text>
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
