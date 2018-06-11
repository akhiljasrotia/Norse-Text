

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
import { createStackNavigator } from 'react-navigation';




import Splash_Screen from './Splash';
import Home from './Home';
import Info from './Info';
import Details from './Details';


import Realms from './Realms';
import Asgard from './Realms/Asgard';
import Midgard from './Realms/Midgard';
import Jotun from './Realms/Jotunheim';
import Niflheim from './Realms/Niflheim';
import Muspelheim from './Realms/Muspelheim';
import Vanaheim from './Realms/Vanaheim';
import Alfheim from './Realms/Alfheim';
import Nidavellir from './Realms/Nidavellir';
import Hellheim from './Realms/Hellheim';
import Valhalla from './Realms/Valhalla';


import Gods from './Gods/Gods';
import Aesir from './Gods/Aesir';
import Vanir from './Gods/Vanir';
import Odin from './Gods/Odin';
import Thor from './Gods/Thor';
import Loki from './Gods/Loki';
import Tyr from './Gods/Tyr';
import Balder from './Gods/Balder';
import Heimdall from './Gods/Heimdall';
import Mimir from './Gods/Mimir';
import Njord from './Gods/Njord';
import Freyr from './Gods/Freyr';
import Freya from './Gods/Freya';
import Frigg from './Gods/Frigg';


import Creatures from './Creatures/Creatures';
import Fenrir from './Creatures/Fenrir';
import Serpent from './Creatures/Serpent';
import Sleipnir from './Creatures/Sleipnir';
import Goat from './Creatures/Goat';
import Squirrel from './Creatures/Squirrel';
import Ravens from './Creatures/Ravens';
import Nidhug from './Creatures/Nidhug';


import Events from './Events/Events';
import Creation from './Events/Creation';

const {height,width} = Dimensions.get('window');




const RootStack = createStackNavigator (
  {
    Splash:Splash_Screen,
    Home:Home,
    Info:Info,
    Details:Details,
    
    Realms:Realms,
    Asgard:Asgard,
    Midgard:Midgard,
    Jotun:Jotun,
    Niflheim:Niflheim,
    Muspelheim:Muspelheim,
    Vanaheim:Vanaheim,
    Alfheim:Alfheim,
    Nidavellir:Nidavellir,
    Hellheim:Hellheim,
    Valhalla:Valhalla,
    
    Gods:Gods,
    Aesir:Aesir,
    Vanir:Vanir,
    Odin:Odin,
    Thor:Thor,
    Loki:Loki,
    Tyr:Tyr,
    Balder:Balder,
    Heimdall:Heimdall,
    Mimir:Mimir,
    Njord:Njord,
    Freyr:Freyr,
    Freya:Freya,
    Frigg:Frigg,

    Creatures:Creatures,
    Fenrir:Fenrir,
    Serpent:Serpent,
    Sleipnir:Sleipnir,
    Goat:Goat,
    Squirrel:Squirrel,
    Ravens:Ravens,
    Nidhug:Nidhug,


    Events:Events,
    Creation:Creation,
  },
  {
    initialRouteName:'Splash',
  }
);

export default class stack extends React.Component{
    render(){
        return(
            <RootStack />
          );
    }
}

