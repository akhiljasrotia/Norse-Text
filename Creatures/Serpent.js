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


export default class Serpent extends React.Component{

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
                    MIDGARD SERPENT : JORMUNGAND
                  </Text>
                  <Text style={styles.text2}>
                   The Midgard Serpent also is known as Jormungand, the Midgard serpent is the child of Loki. It was Odin who threw him into the sea. But the Midgard serpent loved the ocean, and it started to grow tremendously large.
                    And within a short time had the Midgard Serpent grown so huge it encircled all the land. The Midgard Serpent was feared by human and also the Gods.
                    Thor and the Midgard serpent are arch enemies. They will kill each other at Ragnarok.
                  </Text>
                  
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }> Read about </Text>
                  </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.edge}>
                </View> 
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }>Back to Homepage</Text>
                  </View>
                  </TouchableOpacity>
                </View>             
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

  container2:{
    flexDirection:'row',
    justifyContent:'space-around',
  },

  edge:{
    height:60,
    width:2,
    backgroundColor:'white',
    alignSelf:'flex-end'
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
        //borderTopWidth:1,
        borderColor:'white',
    },

    button_holder:
    {
      width:"40%",
    },

});