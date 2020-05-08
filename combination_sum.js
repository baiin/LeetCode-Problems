/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const recur = (combo, index) => {
        const sum = combo.reduce((a, b) => a + b, 0);

        if (sum === target) {
            return [combo];
        }

        if (sum > target) {
            return [];
        }

        let list = [];

        /*
        once we have exhausted all possibilities with one candidate,
        we should no longer use that candidate index 
        if we have [2, 5], we no longer need [5, 2]
        */
        for (let i = index; i < candidates.length; ++i) {
            if (sum + candidates[i] <= target) {
                const newCombo = combo.slice();
                newCombo.push(candidates[i]);

                const result = recur(newCombo, i);

                if (result.length > 0) {
                    list = list.concat(result);
                }
            }
        }

        return list;
    };

    return recur([], 0);
};

console.log(combinationSum([2, 3, 5], 8));
/*
[
    [2,2,2,2],
    [2,3,3],
    [3,5]
]
*/
