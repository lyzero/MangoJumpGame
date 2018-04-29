import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

export class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FBLogin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});