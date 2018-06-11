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


export default class Freyr extends React.Component{

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
                    FREYR : The God of Fertility
                  </Text>
                  <Text style={styles.text2}>
                  Freyr (In old Norse “Lord”) is an unbelievably beautiful male God he is a very important God in Norse mythology, and he is the God of fertility he is also associated with prosperity, wealth and a good harvest.
                  Freyr is a former member of the Vanir an old branch of Gods associated with sorcery. When the war between the Vanir and the Aesir ended, Freyr and two others were sent to the Aesir as a token of truce.
                  In return, the Aesir sent two other Gods to the Vanir. Freyr is also the ruler of Alfheim, and lord of the elves.
                   {"\n"}{"\n"}
                  He is the son of Njord and has a twin sister named Freya. He is married to Gerðr, she is a giantess from Jotunheim.
                  When Freyr wants to travel a longer distance he has a boar named Gullinbursti “Golden Bristles”.
                  </Text>
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Freya')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }> Read about Freya</Text>
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