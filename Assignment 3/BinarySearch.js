var numArr = [[0,1,2,3],[4,5,6,7]];

console.log(numArr);

function binarySearch(arr,start,end, number){

var mid = (numArr.length)/2;

for(i=0;i<numArr.length;i++){

    for(j=1;j<=4;j++){

    if(numArr[mid][mid] && mid === number)
       return true;  

    if(number > numArr[i][mid] && number < numArr[1][3]){

     j= mid+1;
     return true;

    }else{
        if(number < numArr[i][mid]){
            j = mid-1;
            return true;
        } 
    }

}

}
 return false;
}

console.log(binarySearch(numArr,0,numArr.length,8));