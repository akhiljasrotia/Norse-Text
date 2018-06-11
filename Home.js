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


export default class Home extends React.Component{

  static navigationOptions ={
    header:null
  }



  render(){

    return(

        <View style={styles.mainContainer}>
          <ScrollView>
          <View style={styles.header}>
          </View>
          <View style={styles.container1}>
            <Text style={styles.headingText}>Welcome to YGGDRASIL</Text>
            <Image style={styles.image1} source={{uri:'https://i.pinimg.com/originals/90/b3/8d/90b38de7ab2f969ec10b1517afa71a3d.jpg'}}>
            </Image>
          </View>
          <View style={styles.container2}>
            <View style={styles.button_holder3}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Info')}>
                <View style = { styles.common_button3 }>
                <Text style = { styles.button_text3 }>Info</Text>
                </View>
              </TouchableOpacity>
             </View>
            <View style={styles.edge}>
            </View> 
            <View style={styles.button_holder3}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <View style = { styles.common_button3 }>
              <Text style = { styles.button_text3 }>Continue</Text>
              </View>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
          <View style={styles.footer}>
          </View>
        </View>
      );
  }
}


const styles = StyleSheet.create(
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
    paddingHorizontal:10,
    marginTop:'10%',
    alignItems:'center',
  },

  headingText:{
    textAlign:'center',
    fontSize:20,
    color:'black',
  },

  image1:{
      marginTop:'5%',
      height:height*0.52,
      width:width*0.85,
  },

  container2:{
    marginTop:'10%',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingHorizontal:10,

  },

  edge:{
    height:50,
    width:2,
    backgroundColor:'black',
  },

  button_text3:
    {
        fontSize: 20,
        color: 'black',
        alignSelf: 'stretch',
        textAlign: 'center',
        alignSelf:'center',
    },

  common_button3:
    {
        padding: 10,
        backgroundColor: 'white',
       //borderWidth:1,
    },

  button_holder3:
    {
      width:"40%",
    },

  footer:{
      height:'5%',
      backgroundColor:'black',
    },

});