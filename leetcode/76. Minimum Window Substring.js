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

function minWindow3(s, t) {
    // sliding window, time O()
    let map = {}, letters = new Set();
    // O(t)
    for (let letter of t) {
        map[letter] = (map[letter] ?? 0) + 1;
        letters.add(letter);
    }

    // O(52)
    const isIncluded = () => {
        for (let letter of letters) {
            if (map[letter] > 0) return false;
        }
        return true;
    }

    let min = '', minLen = Infinity;
    let l = 0, r = 0;
    // O(52*s) -> O(s)
    while (r < s.length) {
        map[s[r]] = (map[s[r]] ?? 0) - 1;
        while (l <= r && isIncluded()) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                min = s.substring(l, r+1);
            }
            map[s[l]] = map[s[l]] + 1;
            l++;
        }
        r++;
    }
    return min;
}

function minWindow2(s, t) {
    // brute force, time O(s^2 + t), space(s + t)
    let tMap = {};
    for (let letter of t) tMap[letter] = (tMap[letter] ?? 0) + 1;

    let min = '', minLen = Infinity;
    for (let i = 0; i < s.length; i++) {
        let sMap = {...tMap};
        for (let j = i; j < s.length; j++) {
            if (sMap[s[j]] == null) continue;
            sMap[s[j]]--;
            if (sMap[s[j]] == 0) delete sMap[s[j]];
            if (Object.values(sMap).length == 0 && j - i + 1 < minLen) {
                minLen = j - i + 1;
                min = s.substring(i, j+1);
            }
        }
    }
    return min;
};