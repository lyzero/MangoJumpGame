import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MangoPlayer } from './MangoPlayer';
import { Obstacle } from './Obstacle';

export class GameScreen extends React.Component {

constructor(props) {
    super(props);
    this.state = {  
      startTime:Date.now(),
      diff: 0, 
      targetY: 5,
      mangoPosition:0,
      obstacleCenter:{
        width: 51,
        height: 51,
        borderRadius: 30,
        resizeMode: Image.resizeMode.contain
      }
    }
  }

  onPressIn = () => {
    this.setState({
      startTime: Date.now()
    })
  }

  onPressOut = () => {
    this.setState({
      diff: Date.now() - this.state.startTime,
      nextTargetY: Math.floor(Math.random() * 201)
    })
  }

  onMangoMove = () => {
    this.setState({
      mangoPosition: this.state.targetY
    })
  }

  getRandomHeightStyle = function(height) {
    return {
      marginTop: 20,
      width: 120 * 2,
      height: height,
      backgroundColor: '#FFC107'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MangoPlayer mangoPosition={this.state.nextTargetY}></MangoPlayer>
        <View >
          <TouchableOpacity style={styles.obstacleWrapperStyle} onPressIn={this.onPressIn} onPressOut={this.onPressOut} 
          onPress={this.onMangoMove}>
            <Obstacle obstacleStyle={this.getRandomHeightStyle(this.state.nextTargetY)}></Obstacle>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  playerMango: {
    width: 51,
    height: 51,
    borderRadius: 30,
    resizeMode: Image.resizeMode.contain,
  },

  rectangleShapeView: {
    marginTop: 20,
    width: 120 * 2,
    backgroundColor: '#FFC107'
  },
  obstacleWrapperStyle: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: "flex-end"
  },

  obstacleStyle: {
      marginTop: 20,
      width: 120 * 2,
      height: 120,
      backgroundColor: '#FFC107',
      alignItems: "flex-end"
  }
});