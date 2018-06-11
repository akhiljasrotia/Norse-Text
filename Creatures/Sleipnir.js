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


export default class Sleipnir extends React.Component{

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
                    SLEIPNIR : THE EIGHT LEGGED HORSE
                  </Text>
                  <Text style={styles.text2}>
                   Sleipnir is a gray eight-legged horse, this horse is a magical horse, and the most beautiful of all horses.
                   Sleipnir is the symbol of the wind and can just as easily gallop through the air as on land. The horse has the marks of hell written upon it.
                   Sleipnir was later on given to the God Odin as a gift from Loki himself.
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