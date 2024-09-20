// ---------------------------------------- instanceof narrowing ----------------------------------------------
// JavaScript has an operator for checking whether or not a value is an “instance” of another value. it is mostly use with values that can be constructed with new keyword.
// In typescript we check if x is available in Date or not, 

function logValue(x: Date | string) {
    if (x instanceof Date) {
        // log date
      console.log(x.toUTCString());
                
    } else {
        // log string
      console.log(x.toUpperCase());
    }
}