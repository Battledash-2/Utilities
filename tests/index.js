const { Pointer, Terminal, StringUtil, IOUtil, Time } = require("../"); // require the utilities

{ // pointer example
    const myPointer = new Pointer("hello"); // create a new pointer

    console.log(myPointer.get()); // log the pointer's value ("hello")

    function changePointer(pointer) { // function takes in a pointer
        pointer.set("different"); // set the pointer
    }

    changePointer(myPointer); // run the changePointer function and pass in the pointer we created earlier

    console.log(myPointer.get()); // log the pointer's new value ("different")
}

console.log(); // console.log already adds a new line, so if we put a \n we would get two line breaks

{ // terminal color example
    const color = Terminal.init(false); // false means it will override the String.prototype
                       // Color.init also returns the list of color functions
                       // (<color>.red("some string")) for older version of node
                       // like v12 which is used on Replit and CodeSandbox

    console.log("hello".green());

    // if you wanna use multiple styles, use it like this:
    console.log(color.bold("hello".green()));
}

console.log()

{ // String utilities 
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
}

console.log();

(async ()=>{ // Async utilities
    { // Standard utilities
        const io = new IOUtil(); // this creates a new interface
        const name = await io.readline("My name is: "); // read the next line from stdin

        console.log("Nice to meet you, "+name); // log the result
        // -------------------------------------------------------- \\
        const hobby = await io.readline("My hobby is".green() + ": "); // putting 'true' means it will automatically close the interface after the prompt
        console.log(((name.green() + "'s favorite thing to do is: ").bold() + (hobby.bold()).blue()).note()); // we can also use stringutil and terminalcolors with this
        // -------------------------------------------------------- \\
        const sushi = await io.readline("Do you like sushi".green() + ": ", true); // putting 'true' means it will automatically close the interface after the prompt
        console.log(((name.green() + " likes sushi? ").bold() + (sushi.bold()).blue()).note());
    }
    { // Time utility
        let currentTime = new Time(); // create the time object
        console.log(("Start time".green() + ": " + currentTime.getTime()).note());
        const io = new IOUtil();
        const answer = await io.readline("What is 1+1? ".urgent(), true);
        console.log(("It took you ".green()+(currentTime.getDifference()).toString()+" seconds and you are ".green()));
        console.log(answer.toString() == "2" ? ("Correct!".green()).bold() : ("Incorrect, it's not "+answer+"!").red());
    }
})()