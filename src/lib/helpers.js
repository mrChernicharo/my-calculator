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
