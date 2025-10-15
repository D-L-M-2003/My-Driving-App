import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, ScrollView,Button } from 'react-native';

export default function App() {
  const age = 20;
  const licenseyears= 0-4;
  let feedback = '';
  if (age >= 18)   
   if(licenseyears >= 3) 

  {
    feedback = 'You are allowed to drive, YIPPIEEE!!!!';
  }
  else
  {
    feedback ='Son you better put those key back where you found em or else you gonna get a beating!!!';
  }
  
  let drivingRank = '';
  switch(licenseyears)
  {
    case 0:
      drivingRank = 'Noob';
    break;
    case 1:
      drivingRank = 'Rookie';
    break;
    case 2:
      drivingRank = 'Intermediate ';
    break;
    case 3:
    case 4:
      drivingRank = 'Expert';
    break;
    default: drivingRank = 'Veteran';
  }

    

  return (
    
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={[styles.response,{fontSize:48, color:'yellow',marginBottom:35}]}></Text>
      <Image source={{uri:'https://images.pexels.com/photos/593172/pexels-photo-593172.jpeg?cs=srgb&dl=pexels-taras-makarenko-188506-593172.jpg&fm=jpg',
      }}
      style = {styles.Image}/>
      <Text style={styles.response}>Age: {age}</Text>
      <Text style={styles.response}>License Years: {licenseyears}</Text>
      <Text  style = {styles.response}>{feedback} {/*This is how you comment things out*/ }</Text> 
      <Text style={[styles.response,{fontSize:48, color:'yellow',marginBottom:35, textAlign:'center'}]}>{feedback}</Text>
      <Text style={[styles.response,{fontSize:48, color:'yellow',marginBottom:35, textAlign:'center'}]}>{drivingRank}</Text>
      <TextInput style={styles.inputbox} placeholder='Enter your age :' keyboardType='numeric'></TextInput>
      <View style={{marginTop: 15, width:'60%',backgroundColor:'green'}}>
      <Button title='Check Details'></Button>
      </View>
      
    </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d0acaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:
  {
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  response:
  {
    fontSize : 28,
    color:'green',
    fontWeight:'bold',
    marginTop:5,
    textAlign:'center'
  },

  Image:{
  width:400,
  height:400,
  resizeMode:'contain',
  top:0,
  position:'absolute',
  
},

inputbox:
{
  width:'80%',
  borderWidth: 1,
  borderColor: 'white',
  padding: 10
}
});
