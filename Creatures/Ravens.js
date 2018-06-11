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


export default class Ravens extends React.Component{

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
                  HUGINN AND MUNIN
                  </Text>
                  <Text style={styles.text2}>
                   The two ravens that fly over the world, Midgard. The name Huginn mean “thought” and Munin “memory or mind” The two ravens fly out over all the world every morning and returns every evening.
                   When they return, the Ravens whisper all that they have seen and heard to Odin.
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