import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { GameScreen } from './Screens/GameScreen'
import { LoginScreen } from './Screens/LoginScreen'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Facebook Login"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
        <Button
          title="Go to Game"
          onPress={() => this.props.navigation.navigate('GameScreen')}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    GameScreen: {
      screen: GameScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}