import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ExtremeSort {
	
	public static void main (String[] args){
		int k=0;
		List<Integer> sol = new ArrayList<Integer>();
		for (int i = 1; i <= 9; i++)
		{
			sol.add(i);
		}
		
		Collections.shuffle(sol);
		
		while(!isSorted(sol))
		{
			Collections.shuffle(sol);
			k++;
			System.out.print(k);
			System.out.println(sol);	
		}
	}
	
	public static boolean isSorted(List<Integer> sol){
		 boolean sorted = true;        
		    for (int i = 1; i < sol.size(); i++) {
		        if (sol.get(i-1).compareTo(sol.get(i)) > 0) sorted = false;
		    }
		    return sorted;
	}

}
