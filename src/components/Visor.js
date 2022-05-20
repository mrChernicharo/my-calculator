import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Statement from './Statement';

const Visor = ({ currentStatement, statements }) => {
	// console.log(Platform.OS);

	// const [y, setY] = useState(240);
	// const y = useRef(240);
	const scrollViewRef = useRef(null);

	// viewConfig.validAttributes.style

	useEffect(() => {
		const interval = setInterval(() => {
			if (scrollViewRef.current) {
				let rand = Math.random() * 200;

				scrollViewRef.current.scrollTo({
					y: rand,
					animate: true,
				});

				console.log(rand);
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView
				ref={scrollViewRef}
				contentContainerStyle={styles.visor}
			>
				{statements.map((statement, i) => (
					<Statement key={i} statement={statement} index={i} />
				))}
			</ScrollView>
			<TextInput
				style={styles.input}
				editable={false}
				selectTextOnFocus={false}
				value={currentStatement}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 360,
		width: '90%',
		// backgroundColor: '#242424',
		backgroundColor: '#efefef',

		marginBottom: 16,
	},
	visor: {
		backgroundColor: '#efefef',
		// position: 'absolute',
		bottom: 0,
		right: 0,
		height: 'auto',
		alignItems: 'flex-end',
	},
	input: {
		backgroundColor: '#efefef',
		color: '#242424',
		fontSize: 32,
		textAlign: 'right',
	},
});

export default Visor;
