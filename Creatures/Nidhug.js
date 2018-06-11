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


export default class Dragon extends React.Component{

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
                  NIDHUG: CORPSE EATER
                  </Text>
                  <Text style={styles.text2}>
                   Nidhug is the dragon that lives in Hel in Niflheim, at the root of the tree Yggdrasil. Nidhug feeds on the roots of Yggdrasil and the corpses of the dead.
                  </Text>
                  
              </View>
              </View>
              </ScrollView>

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