/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = new Array(numRows)
        .fill(0)
        .map((x,i)=>new Array(i+1).fill(1));
    for(i = 1; i < numRows; i++) {
        for(j = 0; j < i + 1; j++) {
            ans[i][j] = (ans[i - 1][j] ? ans[i - 1][j]: 0) + (ans[i - 1][j - 1] ? ans[i - 1][j - 1]: 0);
        };
    };
    return ans;
};
console.log(generate(5));
