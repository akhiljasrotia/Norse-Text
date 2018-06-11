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

export default class Gods extends React.Component{

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
                    <View style={styles.button_holder}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Aesir')}>
                        <View style = { styles.common_button }>
                          <Text style = { styles.button_text }>Aesir Gods</Text>
                        </View>
                      </TouchableOpacity>
                    </View> 
                    <View style={styles.button_holder}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Vanir')}>
                        <View style = { styles.common_button }>
                          <Text style = { styles.button_text }>Vanir Gods</Text>
                        </View>
                      </TouchableOpacity>
                    </View> 
                </View>
              </ScrollView>
            </View>


        );
    }
}


const styles=StyleSheet.create(
{
  mainContainer:{
    flex:1,
    backgroundColor:'white',
  },

  header:{
      height:height*0.1,
      backgroundColor:'black',
  },

  container1:{
    marginTop:'10%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around',
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
        borderTopWidth:1,
        borderColor:'white',
        height:height*0.2,
        justifyContent:'center',
        borderRadius:10,
    },

  button_holder:
    {
      width:width*0.4,
      marginBottom:10,
    },

});