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
	prevStatement,
	setCurrentStatement,
	setStatements
) {
	const temp = currentStatement.split('');
	const lastChar = temp[temp.length - 1];
	const secondLastChar = temp[temp.length - 2];
	const thirdLastChar = temp[temp.length - 3];

	if (key.type === 'digit') {
		if (lastChar === '0' && ['+', '-', 'X', '÷'].includes(thirdLastChar)) {
			temp.pop();

			setCurrentStatement(val => [...temp, key.symbol].join(''));

			return;
		}
		if (lastChar === '0' && temp.length === 1) {
			// console.log('heeeey', temp, lastChar);
			setCurrentStatement(val => key.symbol);
			return;
		} else {
			setCurrentStatement(val => val + key.symbol);
		}
	}
	if (key.type === 'operation') {
		if (lastChar === ' ') {
			pop3(temp);
			setCurrentStatement([...temp, ` ${key.symbol} `].join(''));
		} else {
			setCurrentStatement(val => `${val} ${key.symbol} `);
		}
	}
	if (key.type === 'action') {
		switch (key.value) {
			case 'back':
				{
					if (temp.length === 1) {
						return;
					}
					if (lastChar === ' ' || lastChar === 'N') {
						pop3(temp);
					} else {
						temp.pop();
					}
					setCurrentStatement(val => temp.join(''));
				}
				break;
			case 'clear':
				{
					setCurrentStatement('0');
				}
				break;
			case 'allClear':
				{
					setCurrentStatement('0');
					setStatements([]);
				}
				break;
			case 'equal':
				{
					console.log('pressed equal!', {
						currentStatement,
						prevStatement,
						temp,
						lastChar,
					});

					if (currentStatement === prevStatement) {
						// setCurrentStatement('0');
						// if ()
						// setStatements(s => [...s, temp.join('')]);
					} else {
						setCurrentStatement(`${evaluate(temp)}`);
						setStatements(s => [...s, temp.join('')]);
					}
				}
				break;
		}
	}
}

function pop3(temp) {
	for (let x of [1, 2, 3]) temp.pop();
}

// function setCurrentStatement() {}

function evaluate(temp) {
	try {
		const result = eval(
			temp
				.map(item => {
					if (item === 'X') return '*';
					if (item === '÷') return '/';
					return item;
				})
				.join('')
		);

		return result ?? 0;
	} catch (err) {
		return 'NaN';
	}
}
