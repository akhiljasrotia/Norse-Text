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


export default class Info extends React.Component{

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
                  <Image style={styles.image1} source={{uri:'https://vignette.wikia.nocookie.net/nation/images/3/3b/Yggdrasil.png/revision/latest?cb=20100528111603'}}>
                  </Image>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.text1}>YGGDRASIL</Text>
                <Text style={styles.text2}>
                  In the middle of Asgard, where the Gods and Goddesses lives, is Yggdrasil. Yggdrasil is the tree of life, and it is an eternal green Ash tree; the branches stretch out over all of the nine worlds in Norse mythology, and extend up and above the heavens.{"\n"}{"\n"}Yggdrasil is carried by three enormous roots, the first root from Yggdrasil is in Asgard, the home of the Gods it is just next to the well-named Urd, this is where the Gods and Goddesses have their daily meetings.

The second root from Yggdrasil goes all the way down to Jotunheim, the land of the giants, next to this root is Mimir’s well. The third root from Yggdrasil goes down to Niflheim, close to the well Hvergelmir. It is here the dragon Nidhug is chewing on one of Yggdrasil’s roots. Nidhug is also known to suck the blood out of the dead bodies, that arrives at Hel.{"\n"}{"\n"}At the very top of Yggdrasil lives an eagle, the eagle and the dragon Nidhug are bitter enemies, they truly despise each other. There is a squirrel named Ratatosk, and he spending almost the entire day, by running up and down the ash tree.

Ratatosk does whatever he can, to keep the hatred between the eagle and the dragon alive. Every time Nidhug says a curse or an insult about the eagle, Ratatosk will run up to the top of the tree, and tell the eagle what Nidhug just said. The eagle is equally rude in his comments about Nidhug. Ratatosk just loves to gossip which is the reason why the eagle and the dragon remain constant foes.
                </Text>
              </View>
            
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                <View style = { styles.common_button3 }>
                <Text style = { styles.button_text3 }>Continue</Text>
                </View>
                </TouchableOpacity>
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

  container1:{
    marginTop:'10%',
    alignItems:'center',

  },

  image1:{
    width:width*0.85,
    height:height*0.52,
  },

  textBox:{
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
  },

  button_text3:
    {
        fontSize: 20,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        alignSelf:'center',
    },

  common_button3:
    {
        padding: 10,
        backgroundColor: 'black',
        borderTopWidth:1,
        borderColor:'white',
    },

  button_holder3:
    {
      bottom:0,
      width:"100%",
    },
});