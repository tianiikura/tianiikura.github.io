/* Задача 1*/
function getArrayRange (arr) {
    if (arr.length === 0 || arr.length === 1) {
        return 0;
    }
    let min = arr [0];
    let max = arr [0];
    for ( let i = 0; i < arr.length; i++){
        if (arr.length [i] > max){
          max = arr.length [i];
        }
        if (testResults [i] < min){
            min = testResults [i];
        }
    }
    let substraction = max - min;
    return substraction; 

   /* варіант 2
   arr.sort(a-b);
    return (arr[arr.length-1] - arr[0]); */ /*не дуже ефективний по швидкості спосіб*/

    /* варіант 3
    return (Math.max(arr) - Math.min(arr)); */
}

/*Задача 2*/
function longerWords (string, number) {
    let array = []; 
    if (string[i].length > number) {
        array ++
    };
    return array;
}

/*Задача 3*/
function icludeString (a, b) {
    if (a.endsWith('b')) {
        return true;
    }
    else {
        return false;
    }
}

/* варіант 2
function icludeString (a, b) {
    if (a.includes ('b', (a.length - b.length))) {
        return true;
    }
    else {
        return false;
    }
} 
варіант 3
function icludeString (a, b) {
    if (a.slice(-b.length)===b) {
        return true;
    }
    else {
        return false;
    }
} 
варіант 4
function icludeString (a, b) {
    return a.slice(-b.length)===b;
}
*/

/*Задача 4 */
function getAverage (numbers) {
    let averageNumbers = [];
    if (numbers.length > 1 && i+1 < numbers.length) {
        averageNumbers.push((numbers[i]+numbers[i+1])/2);
    }
    return averageNumbers;
}

/*Задача 5 */
function vowelsNumbers (str) {
    let result = null;
    let vowels = 'aeiouy';
    for (let letter of str) {
        if (vowels.includes(letter.toLowerCase())) {
            result += 1;
        }
    }
    return result;
}

function removeABC (str) {
    /* if (!str.toLowerCase().includes("a") && !str.toLowerCase().includes("b") && !str.toLowerCase().includes("c")) {
        return null;    
    }*/
    let result = '';
    for (let letter of str) {
        if (!'abc'.includes(letter.toLowerCase())) {
            result += letter;
        }
    }
    if (result === str) {
        return null;
    }
    return result;
}

/*Задача 6*/
function uniqueElements (arr1, arr2) {
    for ( let i of arr2) {
    if (arr1.includes(i) === false) {
        arr1.push(i);
    }
}
    return arr1.sort(function (a,b) {return a-b});
}

/*Задача 7*/
function getCoppy (colors) {
    let clone ={};
    for (let key in colors) {
        value = colors[key];
        clone[value] = key;
    }
    return clone;
}

/*Задача 8*/
function calculateDifference (stuff, insurance) {
    let amount = 0;
    for (let key in stuff) {
        amount += stuff[key];
    }
    return amount = amount - insurance;
}

/*Задача 9*/
function doesBrickFit (a, b, c, w, h) {
    let brick = [a, b, c];
    let hole = [w, h];
    brick.sort(function (a,b) {return a-b});
    hole.sort(function (a,b) {return a-b});
    return brick[0] <= hole[0] && brick[1] <= hole[1];
}

/*Задача 10*/
function getFileName (str) {
   return str.slice (0, str.lastIndexOf('.')); 
   /* оскільки не зрозуміло що конкретно хочуть за умовою задачі, то ось варіант лише для ім'я myfile
   let start = str.lastIndexOf('\\') + 1;
   let end = str.lastIndexOf('.');
   if (start >= 0 && end > 0) {
    return str.slice (start, end);
   } */
}

/*Задача 11*/
function getStr1 (str1, str2) {
    let x = '';
    for (let i = 0; i < str2.length; i++) {
        x =(str2.slice(i) + str2.slice(0,i)); 
        if (str1===x) {
            return true;        
        }
    }
    return false;
}

/*Задача 12*/
function getArray (a) {
    let b = [];
    let c = [];
    a.sort(function (a,b) {return a-b});
    console.log (a);
    for (let i = 0; i < a.length; i+=2) {
        b.push(a[i]);
        c.push(a[i+1]);
    }
    return b ;
}

/*Задача 13*/
function getNewString (str) {
    let lowerCase = str[0].toUpperCase() + str.slice(1).toLowerCase();
    let arr = lowerCase.split(' ');
    let newStr = '';
    for (let word of arr){
        if (word.includes('://')) {
            word = '[посилання заборонено]';
        }
        if (word.includes('@' && '.')) {
            word = '[контакти  заборонені]';
        }
        if (!(word.length <= 3 || isNaN(word))) {
            newStr = newStr + word + ' ';
        }  
    }
    return newStr.slice(-1);
}
// console.log (getNewString ('усі слова у Нижньому abc@gmail.com регістрі, крім 10284 Першої літери 111 першого https://mate.academy/ слова'))

/*Задача 14*/
function  checkBrackets (text) {
    let openingBrackets = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '(') {
            openingBrackets++;
        }
        if (text[i] === ')') {
            openingBrackets--;
            if (openingBrackets < 0) {
                return false;
            }
        }
    }
    return openingBrackets === 0;
}

/*Задача 15 */
function createPass () {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let passwordLength = Math.floor(Math.random() * (20 - 6 + 1) ) + 6;
    let underscoreIndex = Math.floor(Math.random() * passwordLength);
    let numberCount = 0;
    let charactersAllowedLength = 0;
    let requiredCapitalLetters = 2;
    for (i = 0; i < passwordLength; i++) {
        if (i === underscoreIndex) {
            password += '_';
        }
        else {
            isNumberAllowed = isNaN(password[i - 1]) && numberCount <= 5;
            let remainPasswordLength = passwordLength - i;

            if (remainPasswordLength <= requiredCapitalLetters) {
                password += capitalLetters.charAt(Math.floor(Math.random() * capitalLetters.length));
            }
            else {
                charactersAllowedLength = isNumberAllowed ? charactersLength : charactersLength - 10;
                password += characters.charAt(Math.floor(Math.random() * charactersAllowedLength));
            }
            if (isNaN(password[i]) === false) {
                numberCount ++; 
            }
            if (requiredCapitalLetters > 0 && capitalLetters.includes(password[i])) {
                requiredCapitalLetters --;
            }
        }
    }
    return password;
}
console.log (createPass ());
console.log (createPass ());
console.log (createPass ());
/* Задача 16 */
function sortArray (array) {
    let part1 = [];
    let part2 = [];
    array.sort(function (a,b) {return a-b});
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
        part1.push(array[i]);
        }
        else {
        part2.unshift(array[i]);
        }
    }
    console.log(part1);
    console.log(part2);
    return part1.concat(part2);
}
console.log (sortArray ([10, 15, 1, 5, 2, 90, 40, 64, 82, 76, 34, 0, 65, 41, 25, 31, 15]))