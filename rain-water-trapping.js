
var trap = function (height) {
    let prefix = [], suffix = [];
    let num1 = height[0];
    let num2 = height[height.length - 1];
    let ans = 0;
    for (let i = 0; i < height.length; i++) {
        if (num1 < height[i]) {
            num1 = height[i];
        }
        prefix.push(num1);

        if (num2 < height[(height.length - 1) - i]) {
            num2 = height[(height.length - 1) - i];
        }

        suffix.unshift(num2)
    }
    
    for(let i=0; i<height.length; i++){
        ans += (Math.min(prefix[i], suffix[i]) - height[i])
    }
    
    return ans;
};