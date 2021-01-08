import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../config';
export default class TaskButton extends React.Component {
    constructor(){
        super();
        this.state={
            pressedButtonIndex:'',
        }
    }
    resetDb=()=>{
        db.ref('toDo/'+this.props.keys+'/').update({
            task:this.props.wordChunk,
            status:'done'
        })
    }
  render() {
    return (
      <TouchableOpacity
        
        style={
            this.props.buttonIndex==this.state.pressedButtonIndex?
            [styles.chunkButton,{backgroundColor:'green'}]
            :[styles.chunkButton,{backgroundColor:'orange'}]
        }
        onPress={() => {
            this.setState({
                pressedButtonIndex:this.props.buttonIndex,
            })
            this.resetDb();
        }}>
        <Text style={styles.displayText}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
  }
});