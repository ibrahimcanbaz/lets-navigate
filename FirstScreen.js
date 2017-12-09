import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import Header from './Header'
const FirstScreen = (props) => (
  <View style={{flex:1}}>
    <Header title={'First Screen'} bgColor={'rgb(142, 68, 173)'} {...props} />
    <View style={styles.container}>
      <Text onPress={()=>{
          props.navigation.navigate('Second')}} style={styles.text}>First Screen</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(142, 68, 173)',
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    flex:1,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default FirstScreen;
