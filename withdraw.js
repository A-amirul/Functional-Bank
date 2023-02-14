/*
1. add withdraw button event handler
2. get withdraw amount by using get inputfieldValueById function
3. get previous withdraw amount by getElementValueById function
4. calculate new withdraw total and set the value
5. set new withdraw total by using setTextElementValueById function
6. get previous balance total by using getTextElementValueById function
7. set balance total using setTextElementValueById

*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
	const newWithdrawAmount = getInputFieldvalueById('withdraw-field');

	const previousWithdrawTotal = getElementValueById('withdraw-total');

	const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

	setTextElementValueById('withdraw-total', newWithdrawTotal);
	const previousBalanceTotal = getElementValueById('balance-total');
	const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
	setTextElementValueById('balance-total', newBalanceTotal);





});