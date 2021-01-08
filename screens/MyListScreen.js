import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,KeyboardAvoidingView,
  Image} from 'react-native';

import db from '../config';
import TaskButton from '../components/TaskButton';

export default class MyListScreen extends React.Component{
  constructor(){
      super();
      this.state={
          toDo : ''
      }
  }
  showContent=()=>{
    var task=[];
    db.ref('toDo').on('value',(data)=>{
        var list = data.val();
        console.log('list '+ list)
        //var keys = Object.keys(list);
        console.log('keys '+ keys)
        for(var read in list){
            if(list[read].status=='pending'){
                list[read].keys=read
                console.log('list new '+ list)
                task.push(
                    list[read]
                )
                console.log('task '+ task)
            }
        }
        this.setState({
            toDo : task,
        })
        task=[]
    })
}
componentDidMount(){
    this.showContent();
}
  
  addWhatToDo=()=>{
    if(this.state.toDo!=''){
      var word = this.state.toDo.toLowerCase();
      db.ref('toDo').push({
        task : word,
        status : 'pending'
      })
      this.setState({
          toDo : ''
      })
    }  
  }
    
  
  render(){
    return(
      <KeyboardAvoidingView>
        <View style = {styles.container}>
          <View style = {styles.profileContainer}>
            <Image source = {require('../assets/images.png')}style = {{width:100,height:100}}></Image>
            <Text style = {styles.title}>ToDo</Text>
          </View>
          <View style = {{flexDirection:'row'}}> 
            <TextInput
            style={styles.loginBox}
            placeholder="Enter what u want to do"
            onChangeText={(text)=>{
              this.setState({
              toDo: text
            })}}/>

            <TouchableOpacity
              style={styles.button}
              onPress={this.addWhatToDo}>
                <Text style = {styles.txt}>Add</Text>
            </TouchableOpacity>
          </View >
          <ScrollView style = {{flex:1}}>
          {
            this.state.toDo.map(
                (data,index)=>{
                    return(
                        <TaskButton keys={this.state.toDo[index].keys}
                        wordChunk={this.state.toDo[index].task}
                        buttonIndex={index}></TaskButton>
                    )
                }
            )
          }
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

  const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'cyan',
     alignItems: 'center'
     
   },
   button:{
    width:80,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#323aa8",
    marginTop:35,
    marginLeft:15
   },
   loginBox:{
    width: 250,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    marginTop:30,
    marginLeft:30
  },
  txt:{
    fontSize:20,
   fontWeight:'bold',
   color : 'white'
  },
  title:{
     fontSize:65,
     fontWeight:"200",
     color:'white',
     paddingBottom:30
  },
  profileContainer:{     
    marginTop:20,
    alignItems:'center'
  }
  })



  