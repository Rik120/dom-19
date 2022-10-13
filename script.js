function getFirstCharacters(str) {

    let result = [];

    str.split(' ').map(word => word.charAt(0) != '' ? result.push(word.charAt(0)) : '');

    let r = result

    if (r[0] == "-") {
        alert("false");
    } else if (number == "" || number == " ") {
        alert("Вы ввели пробел или не ввели ничего");
    } else {
        alert("true");
    }
    
    return result;
}

let nbr = prompt("Введите число").replace(/\s/g, '');

const number = nbr;

getFirstCharacters(number)

