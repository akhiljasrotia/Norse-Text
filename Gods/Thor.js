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


export default class Thor extends React.Component{

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
                    THOR : The God of Thunder
                  </Text>
                  <Text style={styles.text2}>
                   Thor (In Old Norse Þórr) is the almighty God of thunder in Norse mythology, he is the son of Odin and Giantess Fjörgyn.
                   Thor’s hair and beard are red, Thor is associated with thunder, lightning, oak trees and strength, Thor is the strongest of all the Gods and the protector of mankind in Midgard.
                   While Thor is the strongest of the Gods, he is not the smartest or the wisest of the Gods, and many giants tease or fool him as much as they can.
                   {"\n"}{"\n"}
                   Thor lives in Asgard together with his wife Sif at a place called Thrudheim, the name means “Place of Might”. It’s an enormous house with 540 rooms, and it’s the biggest house known in Asgard. 
                   Thor and Sif live with their two children Trud and Modi, but also a stepson named Ullr who Thor adopted. Thor also has a son named Magni with a giantess called Jarnsaxa.
                   Thor and Sif also have two servants a boy named Thialfi and girl named Röskva.
                  </Text>
                  <Text style={styles.text1}>
                    Mjölnir
                  </Text>
                  <Text style={styles.text2}>
                   Thor’s hammer was forged by the dwarfs Brokkr and Eitri and it’s one of the most frightening weapons, it can send out lightning bolts and is capable of tearing down mountains and Mjölnir can hit any target.
                   After the target is hit, Thor’s hammer will return to Thor’s right hand all by itself. The hammer can be used to kill and destroy, but also revive people or animals. Thor’s hammer can also be magically shrunken to fit inside Thor’s shirt.
                   The hammer Mjölnir is also used in sacred ceremonies; it can be ceremonies about birth but also death. Thor also has some other powerful items, like a pair of iron gauntlets and a magical belt, when he wears both of these magical items it makes him twice as strong.
                   The belt is called Megingjord, “power belt” and the iron gauntlets are called Járnglófar. Mjölnir was once stolen by the Giant Trym, and the price for getting it back was the hand of the fertility Goddess Freya.
                   {"\n"}{"\n"}                  
                   Whenever Thor rides out from Asgard in his chariot he has two goats that pull his chariot, their names are Tanngniost “Teeth barer” and Tanngrisnir “Teeth grinder”.
                   Thor has two servants and they are siblings they are the children of a peasant farmer from Midgard. Long ago when Thor and Loki stayed one night at their farm, Thor shared the meat generously with the family from his two goats Teeth-barer and Teeth grinder.
                   The boy Thialfi broke one of the bones and sucked out the delicious marrow. When Thor resurrected the goats the next morning, he found out that one of the goats was limping on of the legs and Thor became furious. Thor then demanded that Thialfi and Röskva became his servants, and came back with him to Asgard.
                  </Text>
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Loki')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }> Read about Loki</Text>
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