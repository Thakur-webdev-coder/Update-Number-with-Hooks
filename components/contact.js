import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MyIndex = () => {
  const [count, setcount] = useState(0)
  const [mycount, setmycount] = useState(0)

  return (
    <View style={{paddingVertical:30}}>
      <Text style={{color:'white'}}>This is contact file</Text>
    
    </View>
  )
}

export default MyIndex;

const styles = StyleSheet.create({})
