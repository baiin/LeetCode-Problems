

function binary_search(target, list) {
    let start = 0;
    let end = list.length - 1;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        const midVal = list[mid];

        if(midVal === target) {
            return mid;
        }

        if(midVal > target) {
            end = mid - 1;
        } else if(midVal < target) {
            start = mid + 1;
        }
    }

}

const result = binary_search(0, [1, 3, 4, 5, 7, 8, 9, 11, 14, 15]);
console.log(result);