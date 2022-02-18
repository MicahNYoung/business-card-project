/*******************************************/
/***********  BIRTHDAY CANDLES  ************/
/*********  LOOPS & CONDITIONALS  **********/
/********** by Carrie Jones, TLF ***********/
/*******************************************/

/* 	
	Students - feel free to fork this to your own repl and practice!	 
	For more JS examples and practice problems, see the following document:
	https://tinyurl.com/y3bn6st4
*/


// FIND THE NUMBER OF CANDLES THAT ARE THE TALLEST!

array1 = [2,5,6,9,3,6,7,3,4,8,6,2,8,3,9,1,3,2,9,4,6,3,2,5,8];
array2 = [1,2,3,1,2,3,3,3,2,1,2,3];
array3 = [1,9,3,8,2,1,8,9,3,3,8,2,3,8,1];


function findNumOfTallestCandles(array) {
    let number = 0;
    let n = array.length
    let tallestToShortestCandles = array.sort().reverse()
    let tallestCandle = array[0]
    for(let i = 0; i < n; i++) {
        if (array[i] === tallestCandle) {
            number++;
            console.log(array[i])
        } else {
            console.log(array[i])
            break;
        }
    }
    console.log(`\nThere are ${number} candles with a height of ${tallestCandle}`);
}

findNumOfTallestCandles(array1)