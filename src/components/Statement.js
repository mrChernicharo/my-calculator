import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const Statement = ({ statement, index }) => {
	// console.log(statement);
	return (
		<View
			style={
				{
					// borderWidth: 2,
				}
			}
		>
			<Text
				style={{
					fontSize: 32,
					textAlign: 'right',
				}}
			>
				{statement}
			</Text>
		</View>
	);
};

export default Statement;
