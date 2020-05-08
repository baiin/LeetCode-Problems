/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const nums = [];
    let hasSymbol = false;
    let numCount = 0;

    const atoi = () => {
        for (let i = 0; i < str.length; ++i) {
            const ascii_value = str.charCodeAt(i);
            let isNum = false;

            if (ascii_value >= 48 && ascii_value <= 57) {
                isNum = true;
                nums.push(str[i]);
                ++numCount;
            }

            if (ascii_value === 46 && nums.length !== 0) {
                // dot
                break;
            }

            if (!isNum && nums.length !== 0) {
                break;
            }

            if (ascii_value !== 32 && ascii_value !== 45 && ascii_value !== 43 && !isNum && nums.length === 0) {
                return 0;
            }

            if ((ascii_value === 43 || ascii_value == 45) && hasSymbol) {
                return 0;
            }

            if ((ascii_value === 45 || ascii_value === 43) && nums.length === 0) {
                hasSymbol = true;
                nums.push(str[i]);
            }
        }

        let isNeg = false;
        let val = 0;

        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] === '-') {
                isNeg = true;
            } else if (nums[i] === '+') {
                isNeg = false;
            } else {
                val += nums[i] * 10 ** (numCount - 1);
                --numCount;
            }
        }

        if (isNeg) {
            val *= -1;
        }

        return val;
    };

    let value = atoi();
    console.log(value);
    console.log(nums);

    if (value < -Math.pow(2, 31)) {
        value = -Math.pow(2, 31);
    } else if (value > Math.pow(2, 31) - 1) {
        value = Math.pow(2, 31) - 1;
    }

    return value;
};
