/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let x = 0;
    let y = 0;
    let xDir = 'none';
    let yDir = 'down';
    let buffer = [];
    
    if(numRows === 1) {
        return s;
    }
    
    for(let i = 0; i < s.length; ++i) {
        let index = (s.length - 1) * y + x;
        buffer[index] = s[i];

        if(y === 0) {
            yDir = 'down';
            xDir = 'none';
        } else if(y === numRows - 1) {
            yDir = 'up';
            xDir = 'right';
        }

        if(yDir === 'down') {
            ++y;
        } else {
            --y;
        }

        if(xDir === 'right') {
            ++x;
        }
    }

    return buffer.join('');
};

//console.log(convert('ABC', 1), 'PAHNAPLSIIGYIR');
console.log(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
//console.log(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');;