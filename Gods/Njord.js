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


export default class Njord extends React.Component{

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
                    NJORD : The God of Wind
                  </Text>
                  <Text style={styles.text2}>
                   Njord (Old Norse Njörðr) is the God of the wind, seafarers, coasts, inland waters and wealth, he is a member of the Vanir.
                   When the war between the Vanir and the Aesir ended, Njord and two others were sent to the Aesir as a token of truce, in return, the Aesir sent Honir and Mimir to the Vanir.
                   Njord lives in a house on the seashore in Asgard, which he called Noatun “Ship Haven”.
                   {"\n"}{"\n"}
                   Njord is married to the giantess Skadi, Njord has a sister by the name Nerthus, together with his sister they have two children Freya and Freyr.
                   Njord is often mistaken for the God of the sea, though this conception is incorrect because that is the God Ægir.
                  </Text>
                  <Text style={styles.text1}>
                    Njord and Skadi
                  </Text>
                  <Text style={styles.text2}>
                   Njord had Freya and Freya with his sister Nerthus. But the Aesir would not tolerate a marriage between Njord and his sister.
                   So Njord got married to Skadi, a giantess. As the story goes Skadi picked Njord as her husband because of his beautiful feet, but they could not agree on where to live.
                   Njord thought that the home of Skadi in the land of the giants was too cold and abandoned. While Skadi didn’t like the noise and the hustle of shipbuilding around Njords home, Noatun in Asgard.
                   After nine nights at each place, they decided to live by them self.
                   {"\n"}{"\n"}
                   Skadi went back to her favorite interest to hunt on skis, and Njord returned back to his house Noatun in Asgard.
                   The seemingly unbridgeable gap between them, in all likelihood, reflects more their personal tastes.
                   Njord was certainly seen as a fertility God, assuring safe travel by sea, for those who worship him.
                   But also for riches and good luck, in the form of land and sons. Skadi’s circumstance was quite another, she came from the mountains and snowy areas 
                   where heavy clouds hide the sun and the hard rock makes the ground feel dead and cold.
                  </Text>
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Freyr')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }> Read about Freyr</Text>
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