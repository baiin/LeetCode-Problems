var coinChange = function(coins, amount) {
    coinMap = {};
    //const numCoins = recur(amount, coins);
    recur2(amount, coins);
    //return numCoins;

    return null;
};

let coinMap = {};

function recur(amount, coins) {
    if (amount === 0) {
        return 0;
    }

    let min = amount + 1;

    for (const coin of coins) {
        if (coin <= amount) {
            let branchMin;

            if (coinMap[amount - coin] !== undefined) {
                branchMin = coinMap[amount - coin];
            } else {
                branchMin = recur(amount - coin, coins);
                coinMap[amount - coin] = branchMin;
            }

            if (branchMin !== -1 && branchMin < min) {
                min = branchMin;
            }
        }
    }

    if (min === Infinity) {
        return -1;
    }

    return min + 1;
}

function recur2(amount, coins) {
    const _map = {};

    for (let i = 0; i <= amount; ++i) {
        if (i === 0) {
            _map[i] = 0;
        } else {
            let min = amount + 1;

            for (const coin of coins) {
                if (coin <= i) {
                    min = Math.min(_map[i - coin] + 1, min);
                }
            }

            _map[i] = min;
        }
    }

    console.log(_map);
}

const result = coinChange([1, 2, 5], 11);
//const result = coinChange([186, 419, 83, 408], 6249);

console.log(result);
