// Giai thuat sliding windows
var lengthOfLongestSubstring = function(s) {
    let wordsHashMap = new Map();
    let result = 0;
    let subString = "";
    let start = 0;
    let end = 0;
    while (end < s.length) {
        console.log(wordsHashMap , start, end);
        if (wordsHashMap.has(s[end]) ) {    
            if (wordsHashMap.get(s[end]) >= start){
                start = wordsHashMap.get(s[end]) + 1;
            } 
            wordsHashMap.set(s[end], end);
        }   
        else {
            wordsHashMap.set(s[end] , end);
        }
        end++;
        subString = s.substring (start, end);
        result = Math.max(result, end - start);
    } 
    return result;
};
