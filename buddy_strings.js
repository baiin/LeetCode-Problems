/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    
    const recurtwo = function() {
        if(A === B) {
            return new Set(A).size !== A.length;
        }

        for(let i = 0; i < A.length; ++i) {
            for(let j = i + 1; j < A.length; ++j) {
                const arr = A.split('');
                const buffer = arr[i];
                arr[i] = arr[j];
                arr[j] = buffer;
                const swapped = arr.join('');

                if(swapped === B) {
                    console.log(A, swapped, B);
                    return true;
                }
            }
        }

        return false;
    };
    
    const recur = (index, swapIndex) => {
        //swap the indexes
        if(index !== swapIndex) {
            const arr = A.split('');
            const buffer = arr[index];
            arr[index] = arr[swapIndex];
            arr[swapIndex] = buffer;

            const swapped = arr.join('');

            if(swapped === B) {
                console.log(A, swapped, B);
                return true;
            } else {
                return false;
            }
        }   
        
        for(let i = index + 1; i < A.length; ++i) {
            // swap current index, with current iteration
            if(recur(index, i)) {
                return true;
            }
        }

        return false;
    };
    
    
    console.log(recurtwo());
    
    return null;
};

//buddyStrings('ab', 'ab');
buddyStrings('aaaaaaabc', 'aaaaaaacb');