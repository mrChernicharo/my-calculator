import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { VISOR_HEIGHT } from '../lib/constants';
import Statement from './Statement';

const Visor = ({ currentStatement, statements }) => {
	const visorRef = useRef(null);
	const [containerPaddingTop, setContainerPaddingTop] = useState(1);
	const visibleArea = VISOR_HEIGHT - 38;

	const onLayout = e => {
		const { x, y, width, height: textDivHeight } = e.nativeEvent.layout;

		setContainerPaddingTop(v => (v > 0 ? visibleArea - textDivHeight : 0));

		if (textDivHeight > 384) {
			setContainerPaddingTop(1);
			visorRef.current.scrollTo({
				y: textDivHeight,
				animate: true,
			});
		}
	};

	return (
		<View
			style={{
				paddingTop: containerPaddingTop || visibleArea,
				...styles.container,
			}}
		>
			<ScrollView ref={visorRef} contentContainerStyle={styles.visor}>
				<View onLayout={onLayout}>
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
		height: VISOR_HEIGHT,
		width: '90%',
		backgroundColor: '#dedede',
	},
	visor: {
		backgroundColor: '#efefef',
		height: 'auto',
		width: '100%',
		paddingRight: 6,
		alignItems: 'flex-end',
	},
	input: {
		backgroundColor: '#efefef',
		paddingRight: 6,
		color: '#ffa2a3',
		fontSize: 34,
		fontWeight: '600',
		textAlign: 'right',
	},
});

export default Visor;
