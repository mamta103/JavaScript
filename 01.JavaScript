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

11. How can you use a DOM method to create a new HTML element?
Incorrect - var myNewListItem = new document.createElement("li");
Correct - var myNewListItem = document.createElement("li");
Your choice: incorrect - var myNewListItem = document.createHTMLElement("li");
Incorrect - var myNewListItem = document.newElement("li");

12. What symbol(s) are used to specify a non-default path in a switch statement?
Incorrect - break
Incorrect - switch
Your choice: correct - case
Incorrect - Matched curly braces ({...})

13. Which of the following snippets will print foo to the console if x is of the same value and type as the string "42"?
Your choice: incorrect - if (x == 42) { ... }
Incorrect - if (x === "42) { ... }
Correct - if (x === "42") { ... }
Incorrect - if (x == "42") { ... }

14. What is the difference between let y = ++x and let y = x++?
Your choice: correct - let y = ++x will first increment x and then assign the result to y; let y = x++ will first assign the value of x to y and then increment x.
Incorrect - These statements are identical in Javascript.
Incorrect - let y = ++x will first increment x and then assign the result to y while keeping the original value of x the same; let y = x++ will assign the value of x to y but have a side effect of changing the value of x.
Incorrect - let y = ++x will first assign the value of x to y and then increment x; let y = x++ will first increment x then assign the result to y.

15. The following function never prints "bar" to the console, no matter what is passed into the function. Why?
function foo(x) {
  if (x = undefined) {
    console.log('foo');
  } else if (x == false) {
    console.log('bar');
  } else {
    console.log('baz');
  }
}
Correct - The first condition expression overwrites x.
Incorrect - The second condition expression overwrites x.
Your choice: incorrect - The first condition expression handles everything that the second would.
Incorrect - x can never be false.

16. When the following input element is typed into:
<input id=”foo” type="text" />
Which answer will print to the console any input into this element?
Correct -
var myInput = document.getElementById('foo')
myInput.addEventListener("change", (e) => {
        console.log(e.currentTarget.value)
})
Your choice: incorrect -
var myInput = document.getElementById('foo')
myInput.addEventListener("click", (e) => {
        console.log(e.currentTarget.value)
})
Incorrect -
var myInput = document.getElementById('foo')
myInput.addEvent("change", (e) => {
        console.log(e.currentTarget.value)
})
Incorrect -
var myInput = document.getElementById('foo')
myInput.addListener("change", (e) => {
        console.log(e.currentTarget.value)
})

17. What is the scope of a variable declared with let?
Incorrect - The function in which it is declared.
Incorrect - The module in which it is declared.
Your choice: correct - The block in which it is declared.
Incorrect - The block in which it is first referenced.

18. Can classes inherit from other classes? How?
Your choice: correct - Yes; using the extends keyword:
class Animal{ ... }
class Sheep extends Animal{ ... }
Incorrect - Yes, classes are syntactic sugar for functions and functions have built-in inheritance when you pass the function prototype into the inheriting class:
class Animal{ ... }
class Sheep(Animal.prototype){ ... }
Incorrect - No, classes are syntactic sugar for functions and functions do not have built-in inheritance.
Incorrect - Yes, by passing the class reference into the constructor of the class:
class Animal{ ... }
class Sheep(Animal){ ... }


What statement can be used to prevent the use of coding practices that should generally be avoided?
Incorrect -
/// use strict
Correct -
'use strict';
Your choice: incorrect -
<!-- use strict -->
Incorrect -
window.strictMode = true;
