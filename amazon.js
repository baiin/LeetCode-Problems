console.log('AMAZON', 23280666662481);

//const exclude = ['is', 'are', 'a'];
//const textLit = 'Rose is a flower red rose are flower';

const exclude = ['and' , 'he', 'the', 'to', 'is', ' '];
const textLit = 
"Jack and Jill went jill jack to the market to buy bread and cheese. \
Cheese is Jack's and Jill's 1231 food food favorite food."


// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function test(literatureText, wordsToExclude)
{
    // WRITE YOUR CODE HERE
    
    let wordList = literatureText.toLowerCase();
    const hash = {};
    
    if(wordList) {
        wordList = wordList.match(/[a-z]+/g);

        const excludeSet = new Set(wordsToExclude);
    
        for(const word of wordList) {
            if(!excludeSet.has(word)) {
                if(hash[word] === undefined) {
                    hash[word] = 0;
                }
                
                ++hash[word];
            }
        }
    }
    
    let max = -Infinity;
    let maxList = [];
    
    for(const word of Object.keys(hash)) {
        if(hash[word] > max) {
            maxList = [word];
            max = hash[word];
        } else if(hash[word] === max) {
            maxList.push(word);
            max = hash[word];
        }
    }
    
    return maxList;
}
// FUNCTION SIGNATURE ENDS

const result = test(textLit, exclude);
console.log(result);