const Construct = require("./construct");
const Codes = require("./list");

// Basic formatting: bold, dim, italic, underline and strike
const basic = {
    bold: function(a) {
        return Construct.cons2b(Codes.format.noncolor.bold, a || this);
    },
    dim: function(a) {
        return Construct.cons2b(Codes.format.noncolor.dim, a || this);
    },
    italic: function(a) {
        return Construct.cons2b(Codes.format.noncolor.italic, a || this);
    },
    underline: function(a) {
        return Construct.cons2b(Codes.format.noncolor.underline, a || this);
    },
    strike: function(a) {
        return Construct.cons2b(Codes.format.noncolor.strike, a || this);
    }
}

// Fonts
const fonts = {
    reset: function(a) {
        return Construct.cons2b(Codes.format.noncolor.other.fonts.default, a || this);
    },
    font: function(number=1, a) {
        return Construct.cons2b(Codes.format.noncolor.other.fonts["font"+String(number)], a || this);
    },
    swap: function(a) {
        return Construct.cons2b(Codes.format.noncolor.other.swap, a || this)
    }
}

// Resets (reset intensity, blackletter and italic, underline and strike)
const reset = {
    all: function(a) {
        return Construct.cons2b(Codes.format.noncolor.reset.reset, a || this);
    },
    intensity: function(a) {
        return Construct.cons2b(Codes.format.noncolor.reset.reset_intensity, a || this);
    },
    blai: function(a) {
        return Construct.cons2b(Codes.format.noncolor.reset.reset_blai, a || this);
    },
    underline: function(a) {
        return Construct.cons2b(Codes.format.noncolor.reset.reset_underline, a || this);
    },
    strike: function(a) {
        return Construct.cons2b(Codes.format.noncolor.reset.reset_strike, a || this);
    },
    color: function(a) {
        return Construct.cons4b(39, 49, a || this);
    }
}

// 38 = foreground
// 48 = background

// foreground colors
const foreground = {
    rgb(r,g,b, str) {
        return Construct.cons6b(38, 2, r, g, b, str || this);
    },
    hex(hex, str) {
        const rgb = Construct.hexToRGB(hex);
        return Construct.cons6b(38, 2, rgb[0], rgb[1], rgb[2], str || this);
    },

    black: function(a) {
        return Construct.cons4b(38, 5, Codes.format.color.standard.black, a || this);
    },
    red: function(a) {
        return Construct.cons4b(38, 5, Codes.format.color.standard.red, a || this);
    },
    green: function(a) {
        return Construct.cons4b(38, 5, Codes.format.color.standard.green, a || this);
    },
    yellow: function(a) {
        return Construct.cons4b(38, 5, Codes.format.color.standard.yellow, a || this);
    },
    blue: function(a) {
        return Construct.cons4b(38, 5, Codes.format.color.standard.blue, a || this);
    },
    magenta: function(a) {
        return Construct.cons4b(38, 5, Codes.format.color.standard.magenta, a || this);
    },
    cyan: function(a) {
        return Construct.cons4b(38, 5, Codes.format.color.standard.cyan, a || this);
    },
    white: function(a) {
        return Construct.cons4b(38, 5, Codes.format.color.standard.white, a || this);
    },
}

const background = {
    rgb(r,g,b, str) {
        return Construct.cons6b(48, 2, r, g, b, str || this);
    },
    hex(hex, str) {
        const rgb = Construct.hexToRGB(hex);
        return Construct.cons6b(48, 2, rgb[0], rgb[1], rgb[2]);
    },

    black: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.standard.black, a || this);
    },
    red: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.standard.red, a || this);
    },
    green: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.standard.green, a || this);
    },
    yellow: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.standard.yellow, a || this);
    },
    blue: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.standard.blue, a || this);
    },
    magenta: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.standard.magenta, a || this);
    },
    cyan: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.standard.cyan, a || this);
    },
    white: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.standard.white, a || this);
    },
}

const foreground_high_intensity = {
    darkGray: function(a, b) {
        return Construct.cons4b(38, 5, Codes.format.color.high_intensity.dark_gray, a || this);
    },
    brightRed: function(a, b) {
        return Construct.cons4b(38, 5, Codes.format.color.high_intensity.bright_red, a || this);
    },
    brightGreen: function(a, b) {
        return Construct.cons4b(38, 5, Codes.format.color.high_intensity.bright_green, a || this);
    },
    brightYellow: function(a, b) {
        return Construct.cons4b(38, 5, Codes.format.color.high_intensity.bright_yellow, a || this);
    },
    darkBlue: function(a, b) {
        return Construct.cons4b(38, 5, Codes.format.color.high_intensity.dark_blue, a || this);
    },
    brightMagenta: function(a, b) {
        return Construct.cons4b(38, 5, Codes.format.color.high_intensity.bright_magenta, a || this);
    },
    brightCyan: function(a, b) {
        return Construct.cons4b(38, 5, Codes.format.color.high_intensity.bright_cyan, a || this);
    },
    brightWhite: function(a, b) {
        return Construct.cons4b(38, 5, Codes.format.color.high_intensity.bright_white, a || this);
    },
}

const background_high_intensity = {
    darkGray: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.high_intensity.dark_gray, a || this);
    },
    brightRed: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.high_intensity.bright_red, a || this);
    },
    brightGreen: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.high_intensity.bright_green, a || this);
    },
    brightYellow: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.high_intensity.bright_yellow, a || this);
    },
    darkBlue: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.high_intensity.dark_blue, a || this);
    },
    brightMagenta: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.high_intensity.bright_magenta, a || this);
    },
    brightCyan: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.high_intensity.bright_cyan, a || this);
    },
    brightWhite: function(a, b) {
        return Construct.cons4b(48, 5, Codes.format.color.high_intensity.bright_white, a || this);
    },
}

const full = {
    ...basic,
    font: fonts,
    reset,
    ...foreground,
    background,
    highIntensity: {
        ...foreground_high_intensity,
        background: background_high_intensity
    }
}

/*
String.prototype = {
    ...String.prototype,
    ...full
}
*/

module.exports = {
    ...full
};