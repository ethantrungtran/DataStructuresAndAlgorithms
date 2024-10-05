class Solution {
    public boolean checkInclusion(String s1, String s2) {
        // Time O(n), Space O(1)
        int[] s1Count = new int[26];
        for (char ch : s1.toCharArray()) {
            s1Count[ch - 'a']++;
        }

        String s1CountStr = Arrays.stream(s1Count).mapToObj(num -> String.valueOf(num)).collect(Collectors.joining(","));
        int[] s2Count = new int[26];
        int l = 0, r = 0;
        while (r < s2.length()) {
            s2Count[s2.charAt(r) - 'a']++;
            if (r >= s1.length()) {
                s2Count[s2.charAt(l) - 'a']--;
                l++;
            }
            if (s1CountStr.equals(Arrays.stream(s2Count).mapToObj(num -> String.valueOf(num)).collect(Collectors.joining(",")))) return true;
            r++;
        }
        return false;
    }
}