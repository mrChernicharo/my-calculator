import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

const components = () => {
	return (
		<View style={styles.visor}>
			<Text>123</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	visor: {
		height: 260,
		width: '90%',
		backgroundColor: '#efefef',
		marginBottom: 16,
		fontSize: 32,
	},
});

export default components;
