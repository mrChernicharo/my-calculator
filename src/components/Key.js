import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Key = ({ item, onClick }) => (
	<RectButton onPress={() => onClick(item)}>
		<View
			style={{
				backgroundColor: item.color || '#f9c2ff',
				...styles.item,
			}}
		>
			<Text>{item.symbol}</Text>
		</View>
	</RectButton>
);

const styles = StyleSheet.create({
	item: {
		width: 80,
		height: 30,
		margin: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Key;
