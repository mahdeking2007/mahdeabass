import { View, ScrollView, Image, Dimensions, TouchableOpacity,Text, StyleSheet,TextInput,label,} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useState} from 'react'
import { RawButton } from 'react-native-gesture-handler';

export default function Login(navigation) {
const [showpassword,setshowpassword]=useState(true)
  const [selectCountry, setCountry] = useState("country");
  const [Password,setpassword]=useState("")
  const [Email,setEmail]=useState("")
  const [PasswordConform,setpasswordConform]=useState(setpassword)
  
  const signup=()=>{
    if(Password==""){
      alert("ادخل الرمز ")
    }else if (Email==""){
      alert("ادخل البريد الكتروني ")
    }else if(PasswordConform!==Password){
      alert ("اعد كتابة الباسورد بشكل صحيح ")
    }else{

    }
  }

return (
<View>
  <Image
  source={{uri:'https://www.ikea.com/cz/en/images/products/smycka-artificial-flower-rose-red__0903311_pe596728_s5.jpg?f=s'}}
  style={{
    width:88,
    height:88,
    borderRadius:44,
    backgroundColor: 'red',
    marginBottom:20,
  }}
  />
 <Text
 style={{
   marginBottom: 5,
  marginLeft:15,
 }}
>
   E-mail
 </Text>
 <TextInput
 onChangeText={(text)=>setEmail (text)}
 placeholder="Enter Your Email"
 style={{
 borderColor:"#ddd",
 borderRadius:5,
 borderWidth:1,
 backgroundColor:"#FFF",
 marginHorizontal: 12, 
 marginBottom:16,
 }}
 ></TextInput>
 <Text
 style={{
  marginBottom: 5,
 marginLeft:15,
}}
 >
 Password
 </Text>
 <TextInput
 onChangeText={(text)=>setpassword(text)}
 placeholder="Enter Your Password"
 style={{
  borderColor:"#ddd",
  borderRadius:5,
  borderWidth:1,
  backgroundColor:"#FFF",
  marginHorizontal: 12, 
  marginBottom:16,
  }}
  secureTextEntry={showpassword}

 >

 </TextInput>
 <Text  
 style={{
  marginBottom: 5,
 marginLeft:15,
}}>Confirm Password</Text>
<TextInput 
onChangeText={(text)=>setpasswordConform(text)}
placeholder="Enter Confirm Password "
secureTextEntry={showpassword}
 style={{
  borderColor:"#ddd",
  borderRadius:5,
  borderWidth:1,
  backgroundColor:"#FFF",
  marginHorizontal: 12, 
  marginBottom:16,
  }}
  onPress={console.log(setpasswordConform)}
  ></TextInput>

<View style={{alignItems:"center",}}>
  <TouchableOpacity 
  onPress={signup}
   style={{backgroundColor:"#06BCC1",borderRadius:8.54,
    width:350,height:45, }}><Text style={{textAlign:"center",fontSize:28,}}>Register</Text></TouchableOpacity>
</View>
</View>
)   
}
const styles=StyleSheet.create({

  TouchableOpacityStyle:{
    backgroundColor:"#ccc"
  }


})