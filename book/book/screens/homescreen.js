import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import Calender from '../components/calendar'
export default class HomeScreen extends React.Component {
  
  constructor(){super()
  this.state = {
    date:''

  }
  }


  render() {
    return (
      <View style = {styles.container}>
    
        <Text> home </Text>
        <Calender/>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textInput: {
    marginTop : 150,
    width: "75%",
    height: 90,
    padding: 10,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "#5653D4"
  
},
});


