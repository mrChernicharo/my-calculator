import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Keypad from '../components/Keypad';
import Visor from '../components/Visor';

const Main = () => {
	function handleKeyPress(e) {
		console.log(e);
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" />

			<Visor />

			<Keypad onKeyPress={handleKeyPress} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Main;
