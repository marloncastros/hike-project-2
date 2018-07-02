document.getElementById('calculate-button').onclick = function() {

	// Coletar números dentro de caixas de input
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult(val1, val2, operation);

	//Output
	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;
}

/**
*operations
*/
function getResult(val1, val2, operation) {
	if (operation === '+') {
		return val1 + val2;
	} else if (operation === '-') {
		return val1 - val2;
	} else if (operation === '*') {
		return val1 * val2;
	} else if (operation === '/') {
		return val1 / val2;
	}
}