import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Statement from './Statement';

const Visor = ({ currentStatement, statements }) => {
	return (
		<ScrollView
			contentContainerStyle={styles.visor}
			style={styles.container}
		>
			<>
				{statements.map((statement, i) => (
					<Statement key={i} statement={statement} index={i} />
				))}
			</>
			<TextInput
				editable={false}
				selectTextOnFocus={false}
				value={currentStatement}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 260,
		width: '90%',
		backgroundColor: '#242424',
		marginBottom: 16,
		fontSize: 32,
	},
	visor: {
		backgroundColor: '#efefef',
		position: 'absolute',
		bottom: 0,
		right: 0,
		height: 'auto',
		alignItems: 'flex-end',
	},
});

export default Visor;
