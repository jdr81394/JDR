function countUniqueValues(arr){
var i = 0;
for(var j = 1; j < arr.length; j++){
  if(arr[i] !== arr[j]){
    i++;
    arr[i] = arr[j]


  }
} return i +1
}
/*   i
  [1,2,2,3,4,5,5,6,7,7,8,8,9]
       j
times i incremented
times j incremented 1
*/
