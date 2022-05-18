import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Statement from './Statement';

// import { Container } from './styles';

const Visor = ({ currentStatement, statements }) => {
	return (
		<View style={styles.visor}>
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

export default Visor;
