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


export default class Loki extends React.Component{

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
                    Loki : The God of Mischief
                  </Text>
                  <Text style={styles.text2}>
                   Loki is known as the trickster, some call him the trickster God, but Loki is not a God, he is a Jotun, also known as a giant.
                   Loki is not evil, nor is he good, he lives in Asgard even though he is from Jotunheim (the land of the giants).
                   He loves to make trouble for anyone and everyone especially for the Gods and Goddesses in Asgard. Loki is both cunning and clever and he always comes up with new ideas to annoy and bring people in the uttermost embarrassment.
                   Loki just loves to prank people in all the ways he can think of, as long that he thinks it is funny. After he brings someone in trouble with his pranks, he often saves them so he would look like the hero of the day.
                   {"\n"}{"\n"}
                   Loki is the son of the giants, Farbauti and Laufey, he also has two brothers Helblinde and Býleistr.
                   Loki is the mother of Sleipnir (The eight legged horse). Loki is married to Sigyn. They have two children together, Narvi and Vali.
                   Loki has also been married to Angrboda a giantess, with her they got the three children, Hel(Hella), Fenrir Wolf, and The Midgard Serpent.
                   {"\n"}{"\n"}
                   When the Aesir were told, that these three siblings were born, in the land of the Giants, they knew this would bring great evil to the world.
                   Not just because of their mother’s origin, but also their father. So Odin decided that a few, of the Aesir, should go and get the children.
                   When the children came to Asgard, Odin threw the Midgard serpent into the deep sea. The Midgard serpent grew so big that it can bite its own tail wrapping it around the world.
                   The child Hel(Hella) he threw down into the underworld, where she made her own lair which is now known as Helheim, a place where all that dies of illness or old age go.
                   They kept the Fenrir wolf, in Asgard, for the time being, but even Fenrir would be removed from Asgard and bound to a rock.
                  </Text>
                  <Text style={styles.text1}>
                    LOKI's POWERS
                  </Text>
                  <Text style={styles.text2}>
                   Loki has an amazing ability and which is a quite useful skill for him, he is able to shapeshift into almost any living being.
                   In some separate incidents, he appears in the form of a salmon, a mare, a seal, a fly, and possibly also an elderly woman.
                   After Loki had made one prank too many for the Gods and Goddesses in Asgard, he was placed in a cave with a poisonous snake above his head.
                   Loki’s faithful and loving wife Sigyn stayed with Loki in the cave and held a bowl over his head to catch the poison from the snake.
                   </Text>
                   <Text style={styles.text1}>
                    The Blood Pact
                  </Text>
                  <Text style={styles.text2}>
                    The Aesir can’t chase Loki away, he refers to his old right, by becoming blood brothers with Odin (Not Thor).
                   </Text>

              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Tyr')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }>   Read about Tyr</Text>
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