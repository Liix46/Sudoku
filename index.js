 let sudoku = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
 ];

 let sudoku2 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]  
 ]

 function validSolution(array) {
    let result = true;
    for(const element of array){
        let currentDigit = 1;
        for (let i = 0; i < element.length; i++) {
            let check = false;
            for (let j = 0; j < element.length; j++) {
            
                if (element[j] == currentDigit) {
                    currentDigit++;
                    check = true;
                    break;
                }
                if(element[j] == 0){
                    console.log("there should not be empty in the row - " + "r:" + i + " c:"+ (j+1));
                    result = false;
                    return result;
                }
            }
            if (check == false) {
                console.log("row is not unique");
                result = false;
                return result;
            }
        }
       
        if (currentDigit != 10) {
            console.log("row is not unique");
            result = false;
            return result;
        }
    }
   

    return result;
 }

 let result = validSolution(sudoku);
 console.log(result);

 result = validSolution(sudoku2);
 console.log(result);