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


export default class Squirrel extends React.Component{

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
                    RATATOSK
                  </Text>
                  <Text style={styles.text2}>
                   Ratatosk is the squirrel that spends a lot of time each day, running up and down the tree Yggdrasil. Ratatosk does whatever he can, to keep the hatred between the eagle and Nidhug alive.
                   Every time Nidhug says a curse or an insult about the eagle, Ratatosk will hurry up to the top of the tree, and inform the eagle what Nidhug had said. The eagle was equally rude in his comments about Nidhug.
                   Ratatosk just loves to gossip which is the reason why the eagle and the serpent remained constant foes.
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