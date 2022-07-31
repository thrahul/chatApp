import React from "react";
import styles from "./HomeStyle";
import { Dimensions, StatusBar, TouchableOpacity, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {useColorModeValue, Box } from 'native-base';
import ChatsRoute from "../../../components/chats/chats";
import StatusRoute from "../../../components/status/status";
import CallsRoute from "../../../components/calls/calls";

const initialLayout = {
  width: Dimensions.get('window').width
};
const renderScene = SceneMap({
  first: ChatsRoute,
  second: StatusRoute,
  third: CallsRoute,
});

const HomeScreen = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([{
      key: 'first',
      title: 'Chats'
    }, {
      key: 'second',
      title: 'Status'
    }, {
      key: 'third',
      title: 'Calls'
    },]);
  
    const renderTabBar = props => {
      const inputRange = props.navigationState.routes.map((x, i) => i);
      return <Box style={{backgroundColor: '#0000ff'}}  flexDirection="row">
          {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
          });
          const color = index === i ? useColorModeValue('#fff', '#fff') : useColorModeValue('#fff', '#fff');
          const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
          return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
                <Pressable onPress={() => {
              console.log(i);
              setIndex(i);
            }}>
                  <Animated.Text style={{
                color
              }}>{route.title}</Animated.Text>
                </Pressable>
              </Box>;
        })}
        </Box>;
    };
  
    return <TabView navigationState={{
      index,
      routes
    }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout}  />;
}

export default HomeScreen;