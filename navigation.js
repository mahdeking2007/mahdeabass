import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Screens/Homec';
import Signup from '../Screens/signup';
import Login from '../Screens/Login';
const Stack =createStackNavigator();

function MyStack(){
    return(
       <Stack.Navigator>
           <Stack.Screen name="Home" component={Home}/>
           <Stack.Screen name="Sign" component={Signup}/>
       </Stack.Navigator>
    )
}
export default MyStack