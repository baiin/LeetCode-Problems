/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    
    let minutes = 0;
    
    while(true) {
        let changed = false;
        let zombies = 0;
        let fresh = 0;
        let nextGrid = [];
        
        for(let y = 0; y < grid.length; ++y) {
            nextGrid[y] = [];
            for(let x = 0; x < grid[y].length; ++x) {
                nextGrid[y].push(grid[y][x]);
            } 
        }
        
        for(let y = 0; y < grid.length; ++y) {
            for(let x = 0; x < grid[y].length; ++x) {
                if(grid[y][x] === 1) {
                   ++fresh; 
                }
                
                if(grid[y][x] === 2) {
                    console.log('zombie', y, x)
                    ++zombies;
                    
                    if(y + 1 < grid.length && grid[y + 1][x] === 1) {
                        nextGrid[y + 1][x] = 2
                        changed = true;
                    }
                    
                    if(y - 1 > -1 && grid[y - 1][x] === 1) {
                        nextGrid[y - 1][x] = 2;
                        changed = true;
                    }
                    
                    if(x + 1 < grid[y].length && grid[y][x + 1] === 1) {
                        nextGrid[y][x + 1] = 2;
                        changed = true;
                    }
                    
                    if(x - 1 > -1 && grid[y][x - 1] === 1) {
                        nextGrid[y][x - 1] = 2;
                        changed = true;
                    }

                    console.log(changed);
                }
            }
        }
        
        if(!changed) {
            if(fresh > 0) {
                minutes = -1;
            }
            
            break;
        }
        
        grid = nextGrid.slice();
        ++minutes;
    }
    
    return minutes;
};

var orangesRotting_BFS = function(grid) {
    
    let minutes = 0;
    let queue = [];
    let fresh = 0;
    
    for(let y = 0; y < grid.length; ++y) {
        for(let x = 0; x < grid[y].length; ++x) {
            if(grid[y][x] === 2) {
                queue.push([y, x]);
            } else if(grid[y][x] === 1) {
                ++fresh;
            }
        }
    }
    
    while(queue.length) {
        const size = queue.length;
        
        for(let i = 0; i < size; ++i) {
            const [y, x] = queue.shift();

            if(y + 1 < grid.length && grid[y + 1][x] === 1) {
                grid[y + 1][x] = 2;
                queue.push([y + 1, x]);
                --fresh;
            }

            if(y - 1 > -1 && grid[y - 1][x] === 1) {
                grid[y - 1][x] = 2;
                queue.push([y - 1, x]);
                --fresh;
            }

            if(x + 1 < grid[y].length && grid[y][x + 1] === 1) {
                grid[y][x + 1] = 2;
                queue.push([y, x + 1]);
                --fresh;
            }

            if(x - 1 > -1 && grid[y][x - 1] === 1) {
                grid[y][x - 1] = 2;
                queue.push([y, x - 1]);
                --fresh;
            }
        }
        
        if(queue.length > 0) {
            ++minutes;
        }
    }
    
    return fresh === 0 ? minutes : -1;
};

orangesRotting([[1, 2]]);