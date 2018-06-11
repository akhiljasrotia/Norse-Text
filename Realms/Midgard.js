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


export default class Midgard extends React.Component{

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
                MIDGARD : Home of the Humans
              </Text>
              <Text style={styles.text2}>
                Midgard (Old Norse: “Miðgarðr”) “middle earth” is located in the middle of the world, below Asgard.
                Midgard and Asgard are connected by Bifrost the Rainbow Bridge. 
                Midgard is surrounded by a huge ocean that is impassable.
                The Ocean is occupied by a huge sea serpent, the Midgard Serpent.
                The Midgard serpent is so huge that it encircles the world entirely, and biting its own tail.
                Odin and his two brothers Vili and Ve created the humans from an Ash log, the man and from an elm log, the woman.
              </Text>
              </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Jotun')}>
                <View style = { styles.common_button }>
                <Text style = { styles.button_text }>Continue to Jotunheim</Text>
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
