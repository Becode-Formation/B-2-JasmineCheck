let selectElementsStartingWithA = (array) => {
    let elt = []
    array.forEach(element => {
        if (element.startsWith("a")) {
            elt.push(element)
        }
    });
    return elt;
}

let selectElementsStartingWithVowel = (array) => {
    let names = []
    let vowels = ["a", "e", "i", "u", "o"]
    array.forEach(element => {
        for (let i = 0; i < vowels.length; i++)
            if (element.startsWith(vowels[i])) {
                names.push(element)
            }
    })
    return names
}

let removeNullElements = (array) => {
    let newArray = []
    array.forEach(element => {
        if (element != null) {
            newArray.push(element)
        }
    })
    return newArray;
}

let removeNullAndFalseElements = (array) => {
    let newArray = []
    array.forEach(element => {
        if (element !== null && element !== false) {
            newArray.push(element)
        }
    })
    return newArray;
}

let reverseWordsInArray = (array) => {
    // let newArray = []
    // array.forEach(elt => {
    //     let str = elt
    //     let splitArray = str.split("")
    //     splitArray.reverse()
    //     str = splitArray.join("")
    //     newArray.push(str)
    // })
    let newArray = [];
    array.forEach(element => {
        newArray.push(element.split("").reverse().join(""));
    })
    return newArray;
}

let everyPossiblePair = (array) => {
    // let firstArray = [array[2], array[0]]
    // let secondArray = [array[2], array[1]]
    // let thirdArray = [array[0], array[1]]
    // let newArray = []
    // newArray.push(firstArray, secondArray, thirdArray)
    let paired = []
    array.sort();
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            paired.push([array[i], array[j]]);
        }
    }
    return paired;
}

let allElementsExceptFirstThree = (array) => {
    let greaterArray = []
    array.forEach(elt => {
        if (elt > 3) {
            greaterArray.push(elt)
        }
    })
    return greaterArray;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {
    let sortArray = []
    let tempArray = []
    array.forEach(element => {
        tempArray.push(element.split("").reverse().join(""))
        tempArray.sort();
    })
    tempArray.forEach(elt => {
        sortArray.push(elt.split("").reverse().join(""))
    })
    return sortArray;
}

let getFirstHalf = (string) => {
    let half = Math.round(string.length / 2)
    return string.substr(0, half);
}

let makeNegative = (number) => {

    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let nbr = 0
    array.forEach(elt => {
        let tempArray = []
        tempArray.push(elt.split("").reverse().join(""))
        if (elt === tempArray[0]) {
            console.log(tempArray[0])
            nbr += 1
        }
    })
    return nbr;
}

let shortestWord = (array) => {
    let shortestWord = array[0]
    array.forEach(elt => {
        if (elt.length < shortestWord.length) {
            shortestWord = elt
        }
    })
    return shortestWord;
}

let longestWord = (array) => {
    let longestWordArray = array[0]
    array.forEach(elt => {
        if (elt.length > longestWordArray.length) {
            longestWordArray = elt
        }
    })
    return longestWordArray;
}

let sumNumbers = (array) => {
    let sum = 0
    array.forEach(elt => {
        sum += elt
    })
    return sum;
}

let repeatElements = (array) => {
    array.forEach(elt => {
        array.push(elt)
    })
    return array
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    let average = 0
    let sum = 0
    array.forEach(element => {
        sum += element
        average = sum / array.length
    });
    return average;
}

let getElementsUntilGreaterThanFive = (array) => {
    let greaterFive = []
    for (let i = 0; i < array.length; i++) {
        if (i <= 5) {
            greaterFive.push(array[i])
        }
    }
    return greaterFive;
}

let convertArrayToObject = (array) => {
    let object = {}
    for (let i = 0; i < array.length; i++) {
        object[array[i]] = array[i + 1]
        i++
    }
    return object;
}

let getAllLetters = (array) => {
    let lettersArray = []
    let newArray = []
    str = ""
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            lettersArray.push(array[i][j])
            lettersArray.sort()
        }
    }
    let i = 0
    lettersArray.forEach(elt => {
        i++
        if (elt != lettersArray[i]) {
            newArray.push(elt)
        }
    })
    return newArray;
}

let swapKeysAndValues = (object) => {
    const swap = {}
    Object.keys(object).forEach(key => {
        swap[object[key]] = key
    })
    return swap;
}

let sumKeysAndValues = (object) => {
    let sum = 0
    Object.keys(object).forEach(key => {
        key = parseInt(key)
        value = parseInt(object[key])
        sum += key + value
    })
    return sum;
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, "");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let day = date.getDay()
    let month = date.getDate()
    console.log(day, month)
    let putZero = (value) => {
        if (value < 10) {
            value = `0${value}`
        }
        return value
    }
    return `${putZero(month)}/${putZero(day)}/${date.getFullYear()}`;
}

let getDomainName = (string) => {
    let mail = string.split("@")
    let str = mail[1]
    let strSplit = str.split(".")
    strSplit.pop()
    let domaine = strSplit.join(".")
    return domaine;
}

let titleize = (string) => {
    //Split la string
    //Pour chaque élement du tableau
        // Si l'élément est le premier ou le 3eme ou le dernier ou commence après un point
        //Pour chaque lettre de l'élement
            //Si c'est la première lettre 
                // Mettre en Uppercase
    //Reassembler en string

    let newString = string.split(" ")
    for(let i = 0; i < newString.length; i ++){
        if(i === 0 || i === 3 || i === 6 || i === 1){
            console.log(newString[i])
           newString[i] =  newString[i][0].toUpperCase() + newString[i].substr(1)
        } else if( newString[i - 1].includes('.' )){
            newString[i] =  newString[i][0].toUpperCase() + newString[i].substr(1)
        }
    }

    return newString.join(" ");
}

let checkForSpecialCharacters = (string) => {
    let reg = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    return reg.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let factorize = (number) => {
        if (number < 0) {
            return -1
        } else if (number === 0) {
            return 1
        } else {
            return (number * factorize(number - 1))
        }
    }
    return factorize(number);
}

let findAnagrams = (string) => {
    let getAllAnagrams = (string) => {
        if (string.length === 1)
            return string
        let anagrams = []
        for (let i = 0; i < string.length; i++) {
            let letter = string[0]
            let nString = getAllAnagrams(string.slice(1, string.length))
            for (let j = 0; j < nString.length; j++)
                anagrams.push(letter + nString[j])
            string = string.slice(1, string.length) + letter
        }
        return anagrams
    }
    return getAllAnagrams(string)
}

let convertToCelsius = (number) => {
    number = Math.round((number - 32) * 5 / 9)
    return number;
}

let letterPosition = (array) => {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let numbers = []
    array.forEach(letter => {
        letter = letter.toLowerCase()
        for (let i = 0; i < alphabet.length; i++) {
            if (letter === alphabet[i]) {
                numbers.push(i + 1)
            }
        }
    })
    return numbers;
}
