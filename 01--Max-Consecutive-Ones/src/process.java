/*
 * Purpose: Max Consecutive Ones
 * Create on Apr 17, 2022
 * Author: huyphamfc
 * */
public class process {

	public static void main(String[] args) {
		int array[] = { 1, 1, 0, 1, 0, 1 };
		int maxConsecutiveOnes = findMaxConsecutiveOnes(array);
		System.out.println("Max ConsecutiveOnes is " + maxConsecutiveOnes);
	}

	public static int findMaxConsecutiveOnes(int[] array) {
		int maxConsecutiveOnes = 0;
		int count = 0;
		for (int i = 0; i < array.length; i++) {
			if (array[i] == 1) {
				count++;
				if (count > maxConsecutiveOnes) {
					maxConsecutiveOnes = count;
				}
			} else {
				count = 0;
			}
		}
		return maxConsecutiveOnes;
	}

}