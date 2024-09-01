function groupAnagrams(strs) {
    const getKey = (str) => {
        const freq = Array(26).fill(0);
        for (let char of str) freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        return freq.join('-');
    }

    const map = {};
    for (let str of strs) {
        const key = getKey(str);
        if (!map[key]) map[key] = [];
        map[key].push(str);
    }

    return Object.values(map);
}

function groupAnagrams3(strs) {
    // O(n * mlogm)
    const map = {};
    for (let str of strs) {
        const sorted = str.split('').sort().join('');
        if (!map[sorted]) map[sorted] = [];
        map[sorted].push(str);
    }
    return Object.values(map);
}

// function groupAnagrams2(strs) {
//     const getCode = (char) => ((char.charCodeAt(0) - 'a'.charCodeAt(0) + 1) ** 2);
//     const sumCode = (str) => str.split('').reduce((acc, char) => acc + getCode(char), 0);

//     const map = {};
//     for (let str of strs) {
//         const sum = sumCode(str) + '-' + str.length;
//         if (!map[sum]) map[sum] = [];
//         map[sum].push(str);
//     }

//     return Object.values(map);
// };