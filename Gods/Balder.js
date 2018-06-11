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


export default class Balder extends React.Component{

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
                    BALDER : The God of Light
                  </Text>
                  <Text style={styles.text2}>
                   Balder (also Baldr or Baldur) is one of the Aesir in Norse mythology, Balder is so bright that light shines from him.
                   Balder is the God of light and purity in Norse mythology and all the Gods praise him for his beauty.
                   Balder is so beautiful that even the most beautiful flowers bows before him, as he walks past them.
                   Balder is also one of the wisest of the Aesir and is the most fairest-spoken and most gracious.
                   {"\n"}{"\n"}
                   Balder is the second son of Odin and Frigg, he has many brothers one of them is the Thunder God Thor.
                   Balder is married to the Goddess Nanna and together they have a son named Forseti.
                   Together with his wife Nanna they live in his house Breidablik in Asgard.
                   The house is the most beautiful house in Asgard and only the purest of the pure can enter it.
                   The roof of Balder’s house is made from decorative silver, standing on beautiful decorative pillars.
                   One of Balder’s most precious possessions is the amazing ship called Hringhorn and it is described as the “greatest of all ships”.
                   At Balder’s death, the ship was used at his funeral pyre after he was killed by a mistletoe.
                  </Text>
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Heimdall')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }> Read about Heimdall</Text>
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