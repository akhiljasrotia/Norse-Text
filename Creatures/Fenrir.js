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


export default class Fenrir extends React.Component{

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
                <Image style={styles.image1} source={{uri:'http://historyofvikings.com/wp-content/uploads/2018/04/024dab3853fac54b944d835de519866f-e1524475808274-780x329.jpg'}}>
                </Image>
                <View style={styles.textBox1}>
                  <Text style={styles.text1}>
                    FENRIR : THE GIANT WOLF
                  </Text>
                  <Text style={styles.text2}>
                   The Fenrir wolf is the son of Loki and the giantess Angrboda, Fenrir is the brother to Hel the Goddess of the underworld and the Midgard serpent. Fenrir is the father of the two wolves Sköll and Hati Hróðvitnisson.
                   It is foretold that Fenrir will kill Odin, at Ragnarok, but the Fenrir wolf will be killed shortly after by Odin’s son Vidar.
                   {"\n"}{"\n"} 
                   The Fenrir wolf was at the beginning kept in Asgard, were Tyr was the only one brave enough to feed him. But when the Gods, saw how quickly and huge the Fenrir wolf grew, from day today.
                   They decided to bind him to an extremely strong leash, so it could hold the Fenrir wolf. The Gods thought that it was not safe, to have him drift free around in Asgard.
                   {"\n"}{"\n"} 
                   One day the Gods took him to an island in Kattegat and started playing a game with Fenrir to test his strength, to see how easily he could snap the bonds of a rope they bound on him and a huge rock next to him.
                   The Gods came with a leash called loeding and asked Fenrir to try his strength on it. Fenrir did not think that it would match its powers, and let the Gods do as they liked. As soon as Fenrir just stretched his legs, the chain broke. The Aesir then made a leash, by the name Dromi that was twice as strong. And once again they asked Fenrir to try his strength on it and said that he would become very renowned for his strength if such a leash could not keep him.
                   Fenrir thought about it for a minute, and he thought that his power was so great he would break it as easily as the first leash. As soon as he stretched his feet the leash broke and the pieces flew far away. After seeing this the Gods started to fear, that they may not get Fenrir bound to the rock.
                  </Text>
                  <Text style={styles.text1}>
                    Mjölnir
                  </Text>
                  <Text style={styles.text2}>
                   Odin then sent Skírnir the messenger of Freyr, down to the black elves world, to find some dwarfs to make a stronger leash. The dwarfs then made a leash and called it Gleipnir. The leash was as light as a silk ribbon but stronger than an iron chain
                   {"\n"}{"\n"}                  
                  When the leash “Gleipnir” was brought back to the Aesir in Asgard. They went back out to the lake called Amsvartnir, and sailed to the island Lyngvi, and lured Fenrir with them.
                  They showed Fenrir the leash and asked him to pull it over, and said it was fairly stronger than it seemed like. And they handed it to each other and tried to pull it over with their hands, Fenrir would probably be able to break it, they said.
                  But then Fenrir replied, that it didn’t think there was any fame to gain by breaking such small a leash. and if it is made with stealth and fraud, it will not touch my legs.
                   {"\n"}{"\n"} 
                   The Gods then said that he could probably quickly break the leash because he had broken the two other leashes. And if you cannot break Gleipnir, then you will not be able to frighten the Gods and we will no longer see you as a threat, and we will instantly let you go.
                   Fenrir then said if you bind me, so I cannot get free by myself, it will probably take a long time before I get help from any of you. I am very unwilling to let this leash be placed at my feet, but if one of you would put one of your hands in my mouth as a pledge, that this leash is not made with fraud and magic, I will let you bind me to it.
                   The Aesir looked at each other, and now it seemed to them that they were in double trouble, because no one wanted to put his hand into the mouth huge scary wolf.
                   {"\n"}{"\n"}
                   But then the God Tyr held out his right hand and laid it in between the jaws of Fenrir. Fenrir was then immediately bound to the leash “Gleipnir”. As soon as it was bound Fenrir tried to break the leash, by pulling and stretching his legs, but the stronger he pulled the tighter it became. Then all the Gods started to laugh, except for Tyr, he lost his right hand.
                   {"\n"}{"\n"}
                   When the Gods saw that Fenrir was securely bound to the rock, they took the leash and bound it to a chain called Gelgja, and pulled it through a hole into a large rock named Gioll.
                   The wolf was furious, and opened his mouth very wide, and wanted to bite them all. So they stuck a sword in his mouth, with the shaft supported against the lower and the upper gum, he started to howl and froth began to run from his mouth.
                   Now he was not able to open his mouth that wide anymore the Gods laughed. Fenrir will stay here and be bound to until Ragnarok.
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