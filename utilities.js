function getInputFieldvalueById(inputFieldId) {
	const inputField = document.getElementById(inputFieldId);
	const inputFieldValueString = inputField.value;
	const inputFieldValue = parseFloat(inputFieldValueString);
	inputField.value = '';
	return inputFieldValue;
}

function getElementValueById(elementId) {
	const element = document.getElementById(elementId);
	const elementValueString = element.innerText;
	const Value = parseFloat(elementValueString);
	return Value;
}

function setTextElementValueById(elementId, newValue) {
	const textElement = document.getElementById(elementId);
	textElement.innerText = newValue;
}
