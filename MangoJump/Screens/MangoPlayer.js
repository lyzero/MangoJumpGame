import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export class MangoPlayer extends React.Component {
    render() {
      console.log(this.props.mangoPosition)
      return (
        <View style={style={top:Dimensions.get("window").height - this.props.mangoPosition, alignItems: "flex-end"}}>
          <Image
            style={styles.playerMango} 
            source={require('./assets/MangoLogo.png')} 
          />
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