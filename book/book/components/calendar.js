import React, { Component } from 'react';
import firebase from 'firebase'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      Note: '',
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  handleEntry = async()=>{
    firebase.firestore().collection("calendar").doc(firebase.auth().currentUser.uid+new Date().toString()).add({
      date:this.state.selectedStartDate,Note:this.state.note
  })}
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker onDateChange={this.onDateChange} width="" />

        <TextInput
          style={styles.textinput}
          multiline={true}
          onChangeText={(text) => this.setState({ Note: text })}
          placeholder={'dear,diary'}
          placeholderTextColor={'#FFFFFF'}
          autoFocus
        />

        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
        <TouchableOpacity onPress={() => this.handleEntry()}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peachpuff',

    textAlign: 'center',
  },

  textinput: {
    marginTop: 50,
    alignSelf: 'center',
    width: '75%',
    height: 90,
    padding: 10,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    backgroundColor: '#5653D4',
  },
});
