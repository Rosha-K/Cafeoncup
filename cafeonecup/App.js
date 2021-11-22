import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView } from "react-native";
import MainInterface from './MainInterface'
class App extends Component {

  state = {
    myTextInput:"",
    alphabet:['a','b','c','d']
 }
  onChangeInput=(event)=>{
    this.setState({
      myTextInput:event
    })
  }
  onAddTextInput=()=>{
    this.setState(prevState=>{
      return{
        myTextInput:'', // reset 
        alphabet:[...prevState.alphabet,prevState.myTextInput]
      }
    })
  }
/*module.exports ={
    This_Test: ['./font']
};*/
  
  render(){
    return(
      <View style={{
          backgroundColor: '#EBD7C3',
          height: "100%",
          marginTop:0,
  
      }}>
          <Text style={styles.title}>
          카페 한 잔
          </Text>
          <Button 
          title="로그인"
          color='f3f3f3'
          style={styles.LoginButton}
          ></Button>
          <TextInput
              style={styles.SearchText}
              value={this.state.myTextInput}
              onChangeText={this.onChangeInput}
              multiline={false}
              editable={true}
          ></TextInput>
          <Button title="검색"
          color='#4B3621'
          style={{
            width: 30
            
          }}
          //onPress
          ></Button>
  
      </View>
    )
  }
}

const styles = StyleSheet.create({


  //각 컴포넌트들이 들어갈 컨테이너 제작하기
  //컨테이너 1, 2, 5 (상단 두 개, 하단 1개)
  container_01 :{
      top: 20,
      flex: 1,
      marginTop: 10,
      marginHorizontal: 16,
      backgroundColor: '',
  },

  //카페 이미지와 라벨 들어갈 컨테이너 3, 4
  container_02 :{
      flex: 3,
      marginTop: 10,
      paddingBottom: 6,

  },
  MenuLabel :{
      alignContent: 'flex-start',
      textAlign: 'center',
      marginLeft: 5,
      backgroundColor: '#FFFFFF',
      width: 70,
      height: 25,
  },

  //메인 타이틀 정렬하기
  title: {
      color: '#C2A484',
      textAlign: 'left',
      paddingVertical: 20,
      //fontStyle: '',
      fontSize: 60,
  },

  //로그인 버튼
  LoginButton:{
      width: '15%',
      //height: 20,
      color: 'f3f3f3',
      paddingBottom: 5,
      alignItems: 'center',
  },

  //카페 이미지, 카페 이름 정렬하기
  CafeTitle:{
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  
  //공지사항 버튼
  AlertButton:{
      width: 45,
      height: 20,
  },
  
  //검색창
  SearchText:{
      width: '75%',
      backgroundColor: '#ffffff',
      marginLeft: 6,
      fontSize: 20,
      padding: 15,
  },

  //검색 버튼
  SearchButton:{
      width: '23%',
      color: '#4B3621'
      
  },
})

export default App;