public class Solution {
    public long dividePlayers3(int[] skill) {
        // Time O(n)
        int n = skill.length;
        if (n % 2 != 0) return -1;
        int sum = Arrays.stream(skill).sum();
        int subsum = sum / (n / 2);

        long res = 0;
        Map<Integer, Integer> count = new HashMap<>();
        for (int val : skill) {
            if (count.get(subsum - val) != null && count.get(subsum - val) > 0) {
                count.put(subsum - val, count.get(subsum - val) - 1);
                if (count.get(subsum - val) == 0) count.remove(subsum - val);
                res += val * (subsum - val);
            } else {
                count.put(val, count.getOrDefault(val, 0) + 1);
            }
        }
        if (count.size() > 0) return -1;
        return res;
    }

    public long dividePlayers2(int[] skill) {
        // Time O(nlogn)
        int n = skill.length;
        if (n % 2 != 0) return -1;
        int sum = Arrays.stream(skill).sum();
        int subsum = sum / (n / 2);
        Arrays.sort(skill);

        long res = 0;
        int l = 0, r = n - 1;
        while (l < r) {
            if (skill[l] + skill[r] != subsum) return -1;
            res += (skill[l] * skill[r]);
            l++; r--;
        }
        return res;
    }

    public long dividePlayers(int[] skill) {
        int n = skill.length;
        int totalSkill = 0;
        int[] skillFrequency = new int[1001];

        // Calculate total skill and skill frequency
        for (int playerSkill : skill) {
            totalSkill += playerSkill;
            skillFrequency[playerSkill]++;
        }

        // Check if total skill can be evenly distributed among teams
        if (totalSkill % (n / 2) != 0) {
            return -1;
        }

        int targetTeamSkill = totalSkill / (n / 2);
        long totalChemistry = 0;

        // Calculate total chemistry while verifying valid team formations
        for (int playerSkill : skill) {
            int partnerSkill = targetTeamSkill - playerSkill;

            // Check if a valid partner exists
            if (skillFrequency[partnerSkill] == 0) {
                return -1;
            }

            totalChemistry += (long) playerSkill * (long) partnerSkill;
            skillFrequency[partnerSkill]--;
        }

        // Return half of totalChemistry as each pair is counted twice
        return totalChemistry/2;
    }
} {
    
}
