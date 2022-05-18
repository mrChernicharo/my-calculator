export function translateKeyPress(key) {
	switch (key.type) {
		case 'operation':
			return ` ${key.symbol} `;
		case 'action':
			return console.log(key);
		case 'digit':
		default:
			return key.symbol;
	}
}

export function handleStatement(
	key,
	currentStatement,
	setCurrentStatement,
	setStatements
) {
	const temp = currentStatement.split('');
	const prev = temp[temp.length - 1];
	// console.log({ prev, temp });

	if (key.type === 'digit') setCurrentStatement(val => val + key.symbol);
	if (key.type === 'operation') {
		if (prev === ' ') {
			for (let x of [1, 2, 3]) temp.pop();
			setCurrentStatement(val => [...temp, ` ${key.symbol} `].join(''));
		} else {
			setCurrentStatement(val => `${val} ${key.symbol} `);
		}
	}
	if (key.type === 'action') {
		switch (key.value) {
			case 'back':
				{
					if (prev === ' ') {
						for (let x of [1, 2, 3]) temp.pop();
					} else {
						temp.pop();
					}
					setCurrentStatement(val => temp.join(''));
				}
				break;
			case 'clear':
				{
					setCurrentStatement('');
				}
				break;
			case 'equal':
				{
					setStatements(s => [...s, temp.join('')]);
					setCurrentStatement(`${evaluate(temp)}`);
				}
				break;
		}
	}
}

function evaluate(temp) {
	try {
		return eval(
			temp
				.map(item => {
					if (item === 'X') return '*';
					if (item === '÷') return '/';
					return item;
				})
				.join('')
		);
	} catch (err) {
		return 'NaN';
	}
}
