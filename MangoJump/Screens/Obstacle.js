import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export class Obstacle extends React.Component {

    render() {
        return (
            <View style={this.props.obstacleStyle ? this.props.obstacleStyle : styles.obstacleStyle}>
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