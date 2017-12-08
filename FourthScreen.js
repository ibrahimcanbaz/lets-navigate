import React from 'react';
import { StyleSheet, Text ,View} from 'react-native';


const FourthScreen = (props) => (
    <View style={styles.container}>
 <Text style={styles.text}>{'Fourth Screen'}</Text>
 <Text onPress={()=>props.navigation.navigate('DrawerToggle')} style={styles.text}>{'Open Drawer'}</Text>
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

export default FourthScreen;
