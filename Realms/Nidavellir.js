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


export default class Nidavellir extends React.Component{

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
                NIDAVELLIR : Home of the Dwarves
              </Text>
              <Text style={styles.text2}>
               Svartalfheim (Old Norse: “Niðavellir or Svartálfaheimr”) is the home of the dwarves, they live under the rocks, in caves and underground.
               Hreidmar was the king of Svartalfheim, Svartalfheim means Dark fields. The dwarves are masters of craftsmanship.
               The Gods of Asgard have received many powerful gifts. Like , the magical ring Draupnir and also Gungnir, Odin’s spear.
              </Text>
              </View>
            </View> 
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Hellheim')}>
                <View style = { styles.common_button }>
                <Text style = { styles.button_text }>Continue to Hellheim</Text>
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
