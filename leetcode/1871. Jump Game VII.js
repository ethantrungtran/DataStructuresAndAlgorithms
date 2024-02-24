// dp + slinding window
function canReach(s, minJump, maxJump) {
    /**
    It's a bottom-up DP implementation. The boolean value represents whether this position is reachable from start. So the first step is to generate the table. Here the table was pre-labeled True or False, thus '1's are already labeled False.
    To determine the state of dp[i], one need to check the states in window dp[i-maxJ : i-minJ], because any one of them can reach i if it's labeled True.
    Then you need to check if there is a True in this window. Notice that this is a sliding window problem, so you don't need to calculate it everytime. You only need to remove the effect from dp[i-maxJ-1] and add the dp[i-minJ]. This is done by these two lines of code pre += dp[i - minJ] and pre -= dp[i - maxJ - 1]
    The if statements if i >= minJ: and if i > maxJ: are dealing with the initial boundary. */
    const N = s.length;
    let count = 0 // the count of can reached index [minJump, maxJump] prior i
    const dp = Array(N).fill(false)
    dp[0] = true
    for (let i = 1; i < N; i++) {
        if (i >= minJump && dp[i - minJump]) {
            count++
        }
        if (i > maxJump && dp[i - maxJump - 1]) {
            count--
        }
        dp[i] = count > 0 && s[i] === '0'
    }
    return dp[N-1];
}

function canReach4(s, minJump, maxJump) {
    // O(n) BFS
    const queue = [0];
    let farthest = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        let start = Math.max(node + minJump, farthest + 1);
        for (let next = start; next <= Math.min(node + maxJump, s.length - 1); next++) {
            if (s[next] == '0') {
                if (next == s.length - 1) return true;
                queue.push(next);
            }
        }
        farthest = Math.min(node + maxJump, s.length - 1);
    }
    return false;
}

function canReach3(s, minJump, maxJump) {
    // O(n) BFS
    const queue = [0];
    const visit = new Set();
    while (queue.length > 0) {
        let node = queue.shift();
        for (let next = node + minJump; next <= Math.min(node + maxJump, s.length - 1); next++) {
            if (visit.has(next)) continue;
            visit.add(next);

            if (s[next] == '0') {
                if (next == s.length - 1) return true;
                queue.push(next);
            }
        }
    }
    return false;
}

function canReach2(s, minJump, maxJump) {
    // O(n) DFS
    if (s[s.length - 1] == '1') return false;
    const visit = new Set();
    const helper = (i) => {
        if (i >= s.length || s[i] == '1' || visit.has(i)) return false;
        if (i == s.length - 1) return true;
        visit.add(0);
        
        for (let j = i + minJump; j <= Math.min(i + maxJump, s.length - 1); j++) {
            if (helper(j)) return true;
        }
        return false;
    }
    return helper(0);
};