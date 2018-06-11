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


export default class Heimdall extends React.Component{

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
                    HEIMDALL : The Guardian of Bifrost
                  </Text>
                  <Text style={styles.text2}>
                   Heimdall (old Norse “Heimdallr”) is a tall and fair man with teeth made of gold, for this reason, Heimdall has gotten the nickname “Gold Tooth”.
                   Heimdall is the guardian of the rainbow bridge Bifrost which is the only way into Asgard (the home of the Gods) and connecting it with Midgard (the home of man) in Norse mythology.
                   Heimdall is the son of Odin the all-father.
                   {"\n"}{"\n"}
                   When Heimdall stands guard at the rainbow bridge he has his trustworthy sword at his side “Hofund” to protect him from any unwelcome guests.
                   Should he need any assistance from the other Gods and Goddesses he has a horn named Gjallarhorn “the yelling horn” or “the loud sounding horn”.
                   This horn is primary for the use at Ragnarok, the end of the world. The sound of the horn is so loud that it can be heard, loud and clear throughout all of the nine worlds in Norse mythology.
                   Heimdall will be using this horn at ragnarök when he sees the enemies of Asgard arriving at the plains of Vigrid.
                   When the Gods and Goddesses at Asgard hear the sound from the Gjallarhorn, they will all be warned to get ready for the final battle.
                  </Text>
                  <Text style={styles.text1}>
                  Abilities
                  </Text>
                  <Text style={styles.text2}>
                   Heimdall does not need much sleep, in fact, he sleeps less than a bird and he also has keen eyesight and he can see equally, good night or day for hundreds of kilometers, in fact, his sight is so good that he can even see the grass grow.
                   He also possesses superhuman hearing abilities and can hear the wool grow on the back of a sheep.
                   {"\n"}{"\n"}
                   Heimdall lives next to Bifrost in a place called Himinbjörg, when he is not busy protecting Bifrost from enemies he is able to ride around on his horse which name is Gulltopp, “Gold top” this is a very special horse and one of a kind because it is made of gold.
                   Heimdall is also known to have wandered among mankind and for that reason he has many names associated with him, and he is also referred to as Rig, Hallinskiði, Gullintanni, and Vindlér or Vindhlér.
                  </Text>
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Mimir')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }> Read about Mimir</Text>
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