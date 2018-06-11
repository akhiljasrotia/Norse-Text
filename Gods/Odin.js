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


export default class Odin extends React.Component{

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
                    ODIN : The Allfather
                  </Text>
                  <Text style={styles.text2}>
                   Odin (Old Norse Óðinn) is the most powerful God in Asgard and he is the chief of the Aesir, in Norse mythology.
                   Odin is sometimes called the all-father or the wanderer, he has, in fact, many names, because he has taken many shapes on various occasions.
                   Odin lives in the house called Valaskialf, in this house, Odin has a tall tower and in the top of the tower he has a throne called Hlidskialf, from here Odin can see throughout all the nine worlds.
                   Odin is the grandson of Buri the first Aesir, and he is the son of the half-God, half-giant Bestla and Bor.
                   {"\n"}{"\n"}
                   Odin has two brothers, Vili and Ve, together with his brothers Odin created the world in Norse mythology. Odin is married to the beautiful Goddess Frigg, together they have the sons Baldr and Hod, but Odin also has others sons.  
                   This has resulted in that Odin became the father of Thor (the God of thunder) with the giantess Jörð which means earth, you may also know her under the name Fjörgyn. Odin and the giantess Grid also have a son named Vidar.
                   Odin and the giantess Rind also have a son named Vali.
                  </Text>
                  <Text style={styles.text1}>
                    ODIN's POWERS
                  </Text>
                  <Text style={styles.text2}>
                   Odin is able to shapeshift just like Loki, and he can shapeshift into an animal or human anytime he wants.
                   Odin mostly speaks in phrases and riddles, and Odin’s voice is so soft that all who hears him speak thinks all he says is true.
                   Odin can also just say a single word and he will be blowing out the flames of a fire, or tone down waves of the sea. Odin is seldom active in a battle but when he is, he can make his enemies blind in combat, deaf or horror-struck, Odin can even make their weapons hit like sticks, or make his own men as strong as a bear and go berserk.
                   {"\n"}{"\n"}
                   Odin can predict the fade of all humans, and see their past, he even knows that one day Ragnarok (Ragnarök) will start and there is nothing he can do to prevent it.
                   Odin also has the ability to travel to remote lands, in his or in the memories of others. Odin can send people to their death or give them an illness.
                   Some Vikings sacrificed to Odin, and gave him good promises, in the hopes to gain insight into whether they could win a battle or not. 
                  </Text>
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Thor')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }>Read about Thor</Text>
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
    //borderBottomWidth:1,
    borderColor:'white',
  },

  button_holder:
    {
      width:"40%",
    },


});