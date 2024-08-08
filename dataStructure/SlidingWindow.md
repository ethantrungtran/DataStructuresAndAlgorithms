/**
 * Sliding Window
 * Here comes the template.

    For most substring problem, we are given a string and need to find a substring of it 
    which satisfy some restrictions. A general way is to use a hashmap assisted with two pointers. 
    The template is given below.
 */

```javascript

function findSubString(s) {
   const map = {}
   let counter; // check whether the substring is valid
   let begin=0, end=0; //two pointers, one point to tail and one  head
   let d; //the length of substring

   for() { /* initialize the hash map here */ }

   while(end<s.size()){
      if(map[s[end++]]-- ?){  /* modify counter here */ }

      while(/* counter condition */){ 
            
            /* update d here if finding minimum*/

            //increase begin to make it invalid/valid again
            
            if(map[s[begin++]]++ ?){ /*modify counter here*/ }
      }

      /* update d here if finding maximum*/
   }
   return d;
}

```
One thing needs to be mentioned is that when asked to find maximum substring, we should update maximum after the inner while loop to guarantee that the substring is valid. On the other hand, when asked to find minimum substring, we should update minimum inside the inner while loop.


Example1: 76. Minimum Window Substring
```javascript
function minWindow(s, t) {
    const map = {};
    for (let l of t) map[l] = (map[l] ?? 0) + 1;
    let counter = t.length, l = 0, r = 0, min = Infinity, head = 0;
    while (r < s.length) {
        if (map[s[r]] > 0) counter--;
        map[s[r]] = (map[s[r]] ?? 0) - 1;
        while (l <= r && counter == 0) {
            if (r - l + 1 < min) min = r - (head = l) + 1;
            if (map[s[l]] == 0) counter++;
            map[s[l]]++;
            l++;
        }
        r++;
    }
    return min == Infinity ? "" : s.substring(head, head + min);
}
```

Ex2: Longest Substring with At Most Two Distinct Characters
```javascript
function lengthOfLongestSubstringTwoDistinct(s) {
    const map = {};
    let l = 0, r = 0;
    let counter = 0, max = 0;
    while (r < s.length) {
        if (map[s[r]] == null || map[s[r]] == 0) counter++;
        map[s[r]] = (map[s[r]] ?? 0) + 1;
        while (counter > 2) {
            map[s[l]]--;
            if (map[s[l]] == 0) counter--;
            l++;
        }
        max = Math.max(max, r - l + 1);
        r++;
    }
    console.log(max)
    return max;
}
lengthOfLongestSubstringTwoDistinct('abacababa')
```


