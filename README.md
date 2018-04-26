# Match-Sum-Nums
Simple program for determining if a pair of numbers in an array can add up to a given sum argument.  
Currently randomly generates the array.  Can be modified to accept an array argument.

Note: Currently my program only checks numbers against those directly next to them.
      Example: [1, 3, 3, 6] sum = 7  
      My program would return false, even though [0]=1 and [3]=6 which equals the sum.

Got the idea by watching a Youtube video on Google's Youtube channel on coding interview questions.
Once the video finished the prompt, before watching the explanation I decided to take a crack at it myself.

Video link: https://www.youtube.com/watch?v=XKu_SEDAykw

Prompt:  

  Given: A collection of numbers and a sum.
  Request: A matching pair that is equal to the given sum.
  
  Example: [1, 2, 3, 9] Sum = 8 .  Or [1, 2, 4, 4] Sum = 8 . 
  
The first example should output false, because there is no pair of numbers in the array that is equal to the sum.
The second example should output true because [2]=4 and [3]=4 and both equal the sum.

