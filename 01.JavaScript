1. Given the statement let person = 'Alice', the statement person instanceof String is false. What does this mean?
Correct - 'Alice' is a string primitive, and instanceof checks to see what constructor was used to create the item. The String object constructor must be used to create the string for that expression to be true.
Incorrect - The return value of the constructor used when 'Alice' is evaluated is undefined.
Incorrect - instanceof performs Type coercion if there is no Type specified; since person was initialized without a type, it defaults to Object.
Incorrect - String is not a type in JavaScript; there is only the string primitive. instanceof is only used for custom types.

2. When does the finally block of a try...catch...finally execute?
Incorrect - When the try block executes and an error is raised, then handled.
Your choice: correct - Everytime the try block executes.
Incorrect - When the try block executes and an error is raised.
Incorrect - When the try block executes and no errors are raised.

3. Given the following string and function:
var str = ‘Hello my name is ’;
function addName() {
  return ‘taylor’;
}
How can you use both to return ‘Hello my name is taylor’ with a template literal?
Your choice: incorrect - `{str}{addName()}`
Incorrect - `$str$addName()`
Correct - `${str}${addName()}`
Incorrect - “${str}${addName()}”

4. What is the array prototype method that changes the contents of an array by removing existing elements and/or adding new elements?
Your choice: incorrect - [].delete()
Correct - [].splice()
Incorrect - [].remove()
Incorrect - [].slice()

5. Which example successfully uppercases the variable result?
let result = ‘hello’;
Incorrect - result.sup();
Your choice: incorrect - result.toUpperCase();
Correct - result = result.toUpperCase();
Incorrect - result = result.toHigherCase();

6. Where would be the best place to close the file opened by the snippet below?
let myFile;
try {
  myFile = fs.openSync('path/to/file', 'a');
  fs.appendFileSync(myFile, 'text to add', 'utf8');
} catch (e) {
  // handle error
}
Incorrect - After the try...catch...finally
Incorrect - In the catch block
Correct - In a finally block
Your choice: incorrect - At the end of the try block

7. What is the correct escape notation for a new line in a string?
Your choice: correct -
\n
Incorrect -
/n/
Incorrect -
/newLine
Incorrect -
/n
8. How can you re-write the following function body to combine the conditional and return statements into one ternary statement?
function foo(x){
  if(x == 1){
    return x;
  } else {
    return x + 1;
  }
}
Incorrect - return x ? x + 1 : x
Your choice: correct - return x == 1 ? x : x + 1;
Incorrect - return x == 1 || x + 1;
Incorrect - return x = 1: x ? x + 1;

9. Generally, where is the best place to put script tags?
Incorrect - At the beginning of the head tag.
Your choice: incorrect - At the beginning of the body tag.
Incorrect - At the end of the head tag.
Correct - At the end of the body tag.

10. Which primitive type represents the intentional absence of any object value?
Incorrect - undefined
Incorrect - ‘’
Your choice: correct - null
Incorrect - Error
