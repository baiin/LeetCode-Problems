function climbing_stairs(n) {
    const mapping = [];

    for (let i = 0; i <= n; ++i) {
        if (i <= 2) {
            mapping[i] = i;
        } else {
            mapping[i] = 0;

            if (i - 1 > 0) {
                mapping[i] += mapping[i - 1];
            }

            if (i - 2 > 0) {
                mapping[i] += mapping[i - 2];
            }
        }
    }

    console.log(mapping);

    return mapping[n];
}

//console.log(climbing_stairs(2)); // 2
//console.log(climbing_stairs(3)); // 3
console.log(climbing_stairs(4)); // 5
