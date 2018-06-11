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


export default class Tyr extends React.Component{

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
                <Image style={styles.image1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejC1sBE5sOyrQvi-04Trs_Il3P1XjgSu8rpSQlMOYKYjbH_V4'}}>
                </Image>
                <View style={styles.textBox1}>
                  <Text style={styles.text1}>
                    TYR : The Bravest of the Gods
                  </Text>
                  <Text style={styles.text2}>
                   Tyr (in old Norse Týr) is the God of war, he is the bravest of all the Gods in Norse mythology. Tyr is very interested in justice and with fair treaties, which makes him a God in law as well.
                   {"\n"}{"\n"}
                   The reason why Tyr is the bravest of all the Gods is that he once put his hand into the jaws of the horrific beast Fenrir, he did this while the other Gods bound Fenrir to a rock.
                   When the wolf Fenrir noticed that he could not get free from the chains, he was furious and bit Tyr’s right hand off. Tyr will die at Ragnarok while fighting the dog Garm “the guardian of the gates of Hel”, killing Garm will be his last great moment for him.
                  </Text>
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Balder')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }> Read about Balder</Text>
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