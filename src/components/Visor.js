import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Statement from './Statement';

const Visor = ({ currentStatement, statements }) => {
	const visorRef = useRef(null);
	const paddingRef = useRef(0);

	const onLayout = e => {
		const { x, y, height, width } = e.nativeEvent.layout;

		visorRef.current.scrollTo({
			y: height,
			animate: true,
		});

		// paddingRef.current += 20;
		console.log(paddingRef.current);
	};

	return (
		<View style={styles.container}>
			<ScrollView ref={visorRef} contentContainerStyle={styles.visor}>
				<View
					style={{ paddingTop: paddingRef.current }}
					onLayout={onLayout}
				>
					{statements.map((statement, i) => (
						<Statement key={i} statement={statement} index={i} />
					))}
				</View>
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
		height: 460,
		width: '90%',
		backgroundColor: '#242424',
		marginBottom: 16,
	},
	visor: {
		backgroundColor: '#efefef',
		bottom: 0,
		right: 0,
		height: 'auto',
		width: '100%',
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
