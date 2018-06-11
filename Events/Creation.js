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


export default class Creation extends React.Component{

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
                <Image style={styles.image1} source={{uri:'http://historyofvikings.com/wp-content/uploads/2018/04/024dab3853fac54b944d835de519866f-e1524475808274-780x329.jpg'}}>
                </Image>
                <View style={styles.textBox1}>
                  <Text style={styles.text1}>
                    Creation of the World
                  </Text>
                  <Text style={styles.text2}>
                   Before the dawn of time and before the world was created in Norse mythology there was only a big dark vast emptiness called Ginungagap. To the north of Ginungagap there is a place called Niflheim.
                   Niflheim is a very dark and cold place, and it consists only of ice, frost, and fog.
                    {"\n"}{"\n"}
                   To the south of Ginunngagap there is a place called Muspelheim, this is the land of fire, and it is so hot there that it only consists of fire, lava, and smoke.
                   This is the place that the fire giant Surtr will become the ruler and live here along with other fire demons and fire giants in Norse mythology.
                  </Text>
                 
                  <Text style={styles.text1}>
                    Coldest Place in the world
                  </Text>
                  <Text style={styles.text2}>
                   It is said that in Nilfheim at a place called Hvergelmir, is where all the cold rivers are from, and it is said to be the source of the eleven rivers. Hvergelmir was the origin of all existence and the place where every living being will go back.
                   In Niflheim there is also called Elivagar which means “ice waves” these are the rivers which existed in Niflheim at the beginning of the world in Norse mythology.
                   {"\n"}{"\n"}                  
                  There were the streams floating out of Hvergelmir. The water from Elivagar was flowing down the mountains to the plains of Ginnungagap, where it solidified to frost and ice, which gradually formed a very dense layer.
                  That is the reason, why there is very cold in the northern plains.
                  </Text>

                  <Text style={styles.text1}>
                    The first Giants
                  </Text>
                  <Text style={styles.text2}>
                   From the south where Muspelheim is, came lava and sparks into the great void Ginnungagap. And in the middle of Ginnungagap the air from Niflheim and Muspelheim met, the fire melted the ice and it began to drip, this ice started to take the shape of a humanoid creature.
                   It was a Jotun, also called a giant, this giant was Ymir, the first giant in Norse mythology.
                   {"\n"}{"\n"}                  
                  When Ymir fell asleep, he started to sweat and the sweat under his arms grew two more giants, one male, and one female, and one of his legs paired with the other to create a third, a son Thrudgelmir “Strength Yeller” These were the first in the family of frost giants also called Jotuns.
                  They were breastfed by the cow giant Audhumla who like Ymir, was created from the melting ice in Ginnungagap.
                  </Text>

                   <Text style={styles.text1}>
                    Odin's Birth
                  </Text>
                  <Text style={styles.text2}>
                   The giant cow Audhumla fed herself on a block of salty ice, and while she was liking on the ice block something strange happened. On the first day, some human hair emerged from the block.
                   On the second day, Audhumla licked on the salty ice block a head appeared.
                   {"\n"}{"\n"}                  
                  At last on the third day, the rest of the body came out. The man who had grown out of the salty rock was Buri, the first of the Gods. Buri was a giant, big and handsome. He would later have a son called Borr, with his wife Bestla.
                  Borr and Bestla would also have three sons, Odin, Vili, and Ve.
                  </Text>

                  <Text style={styles.text1}>
                    The death of Ymir
                  </Text>
                  <Text style={styles.text2}>
                   Odin and his two brothers were bothered by the fact that the Giants outnumbered the Aesir, the Giants was constantly conceiving new giants.
                   The only solution they could see was to kill Ymir, the three brothers waited until Ymir was asleep before they assaulted him.
                   {"\n"}{"\n"}                  
                  A horrifying battle began, and by using all their strength they managed to kill Ymir, the blood spouted out with a furious force in every direction from Ymir’s body, and most of the giants drowned in the huge flood of blood.
                  Only two giants survived, Bergelmir and his wife, the couple fled and found a safe place in the land of mist, and saved their lives, all future giants are descended from this couple.
                  </Text>

                  <Text style={styles.text1}>
                    The world was created
                  </Text>
                  <Text style={styles.text2}>
                   The world was created from the remains of the giant Ymir in Norse mythology. The three brothers dragged Ymir’s lifeless body towards the center of Ginnungagap, this is the place where they created the world from the remains of Ymir.
                   {"\n"}{"\n"}                  
                  The blood became the oceans, rivers, and lakes.{"\n"}{"\n"} 
                  The flesh became the land.{"\n"}{"\n"} 
                  The bones became the mountains.{"\n"}{"\n"} 
                  The teeth were made into rocks.{"\n"}{"\n"} 
                  The hair became the grass and trees.{"\n"}{"\n"} 
                  The eyelashes became Midgard.{"\n"}{"\n"} 
                  {"\n"}{"\n"}
                  They threw the brain up in the air and it became the clouds, and the skull became the sky, Ymir’s skull would be the lid that covered the new world.
                  The brothers grabbed some of the sparks shooting out from Muspelheim, the land of fire.
                  {"\n"}{"\n"}
                  They threw the sparks up toward the inside of the skull, these sparks gleamed at night and this is what we call the stars. On the plains of Idavoll, they built Asgard, which would be the home of the Gods.
                  Very far away from Asgard, in a place called Jotunheim was the Giants allowed to live.
                  </Text>


                  <Text style={styles.text1}>
                    The dwarves came into existence
                  </Text>
                  <Text style={styles.text2}>
                   The dwarves came into existence While Odin and his brothers were in the progress of creating a new world from the body parts of the giant Ymir, worms kept crawling out of the rotting remains, these worms would become the dwarves.
                   Because the three brothers Odin, Vili, and Ve were afraid that the sky would fall down they told four of the dwarves to hold up the sky, they were sent out in each direction of the world.
                   {"\n"}{"\n"}                  
                  The names of the four dwarves are North “Nordi” West “Vestri”, South “Sundri”, and East “Austri”, The rest of the dwarves made their homes in rocks and caves under the ground, which is called Svartalheim the home of the dwarves.
                  They became experts in craftsmanship, and they have created some of the most powerful and magical weapons, like Mjölnir, Thor’s hammer, but also beautiful jewelry.
                  </Text>


                  <Text style={styles.text1}>
                    The Sun & Moon
                  </Text>
                  <Text style={styles.text2}>
                   A man by the name Mundilfari “the one moving according to particular times” from Midgard had two children, they were so shiny and beautiful that he decided to call his son Mani “Moon”, and his daughter Sol “Sun”.
                   {"\n"}{"\n"}                  
                  The Gods were so furious by this arrogance, that they took both of them and put them up in the sky. Sol would ride in a chariot that is pulled over the sky by two horses Árvakr “Early awake” and Alsviðr “Very quick”.
                  Under the chariot, there is a figure “Svalinn” it holds a shield, that protects the earth below from the flames.
                  {"\n"}{"\n"}
                  Mani is only pulled by one horse Aldsvider Mani stole two children from Midgard, to help him drive his chariot, their names are Bil and Yuki. They are pursued by two wolfs from a giant, Sköll “Treachery” and Hati “Hate” each day, Hati would take a small bite out of the Moon, but the Moon would get away and heal itself again.
                  These two wolves will one day catch the sun and the moon, which will happen at Ragnarök.
                  </Text>

                  <Text style={styles.text1}>
                   Day & Night
                  </Text>
                  <Text style={styles.text2}>
                   However, there is also a story about a giant by the name Nörvi which had a daughter she called Nótt”Night”. The daughter Nótt had a son Dagr “Day”. Both Nótt and Dagr are riding in chariots which are pulled by horses.
                   {"\n"}{"\n"}                  
                  Nótt is pulled by her horse Hrimfaxi “rime mane”. And behind her is Dagr, pulled by his horse Skinfaxi “shining mane”. These are apparently also followed by the two wolfs, Sköll and Hati, which makes this part a bit confusing since there are multiple and conflicting sagas about this part in Norse mythology.
                  </Text>

                  <Text style={styles.text1}>
                   The first two humans
                  </Text>
                  <Text style={styles.text2}>
                   One day Odin and his two brothers Vili and Ve walked on the beach. There they found two logs one was from an ash tree and the other was from an Elm tree.
                   {"\n"}{"\n"}                  
                  Odin gave the logs spirit and life, Ve gave them movement, mind and intelligence and Vili gave them shape, speech, feelings and the five senses, and the first two humans had been created.
                  The man was given the name Ask, and the woman was given the name Embla. The Aesir decided the humans should live in the place called Midgard.
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