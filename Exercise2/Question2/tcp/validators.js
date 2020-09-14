const isValidOperation = (op) => {
    switch(op) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;            
    }

    return false;
};

export const validate = (operation) => {
    if (!operation)
        throw new Error('Invalid Object');

    if (!operation.op)
        throw new Error('Operation is missing');

    if (!isValidOperation(operation.op))
        throw new Error('Invalid Operation');
    
    if (!operation.value1)
        throw new Error('Invalid first value');

    if (!operation.value2)
        throw new Error('Invalid second value');
};

export const readyToSend = (calculateObject) => {
    if (!calculateObject)
        return false;

    if (!calculateObject.op)
        return false;

    if (!isValidOperation(calculateObject.op))
        throw new Error('Operation is invalid');

    if (!calculateObject.value1)
        return false;

    if (!calculateObject.value2)
        return false;

    return true;
};