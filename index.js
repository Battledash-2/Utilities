// imports
const Color = require("./Terminal");
const IO    = require("readline");

/**
 * Pointer values
 */
class _wrapper { // a wrapper for objects
    constructor(value) {
        this.v = value;
    }

    set(v) {
        this.v = v;
    }
    get() {
        return this.v;
    }
}
module.exports.Pointer = class {
    constructor(value) {
        if (typeof value === "object") return new _wrapper(value);
        this.v = value;
        return value;
    }

    static get(pointer_ref) {
        return pointer_ref.get();
    }

    static set(pointer_ref, value) {
        pointer_ref.set(value);
    }

    set(v) {
        this.v = v;
    }
    get() {
        return this.v;
    }
}

/**
 * Colored console.log
 * (this is from my terminalcolors.js module)
 */
module.exports.Terminal = class {
    static init(safe=false) { // if 'safe' is true, we won't override string.prototype (overriding string.prototype in versions like v12 which is used on sites like codesandbox and repl.it unless you use a bash repl [on replit])
        if (safe == true) return Color;

        for (let name in Color) {
            String.prototype[name] = Color[name];
        }

        return Color;
    }
}

/**
 * String functions
 */
const StringUtil = {
    trim: function(str) {
        return str ? str.replace(/\s+/gm, "") : this.replace(/\s+/gm, "");
    },
    warn: function(warn) {
        return Color.bold(Color.rgb(247, 166, 134, "Warning") + ":") + " " + Color.rgb(255, 255, 255, warn || this);
    },
    error: function(error) {
        return Color.bold(Color.underline(Color.rgb(235, 84, 84, "Error")) + ":") + " " + Color.rgb(255, 255, 255, error || this);
    },
    note: function(info) {
        return Color.bold(Color.highIntensity.darkGray("Note") + ":") + " " + Color.rgb(255, 255, 255, info || this);
    },
    info: function(info) {
        return Color.bold(Color.highIntensity.darkGray("Information") + ":") + " " + Color.rgb(255, 255, 255, info || this);
    },
    debug: function(debug) {
        return Color.bold(Color.rgb(245, 159, 47, "Debug") + ":") + " " + Color.rgb(255, 255, 255, debug || this);
    },
    urgent: function(warn) {
        return Color.bold(Color.rgb(247, 166, 134, "Urgent") + ":") + " " + Color.rgb(255, 255, 255, warn || this);
    },
}
module.exports.StringUtil = class {
    static init(safe=false) {
        if (safe == true) return StringUtil;
        for (let name in StringUtil) {
            String.prototype[name] = StringUtil[name];
        }
        return StringUtil;
    }
}

/**
 * IO Utility
 */
module.exports.IOUtil = class {
    constructor(input=process.stdin, output=process.stdout) {
        this.io = IO.createInterface({
            input,
            output
        });
    }

    readline(text="", closeOnFinish=false) {
        if (closeOnFinish == null) closeOnFinish = false;
        return new Promise(resolve=>{
            this.io.question(text, (res)=>{
                if (closeOnFinish) this.io.close();
                resolve(res);
            });
        });
    }

    close() {
        this.io.close();
    }
}

/**
 * Time utility 
 */
module.exports.Time = class {
    constructor() {
        this.date = new Date();
    }
    getTime() {
        let hour = this.date.getHours();
        let min  = this.date.getMinutes();
        let sec  = this.date.getSeconds();

        hour = hour >= 12 ? hour - 12 : hour;
        
        return `${hour.toString()}:${min.toString()}:${sec.toString()}`;
    }
    getDifference() { // from stackoverflow :)
        const end   = new Date();
        return Math.abs((this.date.getTime() - end.getTime()) / 1000);
    }
    static getDifference() {
        const start = new Date();
        return ()=>{
            return Math.abs((start.getTime() - new Date().getTime()) / 1000);
        }
    }
}