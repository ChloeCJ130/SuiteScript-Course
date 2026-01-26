//Activty Tast 2

var arr1 = "Netsuite".split('');
var arr2 = arr1.reverse();
var arr3 = "Cloudtech".split('');

arr2.push(arr3);

console.log("array 1: length = " + arr1.length + " last = " + arr1.slice(-1));
console.log("array 2: length = " + arr2.length + " last = " + arr2.slice(-1));