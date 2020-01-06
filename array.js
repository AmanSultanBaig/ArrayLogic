// expected output

/* 96 92 97 92
   66 62 67 62
   26 22 27 22
   76 72 77 72
   26 22 27 22 */

let arr = [9,6,2,7,2];
for(let i = 0; i < arr.length; i++) {
  for(let j = 1; j < arr.length; j++) {
    console.log(arr[i]+''+arr[j])
  }
}


// another way to do this with different output 
let arr = [9,6,2,7,2];
// to get one index upper then current
let nextIndex;
for(let i = 0; i < arr.length; i++) {
    nextIndex = i + 1;
    if(arr.length-1 == 'undefined'){
    console.log(arr[i]+''+arr[nextIndex]);
    }else{
    console.log(arr[i]+''+arr[arr.length-1]);
    }
}

// expected output 

/* 92
   62
   22
   72
   22 
*/
