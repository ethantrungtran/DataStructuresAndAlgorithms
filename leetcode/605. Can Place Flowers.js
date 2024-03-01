function canPlaceFlowers(flowerbed, n) {
    // O(n)
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0
            && (i == 0 || flowerbed[i-1] == 0 )
            && (i == (flowerbed.length - 1) || flowerbed[i+1] == 0)) {
                count++;
                flowerbed[i] = 1;
            }
    }
    return n <= count;
};
canPlaceFlowers([1,0,0,0,1], 2)