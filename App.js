import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,StatusBar} from 'react-native';
import Navigation  from './Navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <Navigation />
      </View>
    );
  }
}
