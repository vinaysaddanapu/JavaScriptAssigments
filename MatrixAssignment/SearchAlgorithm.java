package org.omniwyse.apps2;

public class SearchAlgorithm {
	
	public static boolean searchArray(int[][] arr,int number) {
		
		int row = 0;
		int rowLength =arr.length;
		int column = arr[0].length-1;
		int columnLength = arr[0].length;
		
		if (number < arr[0][0] && number > arr[rowLength-1][columnLength-1]) {
			
			return false;
			
		}else {
			
			while (row < rowLength && column >= 0) {
				
				if(arr[row][column] == number)
					return true;
					
				if( number < arr[row][column]) {
					
					 column--;
				    	
					
				}else {
					
					row++;
					
				}
				
			}
			
		
		}
			
		return false;
	}
	

	public static void main(String[] args) {
		
		int[][] myArray = {{1,2,3},{4,5,6},{7,8,9}};
		
		System.out.println(searchArray(myArray,5));
		
		
	}
		
		
}
