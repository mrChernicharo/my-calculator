import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const Statement = ({ statement, index }) => {
	console.log(statement);
	return (
		<View>
			<Text>{`statement ${index}`}</Text>
		</View>
	);
};

export default Statement;
