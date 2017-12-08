import React from 'react';
import { StyleSheet, Text ,View} from 'react-native';
import Header from './Header'

const SecondScreen = (props) => (
<View style={{flex:1}}>
  <Header title={'Second Screen'} bgColor={'rgb(68, 173, 92)'} {...props} />
  <View style={styles.container}>
    <Text style={styles.text}>{'Second Screen'}</Text>
  </View>
</View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(68, 173, 92)',
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

export default SecondScreen;
