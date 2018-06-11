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


export default class Asgard extends React.Component{

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
              <Image style={styles.image1} source={{uri:'https://vignette.wikia.nocookie.net/mythology/images/0/02/Asgard_by_a_modern_artist.jpg/revision/latest?cb=20120802205332'}}>
              </Image>
              <View style={styles.textBox1}>
                <Text style={styles.text1}>
                  ASGARD : Home of the Gods 
                </Text>
                <Text style={styles.text2}>
                  In the middle of the world, high up in the sky is Asgard (Old Norse: “Ásgarðr”).
                  It’s the home of the Gods and Goddesses. The male Gods in Asgard, are called Aesir, and the female Gods are called Asynjur.
                  Odin is the ruler of Asgard and the chief of the Aesir. Odin is married to Frigg; and she is the Queen of the Aesir. 
                  Inside the gates of Asgard is Valhalla; it’s the place where half of the Vikings “Einherjer” that died in battle will go for the afterlife, the other half goes to Fólkvangr.
               </Text>
              </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Midgard')}>
                <View style = { styles.common_button }>
                <Text style = { styles.button_text }>Continue to Midgard</Text>
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
