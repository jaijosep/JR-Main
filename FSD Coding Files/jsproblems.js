// function fizzbuzz (n){
//     console.log("[");
//     for(let i=1; i<=n; i++) {
//         if (i%3 === 0 && i%5 === 0){
//             console.log ("Fizz Buzz,");
//         }
//         else if (i%3 === 0){
//             console.log ("Fizz,");
//         }
//         else if (i%5 === 0){
//             console.log ("Buzz,");
//         }
//         else {
//             console.log(i+",");
//         }
//     }   
//     console.log("]"); 
//     }
// fizzbuzz(20);

// function fizzbuzz (n){
//     let fb = new Array();
//     for(let i=1; i<=n; i++) {
//         if (i%3 === 0 && i%5 === 0){
//             fb[i-1] = "Fizz Buzz";
//         }
//         else if (i%3 === 0){
//             fb[i-1] = "Fizz";
//         }
//         else if (i%5 === 0){
//             fb[i-1] = "Buzz";
//         }
//         else {
//             fb[i-1] = i;
//         }
//     }   
//     console.log(fb); 
//     }
// fizzbuzz(20);

// function fizzbuzz (n) {
//     let fb = new Array();
//     for(let i=1; i<=n; i++) {
//         if (i%3 === 0 && i%5 === 0){
//             fb.push("Fizz Buzz");
//         }
//         else if (i%3 === 0){
//             fb.push("Fizz");
//         }
//         else if (i%5 === 0){
//             fb.push("Buzz");
//         }
//         else {
//             fb.push(i);
//         }
//     }   
//     console.log(fb); 
//     }
// fizzbuzz(20);


// function isPrime (n) {
//     let a=0;
//     if (n===1){
//         return false
//     }
//     for(let i=2; i<n; i++) {
//             a=n%i;
//        if (a===0){
//            console.log("False");
//            break;
//        }
//    }
//    if (a!=0){
//     console.log("True")
// }
// }

// function isPrime (n) {
//     if (n <= 1) return false;
//    if (n === 2) return true;
 
//    for (let i = 2; i <= n / 2; i++) {
//      if (n % i === 0) {
//        return false;
//      }
//    }
//    return true;
//  }
// isPrime(954235857)

function lookAndSay (n) {
    {
         
        // Base cases
        if (n == 1)    
            return "1";
        if (n == 2)    
            return "11";
       
        // Find n'th term by generating
        // all terms from 3 to n-1.
        // Every term is generated
        // using previous term
           
        // Initialize previous term
        let str = "11";
         
        for(let i = 3; i <= n; i++)
        {
             
            // In below for loop, previous
            // character is processed in
            // current iteration. That is
            // why a dummy character is
            // added to make sure that loop
            // runs one extra iteration.
            str += '$';
            let len = str.length;
             
            // Initialize count
            // of matching chars
            let cnt = 1;
             
            // Initialize i'th
            // term in series
            let tmp = "";
            let arr = str.split("");
               
            // Process previous term
            // to find the next term
            for(let j = 1; j < len; j++)
            {
                 
                // If current character
                // doesn't match
                if (arr[j] != arr[j - 1])
                {
                     
                    // Append count of
                    // str[j-1] to temp
                    tmp += cnt + 0;
       
                    // Append str[j-1]
                    tmp += arr[j - 1];
       
                    // Reset count
                    cnt = 1;
                }
       
                // If matches, then increment
                // count of matching characters
                else cnt++;
            }
       
            // Update str
            str = tmp;
        }
        return str;
    }
     
    // Driver Code
    let N = 3;
     
    document.write(countnndSay(N));
    }