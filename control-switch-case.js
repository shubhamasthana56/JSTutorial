//calculator function 
//operation + - * / % default (No operation seletcted)

function calculator(num1, num2, operation) {
    let calculation = 0;
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            calculation = num1 - num2;
            console.log(calculation);
            break;
        case "*":
            return num1 * num2;
        case "/":
            return num1/num2;
        case "%":
            return num1%num2;
        default:
            console.log(calculation);


    }
}
//const add = calculator(2,3, "+");
console.log(calculator(3,5,"+"));