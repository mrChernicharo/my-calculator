import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Keypad from '../components/Keypad';
import Visor from '../components/Visor';
import { KeysData } from '../lib/constants';

const Main = () => {
	const dummy = [...KeysData];
	const [statements, setStatements] = useState([
		[dummy[4], dummy[6]],
		[dummy[4], dummy[7], dummy[10]],
	]);

	function handleKeyPress(e) {
		console.log(e);
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" />

			<Visor statements={statements} />

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
