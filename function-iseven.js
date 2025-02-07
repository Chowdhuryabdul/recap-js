function isEven (number){
 if(number % 2 === 0){
    return true
 }else{
    return false
 }
}
const evenNumber = isEven(11);
// console.log(evenNumber)

function isOdd(number){
    if(number % 2 !== 0){
        return true
    }else{
        return false
    }
}
// console.log(isOdd(11))

function isEvenOrOdd(number){
 const remainder = number % 2;
 if(remainder === 0){
    return true
 }else{
    return false
 }
}

const number1 = isEvenOrOdd(340);
const number2 = isEvenOrOdd(341);
// console.log(number1, number2)


function add(number1, number2){
    const sum = parseInt (number1) + parseInt (number2);
    return sum

}

// const numbers = add('23', '34')
// console.log(numbers)

/* if foodprice is 10 tk how much food i will get?
 */

function quantity(money){
    let foddPrice = 10;
    const givenQuantity = money / foddPrice
    return givenQuantity
}
// console.log(quantity(20))

/* get sum of the element through afunction */

function findSumOfAnArray(array){
    let sum = 0;
    for(let i of numbers){
        if(i % 2 === 0){
            // console.log(i)
            sum = sum + i;
        }
    }
    return sum
}
const numbers = [12, 13, 14, 15, 16, 17, 44]
const theArray = findSumOfAnArray(numbers);
// console.log(theArray)


/* find the largest number through array */

function findTheLargestNumber(number){
    let largest = number[0];
    for(let i of number)
    if(i > largest){
        largest = i
    }
    return largest
}

const array = [12222, 234, 456, 7777, 45];
const theLargest = findTheLargestNumber(array)
// console.log(theLargest)

function findTheBiggestWord(word){
    let biggest = [0];
    for(let i = 1; i < word.length; i++){
        const index = word[i];
        if(index.length > biggest.length)
        biggest = index
        // console.log(index)
    }
    return biggest

}

const arrayOfNames = ['arfi', 'sharif', 'rajib', 'khabirr'];
const theBiggestName = findTheBiggestWord(arrayOfNames);
// console.log(theBiggestName)

function findTheAverageOfEvenNUmbers(number){

    let newArray = []
    for(let i of number){
        if(i % 2 === 0){
        newArray.push(i)
    }
}
let sum = 0;
for( let i of newArray){
     sum = sum + i;
    }
    const length = newArray.length
    const average = sum / length;
    return average
}
const theNewArray = [12, 13, 14, 15, 16, 17, 18, 19, 30];
const theAverage = findTheAverageOfEvenNUmbers(theNewArray);
// console.log(theAverage)

/* find the average of the odd number through function and send the odd number in a array */

function findTheAverageOfOddNumber(number){
    let theVacantArray = [];
    for(let i of number){
        if(i % 2 !== 0){
            theVacantArray.push(i)
        }
    }
    let sum = 0;
    for(i of theVacantArray){
        sum = sum + i;
    }
    const averageOfOdd = sum / theVacantArray.length
    return averageOfOdd
    // console.log(sum)

}
const arrayForFindingAverage = [12, 14, 15, 17, 18, 19, 21];
const theAvergeOfOddNumbers = findTheAverageOfOddNumber(arrayForFindingAverage);
// console.log(theAvergeOfOddNumbers)

/* Remove the duplicate */

function findDuplicate(array){
    let vacantArray = [];
    for(let i of array){
        // console.log(i)
        if(vacantArray.includes(i) === false){
            vacantArray.push(i);
        }
    }
    return vacantArray

}

const arrayOfName = ['abdul', 'rakibul', 'hamidul', 'nahidul', 'abdul', 'rakibul', 'jahidul']
const dulicate = findDuplicate(arrayOfName);
console.log(dulicate);


function findRepetationStrin(string){
    const theVacantArray1 = [];
    for(let i of string){
        // console.log(i)
        if(theVacantArray1.includes(i) === false){
            theVacantArray1.push(i)
        }
    }
    return theVacantArray1
}

const theString = 'i am abdul quaiyum chowdhury and my wife is sadia';
const duplicatefinding = findRepetationStrin(theString);
console.log(duplicatefinding)