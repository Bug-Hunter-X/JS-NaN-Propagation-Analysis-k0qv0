# Unexpected NaN Propagation in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript involving the handling of `NaN` (Not a Number) values.

The `foo` function intends to handle different input types gracefully. However, when `NaN` is passed as an argument,  it propagates through the arithmetic operation (`x + 1`), resulting in an unexpected `NaN` output.  This behavior can be difficult to debug, as `NaN` is often indicative of a deeper issue.  The solution illustrates how to explicitly check for `NaN` to prevent this unexpected output. 

## How to reproduce
1. Clone this repository.
2. Open `bug.js` and run it using a JavaScript interpreter (e.g., Node.js).
3. Observe the output for the various inputs, including `NaN`.  You will see that `NaN` is unexpectedly propagated.
4. Compare this to the solution in `bugSolution.js`. 

## Solution
The solution improves the function's robustness by explicitly checking for `NaN` and handling it appropriately. This example replaces the propagation of `NaN` by returning a specific value instead (e.g., -2).