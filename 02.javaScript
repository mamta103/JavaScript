1. When comparing two strings with the less than or greater than operator, what is the return result?
var a = 'a';
var b = 'b';
console.log(a < b);
Incorrect - Error
Correct - true
Your choice: incorrect - false
Incorrect - NaN

2. What is the result of the following code snippet?
class Foo{
  constructor(x){
    this.x = x;
  }
  static addFooBar(f, b){
    return f.x + b.x + b.y;
  }
}
class Bar extends Foo{
  constructor(x, y){
    super(x);
    this.y = y;
  }
}
let f = new Foo(5);
let b = new Bar(5, 5);
console.log(Bar.addFooBar(f, b));
Your choice: incorrect - SyntaxError: 'super' keyword unexpected here will be thrown; when inheriting from a static-containing class, you do not need to call super
Correct - 15 is printed to the console.
Incorrect - SyntaxError: addFooBar is undefined will be thrown; classes do not inherit static methods
Incorrect - 10 is printed to the console; the reference of Bar's addFooBar only has access to Bar's properties.

3. How many times will this loop execute?
for (let i = 0; i < 20; i++) {
  if (i == 10) {
    continue;
  }
  if (i == 15) {
    break;
  }
}
Incorrect - 20
Incorrect - 11
Your choice: correct - 16
Incorrect - 10

4. What will the following code evaluate to?
function square(n) { 
  return arguments[0] * arguments[0]; 
}
square(5);
Your choice: incorrect - Error
Correct - 25
Incorrect - undefined
Incorrect - 10

5. Where would be the best place to close the file opened by the snippet below?
let myFile;
try {
  myFile = fs.openSync('path/to/file', 'a');
  fs.appendFileSync(myFile, 'text to add', 'utf8');
} catch (e) {
  // handle error
}
Incorrect - In the catch block
Incorrect - After the try...catch...finally
Incorrect - At the end of the try block
Your choice: correct - In a finally block

6. How can you call a function and assign the this context to an object?
Your choice: incorrect -
function greet() {
  var reply = this.animal;
}
var obj = {
  animal: 'cats'
};
greet.call().this = obj;
Correct -
function greet() {
  var reply = this.animal;
}
var obj = {
  animal: 'cats'
};
greet.call(obj);
Incorrect -
function greet() {
  var reply = this.animal;
}
var obj = {
  animal: 'cats'
};
Incorrect -
function greet() {
  var reply = this.animal;
}
var obj = {
  animal: 'cats'
};
greet.call(null);

7. Which primitive type represents the intentional absence of any object value?
Correct - null
Incorrect - ‘’
Your choice: incorrect - undefined
Incorrect - Error

8. What is the scope of a variable declared with let?
Incorrect - The function in which it is declared.
Your choice: correct - The block in which it is declared.
Incorrect - The block in which it is first referenced.
Incorrect - The module in which it is declared.

9. Generally, where is the best place to put script tags?
Incorrect - At the beginning of the body tag.
Your choice: correct - At the end of the body tag.
Incorrect - At the end of the head tag.
Incorrect - At the beginning of the head tag.

10. What happens when the continue statement is hit in the following snippet?
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 50; j++) {
    console.log(i);
    continue;
    console.log(j);
  }  
}
Your choice: correct - The inner loop skips to the next iteration.
Incorrect - The outer loop terminates early.
Incorrect - The inner loop terminates early.
Incorrect - The outer loop skips to the next iteration.

11. Which example successfully uppercases the variable result?
let result = ‘hello’;
Incorrect - result = result.toHigherCase();
Your choice: correct - result = result.toUpperCase();
Incorrect - result.toUpperCase();
Incorrect - result.sup();

12. What is the array prototype method that changes the contents of an array by removing existing elements and/or adding new elements?
Your choice: correct - [].splice()
Incorrect - [].slice()
Incorrect - [].delete()
Incorrect - [].remove()

13. What is the correct syntax for using the Function.prototype.bind method?
Correct - func.bind(this)
Incorrect - func.bind
Your choice: incorrect - func().bind(this)
Incorrect - func(‘hello’).bind

14. Which of the following snippets will print foo to the console if x is of the same value and type as the string "42"?
Incorrect - if (x == "42") { ... }
Incorrect - if (x == 42) { ... }
Incorrect - if (x === "42) { ... }
Your choice: correct - if (x === "42") { ... }

15. What statement can be used to prevent the use of coding practices that should generally be avoided?
Incorrect -
/// use strict
Correct -
'use strict';
Your choice: incorrect -
<!-- use strict -->
Incorrect -
window.strictMode = true;

16. Given the block of code:
class SomeClass{}
let x = new SomeClass();
What operator would you use to check if x is one of the given class?
Your choice: correct - The instanceof operator; x is instanceof SomeClass
Incorrect - The typeof operator; typeof x == SomeClass
Incorrect - The typeof operator with the primitive designator created by the class definition; typeof x == 'someclass'
Incorrect - Compare the value of x with the value of instantiating a new class; x == new SomeClass()

17. When inheriting from a parent class, what does the super keyword do in the child's constructor?
Incorrect - super instantiates the parent class and copies the properties over as virtual properties on the child class.
Incorrect - super should not be in the constructor; it should be defined as a class method to define the this object for the class.
Your choice: correct - super invokes the parent's constructor, and by extension, defined the lexical context and this object for the child class.
Incorrect - super should not be called in the child's constructor, super should be called in the parents constructor to define the super-class.

18. What object is used to access globally scoped variables in a front-end web application?
Correct - window
Your choice: incorrect - global
Incorrect - browser
Incorrect - document
