function printItems (array) {
  // base case: when we print the last item in the array
  const newArray = [...array]
  if (newArray.length > 0) {
    console.log(newArray[0])
    newArray.shift()
    printItems(newArray)
  }
}

// other way:
// function printItems (array) {
//   const newArray = [...array]
//   if (newArray.length < 1) {
//     return
//   }
//   console.log(newArray[0])
//   newArray.shift()
//   printItems(newArray)
// }

function filter (array, result = [], index = 0) {
  if (index < array.length) {
    if (array[index].indexOf('i') !== -1) {
      result.push(array[index])
    }
    return filter(array, result, index + 1)
  }
  return result
}

// other way:
// let currentIndex = 0
// let filteredArray = []

// function filter (array) {
//   if (currentIndex < array.length) {
//     if (array[currentIndex].indexOf('i') !== -1) {
//       filteredArray.push(array[currentIndex])
//     }
//     currentIndex++
//     return filter(array)
//   }
//   currentIndex = 0
//   const result = [...filteredArray]
//   filteredArray = []
//   return result
// }

// function reverseString (word, index = 0) {
//   if (index === word.length) {
//     return ''
//   }
//   return reverseString(word, index + 1) + word[index]
// }

function reverseString (string) {
  if (string === null) {
    return null
  }
  if (string.length <= 1) {
    return string
  }
  var first = string[0]
  var last = string[string.length - 1]
  var string1 = reverseString(string.substring(1, string.length - 1))
  return last + string1 + first
  // ell, first= h, last= o
  // l , first= e, last= l
  // return l l e
  // return o l l e h
}

module.exports = {
  printItems,
  filter,
  reverseString
}
