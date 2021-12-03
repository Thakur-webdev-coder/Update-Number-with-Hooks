import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MyIndex = () => {
  const [count, setcount] = useState(0)
  const [mycount, setmycount] = useState(0)

  return (
    <View style={{paddingVertical:30}}>
      <Text style={{color:'white'}}>Increment and Decrement numbers with Hooks</Text>
      <View style={{justifyContent:'center',alignSelf:'center',paddingVertical:15}}>
     <View>
     <Text style={{fontSize:60,paddingHorizontal:40,color:'white'}}>{count}</Text>
     </View>
     <View>
     <TouchableOpacity style={{backgroundColor:'teal',fontSize:40,paddingVertical:18}}
     onPress={()=>setcount(count+1)}
     ><Text>Increase Number</Text></TouchableOpacity>
     </View>
      </View>
      <View style={{justifyContent:'center',alignSelf:'center',paddingVertical:100}}>
      <View>
      <Text style={{fontSize:60,paddingHorizontal:40,color:'white'}}>{mycount}</Text>
      </View>
      <View>
      <TouchableOpacity style={{backgroundColor:'teal',fontSize:40,paddingVertical:18}}
      onPress={()=>setmycount(mycount-1)}
      ><Text>Decrement Number</Text></TouchableOpacity>
      </View>
       </View>
    </View>
  )
}

export default MyIndex;

const styles = StyleSheet.create({})
