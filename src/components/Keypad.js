import React from 'react';
import { FlatList } from 'react-native';
import Key from '../components/Key';
// import { TextInput } from 'react-native-gesture-handler';
import { KeysData } from '../lib/constants';

// import { Container } from './styles';

const Keypad = ({ onKeyPress }) => {
	return (
		<FlatList
			style={{ marginTop: 36 }}
			data={KeysData}
			numColumns={4}
			keyExtractor={item => item.value}
			renderItem={({ item }) => <Key item={item} onClick={onKeyPress} />}
		/>
	);
};

export default Keypad;
