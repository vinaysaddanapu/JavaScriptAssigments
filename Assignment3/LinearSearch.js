var numArr = [[1,2,3],[4,5,6],[7,8,9]];

console.log(numArr);

function linearSearch(number){

  for(i=0;i<3;i++){

    for(j=0;j<numArr.length;j++){

        if(numArr[i][j] === number)
        return true;

    }
  }

  return false;

}

console.log(linearSearch(6));