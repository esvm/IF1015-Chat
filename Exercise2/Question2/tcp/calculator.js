export const calculate = ({ op, value1, value2 }) => {
    const number1 = parseInt(value1);
    const number2 = parseInt(value2);
    switch(op) {
         case '+':
             return number1 + number2;
         case '-':
             return number1 - number2;
         case '*':
             return number1 * number2;
         case '/':
             return number1 / number2;
     }
 }