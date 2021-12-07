const adition = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const multiplication = (a, b) => {
	return b >= 0 ? [...Array(b)].reduce((acc) => adition(acc, a), 0) : [...Array(a)].reduce((acc) => adition(acc, b), 0);
};

const division = (a, b) => {
	return a === 0 || b === 0 ? 'No se puede dividir entre cero' : b > 1 ? [...Array(a).keys()].reduce((acc, num) => multiplication(num, b) <= a ? adition(acc, 1) : acc, -1) : a;
};