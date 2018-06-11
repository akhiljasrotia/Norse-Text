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


export default class Realms extends React.Component{

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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Asgard')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Asgard</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button_holder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Midgard')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Midgard</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button_holder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Jotun')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Jotunheim</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button_holder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Niflheim')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Niflheim</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button_holder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Muspelheim')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Muspelheim</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button_holder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Vanaheim')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Vanaheim</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button_holder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Alfheim')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Alfheim</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button_holder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Nidavellir')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Nidavellir</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button_holder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Hellheim')}>
                  <View style = { styles.common_button }>
                    <Text style = { styles.button_text }>Hellheim</Text>
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
    backgroundColor:'white',
  },

  header:{
      height:height*0.1,
      backgroundColor:'black',
  },

  container1:{
        marginTop:'5%',
        alignItems:'center',
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
      width:width*0.8,
      marginBottom:10,
    },

});
