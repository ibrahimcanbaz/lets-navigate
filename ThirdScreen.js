import React from 'react';
import { StyleSheet, Text ,View} from 'react-native';
import Header from './Header'

const ThirdScreen = (props) => (
  <View style={{flex:1}}>
    <Header title={'Third Screen'} bgColor={'rgb(68, 98, 173)'} {...props} />
    <View style={styles.container}>
      <Text style={styles.text}>{'Third Screen'}</Text>
      <Text onPress={()=>{console.log('LOG',props.navigation)
          props.navigation.navigate('DrawerToggle')}} style={styles.text}>{'Open Drawer'}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(68, 98, 173)',
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

export default ThirdScreen;
