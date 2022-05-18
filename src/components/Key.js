import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Key = ({ item, onClick }) => (
	<RectButton onPress={() => onClick(item)}>
		<View style={{ backgroundColor: item.bg || '#f9c2ff', ...styles.item }}>
			<Text style={{ color: item.color || '#000', ...styles.text }}>
				{item.symbol}
			</Text>
		</View>
	</RectButton>
);

const styles = StyleSheet.create({
	item: {
		width: 80,
		height: 36,
		margin: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: '800',
	},
});

export default Key;
