function solution(n) {
   
     var a = n.toString(3).split('').reverse().join('');   

     var decimal = parseInt(a, 3);
   
     return decimal
}
console.log(solution(45));