import React from 'react'
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Stocks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Stocks</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
