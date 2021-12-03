import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MyIndex from './components';

const App = () => {
  return (
    <View style={styles.container}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={styles.main}>welcome on This site</Text>
<MyIndex/>
</View>
</View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1, 
  backgroundColor:'black',
  paddingVertical:10
    },
    main:{
      textAlign:'center',
      fontSize:30,
      color:'white'

    }
})
