const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

const validateInput = (sumOfCalculation) =>
{
    if (isNaN(sumOfCalculation))
    {
        console.log(`${sumOfCalculation} Is Not A Valid Number!`);
        return true;
    }

};

const calculator = (operationType, num1, num2) => {
    let result;
    if(operationType === ADD)
    { 
        result =  parseInt(num1) +  parseInt(num2); // add error handling..
    }
    else if(operationType === SUBTRACT)
    {
        result =  parseInt(num1) - parseInt(num2);
    }
    else if(operationType === MULTIPLY)
    {
        result =  parseInt(num1) * parseInt(num2);
    }
    else if(operationType === DIVIDE)
    {
        result =  parseInt(num1) / parseInt(num2);
    }

    if (!validateInput(result))
    {
        console.log(`${parseInt(num1)} ${operationType} ${parseInt(num2)} = ${result}`);
    }
    else
    {
        return;
    }


};

const addtion = (a, b) => {
    // validateInput(a, b);
    return calculator(ADD, a, b);

};

const subtraction = (a, b) => {
    return calculator(SUBTRACT, a, b);
};

const mulitplication = (a, b) => {
    return calculator(MULTIPLY, a, b);

};

const division = (a, b) => {
    return calculator(DIVIDE, a, b);
};

module.exports = {
    addtion,
    subtraction,
    mulitplication,
    division
};


