declare const _exports: {
    background: {
        rgb(r: any, g: any, b: any, str: any): string;
        hex(hex: any, str: any): string;
        black: (a: any, b: any) => string;
        red: (a: any, b: any) => string;
        green: (a: any, b: any) => string;
        yellow: (a: any, b: any) => string;
        blue: (a: any, b: any) => string;
        magenta: (a: any, b: any) => string;
        cyan: (a: any, b: any) => string;
        white: (a: any, b: any) => string;
    };
    highIntensity: {
        background: {
            darkGray: (a: any, b: any) => string;
            brightRed: (a: any, b: any) => string;
            brightGreen: (a: any, b: any) => string;
            brightYellow: (a: any, b: any) => string;
            darkBlue: (a: any, b: any) => string;
            brightMagenta: (a: any, b: any) => string;
            brightCyan: (a: any, b: any) => string;
            brightWhite: (a: any, b: any) => string;
        };
        darkGray: (a: any, b: any) => string;
        brightRed: (a: any, b: any) => string;
        brightGreen: (a: any, b: any) => string;
        brightYellow: (a: any, b: any) => string;
        darkBlue: (a: any, b: any) => string;
        brightMagenta: (a: any, b: any) => string;
        brightCyan: (a: any, b: any) => string;
        brightWhite: (a: any, b: any) => string;
    };
    rgb(r: any, g: any, b: any, str: any): string;
    hex(hex: any, str: any): string;
    black: (a: any) => string;
    red: (a: any) => string;
    green: (a: any) => string;
    yellow: (a: any) => string;
    blue: (a: any) => string;
    magenta: (a: any) => string;
    cyan: (a: any) => string;
    white: (a: any) => string;
    font: {
        reset: (a: any) => string;
        font: (number: number, a: any) => string;
        swap: (a: any) => string;
    };
    reset: {
        all: (a: any) => string;
        intensity: (a: any) => string;
        blai: (a: any) => string;
        underline: (a: any) => string;
        strike: (a: any) => string;
        color: (a: any) => string;
    };
    bold: (a: any) => string;
    dim: (a: any) => string;
    italic: (a: any) => string;
    underline: (a: any) => string;
    strike: (a: any) => string;
};
export = _exports;
