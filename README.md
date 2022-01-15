# utiliz.js
 utiliz is a module for completing simple tasks like: stopwatches, colored text in console, simple cli tools and more!

### You can create pseudo-pointers like this. They work in a similar fashion, but you have to use the `get` and `set` functions.
```js
const { Pointer } = require("utiliz");

const myPointer = new Pointer("hello"); // create a new pointer

console.log(myPointer.get()); // log the pointer's value ("hello")

function changePointer(pointer) { // function takes in a pointer
    pointer.set("different"); // set the pointer
}

changePointer(myPointer); // run the changePointer function and pass in the pointer we created earlier

console.log(myPointer.get()); // log the pointer's new value ("different")
```

### You can initialize the colors like this. The only argument is safe mode. If you set safe mode to `true`, it won't override the String.prototype. (if you change the `false` to `true`, it will enable safe mode which will act the same as the pointer safe mode)
```js
const { Terminal } = require("utiliz");

const color = Terminal.init(false); // false means it will override the String.prototype
                    // Color.init also returns the list of color functions
                    // (<color>.red("some string")) for older version of node
                    // like v12 which is used on Replit and CodeSandbox

console.log("hello".green());

// if you wanna use multiple styles, use it like this:
console.log(color.bold("hello".green()));
// or alternatively (but a bit messy)
console.log(("hello".bold()).green());
```

### If you're looking for better looking logs, you can use the StringUtil part of the module.
### There is an extra function called "trim", which removes all whitespace from a string.
```js
const { StringUtil } = require("utiliz");

// String utilities 
StringUtil.init(false); // false means it will override the String.prototype
                    // StringUtil.init also returns the list of color functions
                    // (<color>.<func>(<arg>)) for older version of node
                    // like v12 which is used on Replit and CodeSandbox

console.log("uh oh".warn()); // make a warning out of "uh oh"
console.log("uh oh".error()); // make an error out of "uh oh"
console.log("please note".note()); // make a note message out of "please note"
console.log("please note".info()); // make an info message out of "please note"
console.log("debug".debug()); // make a debug message out of "debug"
console.log("this is urgent".urgent()); // make an "urgent" message out of "this is urgent"
```

## The following functions are intended for async functions.

### If you're looking to read input from the terminal, you can use the IOUtil part of the module.
```js
const { IOUtil } = require("utiliz");

(async ()=>{ // Standard utilities
        const io = new IOUtil(); // this creates a new interface
        const name = await io.readline("My name is: "); // read the next line from stdin

        console.log("Nice to meet you, "+name); // log the result
        // -------------------------------------------------------- \\
        const hobby = await io.readline("My hobby is".green() + ": "); // putting 'true' means it will automatically close the interface after the prompt
        console.log(((name.green() + "'s favorite thing to do is: ").bold() + (hobby.bold()).blue()).note()); // we can also use stringutil and terminalcolors with this
        // -------------------------------------------------------- \\
        const sushi = await io.readline("Do you like sushi".green() + ": ", true); // putting 'true' means it will automatically close the interface after the prompt
        console.log(((name.green() + " likes sushi? ").bold() + (sushi.bold()).blue()).note());
)();
```

### There is also a time utility built in to the module.
### It's main intended use is telling the difference between two times.
```js
(async()=>{ // Time utility
    let currentTime = new Time(); // create the time object
    console.log(("Start time".green() + ": " + currentTime.getTime()).note());
    const io = new IOUtil();
    const answer = await io.readline("What is 1+1? ".urgent(), true);
    console.log(("It took you ".green()+(currentTime.getDifference()).toString()+" seconds and you are ".green()));
    console.log(answer.toString() == "2" ? ("Correct!".green()).bold() : ("Incorrect, it's not "+answer+"!").red());
})()
```