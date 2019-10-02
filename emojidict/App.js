import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
	render() {
		return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Yomi App</Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000'
	},
	instructions: {
		textAlign: 'center',
		color: '#fff',
		marginBottom: 5
	}
});
