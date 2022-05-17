import React from 'react';
import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { DATA } from './Data';

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				numColumns={4}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <Item title={item.title} />}
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
		borderColor: 'red',
		borderWidth: 2,
	},
	item: {
		backgroundColor: '#f9c2ff',
		width: 80,
		height: 30,
		margin: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		// fontSize: 32,
	},
});

export default App;
