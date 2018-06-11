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


export default class Goat extends React.Component{

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
                    TANNGNIOST AND TANNGRISNIR
                  </Text>
                  <Text style={styles.text2}>
                   Tanngniost “Teeth barer” and Tanngrisnir “Teeth grinder” are the two goats, who pull Thor’s chariot.
                   Whenever Thor rides in his chariot, people can hear the noise from the wheels, and see the sparks and lightning from the wheels sent out as they fly across the sky.
                   Some think that the sparks come from his hammer Mjölnir. The people in Midgard calls this thunder and lightning. If Thor is away from home, he sometimes cooks the goats.
                   Thor will then resurrect them with his hammer, Mjöllnir the next day.
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