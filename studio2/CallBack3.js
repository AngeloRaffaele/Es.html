function filterArray(arr, callback) {
    const NewArray = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] %2 === 0) {
        NewArray.push(callback(arr[i]));  
      }
    }
    return NewArray;
   }
   
   function isEven(num) {
        return num;
   }
   
   const numbers = [1, 2, 3, 4, 5, 6];
   const evenNumbers = filterArray(numbers, isEven);
   console.log(evenNumbers); // Should output [2, 4, 6]