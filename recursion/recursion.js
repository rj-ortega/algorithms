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

function reverseString (word, index = 0) {
  if (index === word.length) {
    return ''
  }
  return reverseString(word, index + 1) + word[index]
}

module.exports = {
  printItems,
  filter,
  reverseString
}
