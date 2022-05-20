import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Keypad from '../components/Keypad';
import Visor from '../components/Visor';
import { handleStatement } from '../lib/helpers';

const Main = () => {
	const [currentStatement, setCurrentStatement] = useState('0');
	const [statements, setStatements] = useState([
		'20 + 5',
		'25',
		'1000 X 2',
		'2000',
		'20 + 5',
		'25',
		'1000 X 2',
		'2000',
		'20 + 5',
		'25',
		'1000 X 2',
		'2000',
		'20 + 5',
		'25',
		'1000 X 2',
		'2000',
		'20 + 5',
		'25',
		'1000 X 2',
		'2000',
	]);

	function handleKeyPress(key) {
		const lastStatement = statements[statements.length - 1];

		handleStatement(
			key,
			currentStatement,
			lastStatement,
			setCurrentStatement,
			setStatements
		);
	}

	useEffect(() => {
		// console.log('currentStatement', currentStatement);
	}, [currentStatement]);

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
