
function searchArray(arr, number){

row = 0;
rowLength = arr.length;
column = arr[0].length-1;
columnLength = arr[0].length;

if(number < arr[0][0] && number > arr[rowLength-1][columnLength-1]){
      
           return false;
        
}else{

    while(row < rowLength && column >=0){

        if(arr[row][column] === number)
          return true;

          if(number < arr[row][column]){
             
            column--;
            
            
          }else{

            row++;
           
          }

    }

    return false;

}

}

arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(searchArray(arr,5));