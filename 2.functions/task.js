function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;

	for (let element of arr) {
		if (element > max) {
			max = element;
		}
		if (element < min) {
			min = element;
		}
		sum = sum + element;
	}

	avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let initialValue = 0;
	let sumWithInitial = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue,
	);

	if (Object.keys(arr).length == 0) {
		return 0;
	} else {
		return sumWithInitial;
	}
}

function differenceMaxMinWorker(...arr) {
	if (Object.keys(arr).length == 0) {
		return 0;
	} else {
		return (Math.max(...arr) - Math.min(...arr));
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	if (Object.keys(arr).length == 0) {
		return 0;
	} else {
		for (let element of arr) {
			if (!(element % 2)) {
				sumEvenElement += element;
			} else {
				sumOddElement += element;
			}
		}
		return (sumEvenElement - sumOddElement);
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (Object.keys(arr).length == 0) {
		return 0;
	} else {
		for (let element of arr) {
			if (!(element % 2)) {
				sumEvenElement += element;
				countEvenElement += 1;
			}
		}
		return (sumEvenElement / countEvenElement);
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let maxOfFunc;

	for (let element of arrOfArr) {
		maxOfFunc = func(...element);
		if (maxOfFunc > maxWorkerResult) {
			maxWorkerResult = maxOfFunc;
		}
	}
	return maxWorkerResult;
}