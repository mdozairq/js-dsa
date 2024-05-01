
var lengthOfLongestSubstring = function(s) {
    let i=j=0;
    let unique = 0;
    let ans = 0;
    let m = new Map()
    while(j<s.length){
       m.set(s[j], (m.get(s[j]) || 0) + 1);
       if(m.get(s[j]) == 1){
          unique++;
       }
       if(unique === j-i+1){
        ans = Math.max(j-i+1, ans)
       }else if(unique<j-i+1){
        m.set(s[i], (m.get(s[i]) - 1));
        if(m.get(s[i]) === 0){
            unique--;
        }
        i++;
       }

        j++;
    }
    return ans;
};

var optimisedLengthOfLongestSubstring = function(s) {    
    let n = s.length;
    let map = new Map();
    let pointer = 0;
    let maxLen = 0;

    for(let i=0;i<n;i++){
        if(map.has(s[i]) && map.get(s[i]) >= pointer){
            pointer = map.get(s[i]) + 1;
        }

        map.set(s[i], i);
        maxLen = Math.max(maxLen, i - pointer + 1);
    }

    return maxLen;
};