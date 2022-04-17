/*
 * Purpose: Find Numbers with Even Number of Digits
 * Create on Apr 17, 2022
 * Author: huyphamfc
 * */
public class process {

	public static void main(String[] args) {
		int array[] = { 12, 345, 2, 6, 7896 };
		int number = findNumbers(array);
		System.out.println(number);
	}

	public static int findNumbers(int[] array) {
		int number = 0;
		for (int i = 0; i < array.length; i++) {
			int count = 0;
			while (array[i] > 0) {
				count++;
				array[i] /= 10;
			}
			if (count % 2 == 0) {
				number++;
			}
		}
		return number;
	}

}