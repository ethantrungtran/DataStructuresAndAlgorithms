function maxTurbulenceSize(arr) {
    // O(n)
    let l = 0, r = 1;
    let res = 1, prev = '';
    while (r < arr.length) {
        if (arr[r - 1] > arr[r] && prev != '>') {
            res = Math.max(res, r - l + 1);
            prev = '>';
            r++;
        } else if (arr[r - 1] < arr[r] && prev != '<') {
            res = Math.max(res, r - l + 1);
            prev = '<';
            r++;
        } else {
            if (arr[r - 1] == arr[r]) r++;
            l = r - 1;
            prev = '';
        }
    }
    return res;
}

function maxTurbulenceSize2(arr) {
    // O(n^2)
    let res = 1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i+1]) continue;
        let isGreater = false;
        if (arr[i] > arr[i+1]) isGreater = true;
        let j = i + 1;
        for (; j < arr.length - 1; j++) {
            if ((isGreater && arr[j] >= arr[j+1]) || (!isGreater && arr[j] <= arr[j+1])) break;
            isGreater = !isGreater;
        }
        res = Math.max(res, j - i + 1);
    }
    return res;
};