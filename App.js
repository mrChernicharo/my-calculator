import React from 'react';
import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { DATA } from './Data';

const Item = ({ item, onClick }) => (
	<RectButton onPress={() => onClick(item)}>
		<View style={styles.item}>
			<Text>{item.symbol}</Text>
		</View>
	</RectButton>
);

const App = () => {
	function handleKeyPress(e) {
		console.log(e);
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<TextInput
				style={styles.visor}
				editable={false}
				selectTextOnFocus={false}
			></TextInput>

			<FlatList
				data={DATA}
				numColumns={4}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<Item item={item} onClick={handleKeyPress} />
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		justifyContent: 'center',
		alignItems: 'center',
		// borderColor: 'red',
		// borderWidth: 2,
	},
	item: {
		backgroundColor: '#f9c2ff',
		width: 80,
		height: 30,
		margin: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	visor: {
		height: 60,
		width: '90%',
		backgroundColor: '#efefef',
		marginBottom: 16,
		fontSize: 32,
		textAlign: 'right',
	},
});

export default App;
