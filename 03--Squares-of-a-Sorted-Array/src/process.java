/*
 * Purpose: Squares of a Sorted Array
 * Create on Apr 17, 2022
 * Author: huyphamfc
 * */
public class process {

	public static void main(String[] args) {
		int array[] = { -4, -1, 0, 3, 10 };
		array = sortedSquares(array);
		printArray(array);
	}

	public static int[] sortedSquares(int[] array) {
		for (int i = 0; i < array.length; i++) {
			array[i] *= array[i];
		}
		return array = quickSort(array, 0, array.length - 1);
	}

	public static int[] quickSort(int[] array, int left, int right) {
		int i = left;
		int j = right;
		float x = array[(left + right) / 2];
		do {
			while (array[i] < x) {
				i++;
			}
			while (array[j] > x) {
				j--;
			}
			if (i <= j) {
				int temp = array[i];
				array[i] = array[j];
				array[j] = temp;
				i++;
				j--;
			}
		} while (i < j);
		if (left < j) {
			quickSort(array, left, j);
		}
		if (i < right) {
			quickSort(array, i, right);
		}
		return array;
	}

	public static void printArray(int[] array) {
		for (int i : array) {
			System.out.print(i + "\t");
		}
		System.out.println();
	}
}