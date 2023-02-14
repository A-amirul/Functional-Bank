
document.getElementById('btn-deposit').addEventListener('click', function () {
	/*
	1. get the element by id
	2. get the value from the element
	3. convert string value to a number
	*/

	const newDepositAmount = getInputFieldvalueById('deposit-field');

	// get previous deposit total  by id
	const previousTotalDeposit = getElementValueById('deposit-total');

	// update deposit total

	const updatedepositTotal = previousTotalDeposit + newDepositAmount;

	// set deposit total value
	setTextElementValueById('deposit-total', updatedepositTotal);

	// get previous balance by using function

	const previousBalanceTotal = getElementValueById('balance-total');

	const updateBalanceTotal = previousBalanceTotal + updatedepositTotal;
	setTextElementValueById('balance-total', updateBalanceTotal);


})