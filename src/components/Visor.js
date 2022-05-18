import React from 'react';
import { StyleSheet, View } from 'react-native';
import Statement from './Statement';

// import { Container } from './styles';

const components = ({ statements }) => {
	return (
		<View style={styles.visor}>
			{statements.map((statement, i) => (
				<Statement key={i} statement={statement} index={i} />
			))}
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
