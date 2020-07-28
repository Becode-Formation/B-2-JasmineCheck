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

    return invertObject;
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
