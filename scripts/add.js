
var inputSumA = document.getElementById("sumA");
var inputSumB = document.getElementById("sumB");
var inputSumR = document.getElementById("sumR");
var message = document.getElementById("message");

function calcSum()
{
	if (isNaN(inputSumA.value) || isNaN(inputSumB.value)) {
		inputSumR.value = "";

		return;
	}

	inputSumR.value = Number(inputSumA.value) + Number(inputSumB.value);
}

function calcSub()
{
	if (isNaN(inputSumA.value) || isNaN(inputSumB.value)) {
		inputSumR.value = "";

		return;
	}

	inputSumR.value = Number(inputSumA.value)  Number(inputSumB.value);
}

function calcClear()
{
	inputSumA.value = "";
	inputSumB.value = "";
	inputSumR.value = "";
	message.value = "";
}


function calculadora(action)
{
	if (action == "borrar") {
		calcInputR.value = "";
		calcInputA.value = "";
		calcInputB.value = "";

		return;
	}

	if (isNaN(calcInputA.value) || isNaN(calcInputB.value)) {

		return;
	}

	if (action == "borrar") {
		calcInputR.value = "";
		calcInputA.value = "";
		calcInputB.value = "";

		return;
	}

	if (isNaN(calcInputA.value) || isNaN(calcInputB.value)) {
	
		return;
	}

	switch (action) {
		case "sum":
			calcInputR.value = Number(calcInputA.value) + Number(calcInputB.value);
			break;

		case "sub":
			calcInputR.value = Number(calcInputA.value) - Number(calcInputB.value);
			break;

		case "mul":
			calcInputR.value = Number(calcInputA.value) * Number(calcInputB.value);
			break;

		case "div":
			if (Number(calcInputB.value) != 0) {
				calcInputR.value = Number(calcInputA.value) / Number(calcInputB.value);
			}
			else {
				calcInputR.value = "";
			}

			break;
	}
}