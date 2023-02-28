// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function swap(str){


let lower="abcdefghijklmnopqrstuvwxyz"
 let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 let bag="";
  for(let i=0;i<str.length;i++){
     for(let j=0;j<lower.length;j++){//j<upper.length
      if(str[i]==lower[j]){
          bag+=upper[j]
        }
       if(str[i]==upper[j]){
          bag+=lower[j]
      } 
      }
     }
console.log(bag)
}
swap("tEST");
swap("SuRaJ");
swap("MasaI")