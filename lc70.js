/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let a = 0; b = 1;
      for(let i = 1; i <= n; i++){
      c = a + b;
      a = b;
      b = c;
  };
  return c;
};
console.log(climbStairs(3));
