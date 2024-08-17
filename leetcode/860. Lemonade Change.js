function lemonadeChange(bills) {
    const freq = { 5: 0, 10: 0, 20: 0};
    for (let bill of bills) {
        if (bill == 5) {
            freq[5]++;
        } else if (bill == 10) {
            if (!freq[5]) return false;
            freq[10]++;
            freq[5]--;
        } else {
            if (!freq[5]) return false;
            if (freq[10]) {
                freq[10]--;
                freq[5]--;
            } else {
                if (freq[5] < 3) return false;
                freq[5] -= 3;
            }
        }
    }
    return true;
};