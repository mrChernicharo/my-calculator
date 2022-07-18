import React from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
const ButtonWrapper = ({ item, onClick, children }) => {
	return Platform.OS === 'android' ? (
		<TouchableOpacity onPress={() => onClick(item)}>
			{children}
		</TouchableOpacity>
	) : (
		<RectButton onPress={() => onClick(item)}>{children}</RectButton>
	);
};

const Key = ({ item, onClick }) => {
	return (
		<ButtonWrapper onClick={onClick} item={item}>
			<View
				style={{
					backgroundColor: item.bg || '#f9c2ff',
					borderTopLeftRadius: item.symbol === 'AC' ? 10 : 0,
					borderTopRightRadius: item.symbol === '÷' ? 10 : 0,
					borderBottomLeftRadius: item.symbol === '' ? 10 : 0,
					borderBottomRightRadius: item.symbol === '=' ? 10 : 0,

					...styles.item,
				}}
			>
				<Text style={{ color: item.color || '#000', ...styles.text }}>
					{item.symbol}
				</Text>
			</View>
		</ButtonWrapper>
	);
};

const styles = StyleSheet.create({
	item: {
		width: 84,
		height: 42,
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
