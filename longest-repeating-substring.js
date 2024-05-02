function characterReplacement(s, k) {
    let n = s.length;
    let arr = new Array(26).fill(0);
    let maxLen = 0, maxFreq = 0;
    let i = 0, j = 0;

    while (j < n) {
        let charInt = s[j].charCodeAt(0) - 'A'.charCodeAt(0);
        arr[charInt]++;

        maxFreq = Math.max(maxFreq, arr[charInt]);

        while (j - i + 1 - maxFreq > k) {
            let charToRemove = s[i].charCodeAt(0) - 'A'.charCodeAt(0);
            arr[charToRemove]--;
            i++;

            for (let p = 0; p < 26; p++) {
                maxFreq = Math.max(maxFreq, arr[p]);
            }
        }

        maxLen = Math.max(maxLen, j - i + 1);
        j++;
    }

    return maxLen;
};

let ans = characterReplacement("AASSASAAADDAY", 3)
console.log(ans);