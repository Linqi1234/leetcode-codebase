/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let ans = 0;
    for(i = 0; i < prices.length; i++) {
        if(prices[i] < min){
            min = prices[i];
        }
        if(prices[i] - min > ans){
            ans = prices[i] - min;
        }
    }
    return ans;
};

console.log(maxProfit([3, 2, 1, 100]));
