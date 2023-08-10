
const fruits: string[] = ["a", "banana", "apple", "apple", "grape"];

const indexOfApple = fruits.indexOf("apple");
console.log("Index of 'apple':", indexOfApple);

const indexOfOrange = fruits.indexOf("orange");
// !=== -1  check whether is it exit in array or not
console.log("Index of 'orange':", indexOfOrange !== -1);

const indexOfWatermelon = fruits.indexOf("watermelon");
console.log("Index of 'watermelon':", indexOfWatermelon   !== -1);

const Note : string = "If the element is not found, it returns -1."

