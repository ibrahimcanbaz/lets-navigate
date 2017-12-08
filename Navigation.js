import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator}
        from 'react-navigation';
import FirstScreen  from './FirstScreen';
import SecondScreen  from './SecondScreen';
import ThirdScreen  from './ThirdScreen';
import Drawer  from './Drawer';
import {FontAwesome} from '@expo/vector-icons';
import React from 'react';

const TabNavigation=TabNavigator({
  Second: {
    screen: SecondScreen,
    navigationOptions: {
      tabBarIcon: <FontAwesome size={20} name={'user'}/>
    }
  },
  Third: {
    screen: ThirdScreen,
    navigationOptions: {
      tabBarIcon: <FontAwesome size={20} name={'comments'}/>
    }
  },
});
const Navigation=StackNavigator({
  First: {
    screen: FirstScreen,
  },
  Tab: {
    screen: TabNavigation,
  },
},{
  headerMode:'none'
});
const RootNavigation=DrawerNavigator({
  Home: {
    screen: Navigation,
  },
},{
    contentComponent: props => <Drawer {...props} />,
});

export default RootNavigation;
