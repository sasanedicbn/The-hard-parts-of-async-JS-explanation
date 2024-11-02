// JavaScript Code Execution => single-threaded (line by line)

function calculateNumbers(a, b) {
  return a + b;
}
calculateNumbers(10, 5);

// 1* The code is executed line by line (in a single thread) from top to bottom.
// 2* When the thread encounters the function `calculateNumbers`, it stores the function definition in global memory (just the function definition).
// 3* After that, the single thread moves to the next line and encounters `calculateNumbers(10, 5)`.
//    It recognizes that this is a function call because of the parentheses `()` after the function name.
// 4* At this point, JavaScript creates an execution context for the function call. Inside this execution context,
//    a local memory is created to store the function's arguments, which are `10` and `5` in this case.
// 5* During execution, JavaScript looks for the `return` keyword, takes the calculated result from local memory (in this case, `10 + 5`),
//    and returns it to the global context.
