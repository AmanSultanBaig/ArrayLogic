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
