import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Keypad from '../components/Keypad';
import Visor from '../components/Visor';

const Main = () => {
	const [currentStatement, setCurrentStatement] = useState('');
	const [statements, setStatements] = useState([
		'20 + 5',
		'25',
		'1000 X 2',
		'2000',
	]);

	function handleKeyPress(e) {
		console.log(e);
		if (e.type === 'digit') setCurrentStatement(val => val + e.symbol);
		if (e.type === 'operation')
			setCurrentStatement(val => `${val} ${e.symbol} `);
		if (e.type === 'action') {
			switch (e.value) {
				case 'back': {
					const temp = currentStatement.split('');
					console.log(temp, temp[temp.length - 1]);
					if (temp[temp.length - 1] === ' ') {
						for (let x of [1, 2, 3]) {
							temp.pop();
						}
					} else {
						temp.pop();
					}
					setCurrentStatement(val => temp.join(''));
				}
			}
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" />

			<Visor
				currentStatement={currentStatement}
				statements={statements}
			/>

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
