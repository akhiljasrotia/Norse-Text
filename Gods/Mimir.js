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


export default class Mimir extends React.Component{

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
                    MIMIR : The Rememberer
                  </Text>
                  <Text style={styles.text2}>
                   Mimer “The wise one or The rememberer” is known for his knowledge and wisdom in all the nine worlds.
                   During the war between the Asir and Vanir, Mimir was sent to the Vanir along with the God Honir as part of a peaceful hostage exchange.
                   {"\n"}{"\n"}
                   But because the Vanir was fearing trickery from the Aesir, the Vanir beheaded Mímir and sent his head back to the Gods and Goddesses in Asgard.
                   In order to keep his wisdom, Odin preserved his head with magic so it could continue to provide Odin knowledge and counsel as his advisor.
                   He has his own well called Mimir’s well “Mímisbrunnr”, those who drink from the well will obtain more wisdom.
                   Odin once drank from the well, and paid for it, by sacrificing an eye to Mimir. This well of wisdom is located by the second root of the tree Yggdrasil.
                  </Text>
              </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.button_holder}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Njord')}>
                  <View style = { styles.common_button }>
                  <Text style = { styles.button_text }> Read about Njord</Text>
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