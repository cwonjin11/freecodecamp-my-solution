// var islandPerimeter = function(grid) {
    
//     const rows = grid.length
//     const columns = grid[0].length
    
//     let perimeter = 0
    
//     for(let i = 0; i < rows; i++){
//         for(let j = 0; j < columns; j++){
//             if(!grid[i][j]) continue;
//             perimeter += 4
//             if(i > 0 && grid[i-1][j]) perimeter--
//             if(j > 0 && grid[i][j-1]) perimeter--
//             if(i < rows -1 && grid[i+1][j]) perimeter--
//             if(j < columns -1 && grid[i][j+1]) perimeter--
//         }
//     }
//     return perimeter
// };


var islandPerimeter = function(grid) {
    
    const rows = grid.length
    const columns = grid[0].length
    
    let perimeter = 0
    
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < columns; col++){
            if(grid[row][col] == 1) { 
                perimeter += 4 
                if(row > 0 && grid[row-1][col] == 1) perimeter -= 2
                if(col > 0 && grid[row][col-1] == 1) perimeter -= 2
            }
            
        }
    }
    
    return perimeter
}