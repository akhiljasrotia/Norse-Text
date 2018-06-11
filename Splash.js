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
} from 'react-native';

const {height,width} = Dimensions.get('window');

var comp ;

export default class Splash_Screen extends React.Component{

  constructor(props) {

      super(props);
  }

  static navigationOptions ={
    header:null
  }

  componentWillMount()
  {
    comp = setTimeout(
      ()=>{
      this.props.navigation.navigate('Home');
    },2000 )
  }


  render(){

    return(

        <View style={styles.container}>
          <Image style={{width:width ,height:height*0.5}}
          source={{uri:'https://thumbs.dreamstime.com/b/deus-wotan-dois-corvos-e-protetores-das-runas-ilustra%C3%A7%C3%A3o-da-mitologia-de-noruegueses-112679230.jpg'}}
          />
        </View>
      
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
  },

});
