import React from 'react';
import { StyleSheet, Text ,View,SafeAreaView,TouchableOpacity} from 'react-native';
import { Header as H } from 'react-navigation';
import {FontAwesome} from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation'

const Header = (props) => (
<SafeAreaView style={{backgroundColor:props.bgColor}}>
  <View style={[styles.container,{backgroundColor:props.bgColor&&props.bgColor}]}>
    <View>
      {//if navigation state key parameter has Init-..etc. it means there is nothing to go back
      //so we hide back button.
      }
      {!props.navigation.state.key.includes('Init-')&&<TouchableOpacity  onPress={()=>{
        //if you are using nested navigators , use this over navigation.goBack()
        //navigation.goBack() doesnt work as expected, or works as expexted so doesnt navigates you to back :)
        props.navigation.dispatch(NavigationActions.back())
      }}>
      <FontAwesome  name={'chevron-left'} size={30} color={'white'}/>
    </TouchableOpacity>
    }
  </View>
    <Text style={styles.text}>{props.title}</Text>
    <TouchableOpacity onPress={()=>props.navigation.navigate('DrawerOpen')}>
      <FontAwesome name={'navicon'} size={30} style={{color:'white'}} />
    </TouchableOpacity>
  </View>
</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    height:H.HEIGHT,//This is depraceted, so use 40 or you choose.
    backgroundColor: 'rgb(0, 0, 0)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    alignSelf:'center',
  }
})

export default Header;
