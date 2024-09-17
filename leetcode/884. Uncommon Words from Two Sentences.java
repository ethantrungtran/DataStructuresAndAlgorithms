class Solution {
    public String[] uncommonFromSentences(String s1, String s2) {
        // Time O(n), Space O(n)
        Map<String, Integer> map = new HashMap<>();
        for (String word : (s1 + " " + s2).split(" ")) {
            map.put(word, map.getOrDefault(word, 0) + 1);
        }

        List<String> res = new ArrayList<String>();
        for (String word : map.keySet()) {
            if (map.get(word) == 1) res.add(word);
        }
        return res.toArray(new String[0]);
    }

    public String[] uncommonFromSentences2(String s1, String s2) {
        String[] words1 = s1.split(" ");
        String[] words2 = s2.split(" ");
        Map<String, Integer> map1 = new HashMap<>();
        Map<String, Integer> map2 = new HashMap<>();
        for (String word : words1) {
            map1.put(word, map1.getOrDefault(word, 0) + 1);
        }
        for (String word : words2) {
            map2.put(word, map2.getOrDefault(word, 0) + 1);
        }

        List<String> res = new ArrayList<String>();

        for (String word : map1.keySet()) {
            if (!map2.containsKey(word) && map1.get(word) == 1) res.add(word);
        }
        for (String word : map2.keySet()) {
            if (!map1.containsKey(word) && map2.get(word) == 1) res.add(word);
        }

        return res.toArray(new String[0]);
    }
}