class FoodRatings {
    // foodMap: food to infoFood
    // cuisineMap: cuisine to PriorityQueue of infoFood
    foodMap;
    cuisineMap;
    // O(nlogn)
    constructor(foods, cuisines, ratings) {
        const n = foods.length;
        this.foodMap = {};
        this.cuisineMap = {};
        for (let i = 0; i < n; i++) {
            // init foodMap
            this.foodMap[foods[i]] = {food: foods[i], cuisine: cuisines[i], rating: ratings[i], isDeleted: false}; // new InfoFood(foods[i], cuisines[i], ratings[i]); //  // InfoFood

            // init cuisineMap
            if (this.cuisineMap[cuisines[i]] == null) {
                this.cuisineMap[cuisines[i]] = new PriorityQueue({compare: (a, b) => (b.rating - a.rating) || (a.food > b.food ? 1 : -1)}); // (a.food.localeCompare(b.food)
            }
            this.cuisineMap[cuisines[i]].enqueue(this.foodMap[foods[i]]);
        }
    }

    // O(logn)
    changeRating(food, newRating) {
        this.foodMap[food].isDeleted = true;
        const cuisine = this.foodMap[food].cuisine;
        this.foodMap[food] = { food, cuisine, rating: newRating, isDeleted: false }; // new InfoFood(food, cuisine, newRating);// 
        this.cuisineMap[cuisine].enqueue(this.foodMap[food]);
    }
    // O(1) in average case and O(nlogn) in worst case
    highestRated(cuisine) {
        while (this.cuisineMap[cuisine].front().isDeleted) {
            this.cuisineMap[cuisine].dequeue();
        }
        return this.cuisineMap[cuisine].front().food;
    }
}