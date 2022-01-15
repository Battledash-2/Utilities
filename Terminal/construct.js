module.exports = {
    /**
     * @param {(Int|String)} code Color code
     * @param {String} string String to append after color code
     */
    cons2b: (code, string)=>{
        return "\u001b["+code.toString()+"m"+string+"\u001b[0m";
    },

    /**
     * @param {(Int|String)} code ANSI Color code :1
     * @param {(Int|String)} code2 ANSI Color code :2
     * @param {String} string String to append after color code
     */
    cons3b: (code, code2, string)=>{
        return "\u001b["+code.toString()+";"+code2.toString()+"m"+string+"\u001b[0m";
    },

    /**
     * @param {(Int|String)} code ANSI Color code :1
     * @param {(Int|String)} code2 ANSI Color code :2
     * @param {(Int|String)} code3 ANSI Color code :3
     * @param {String} string String to append after color code
     */
    cons4b: (code, code2, code3, string)=>{
        return "\u001b["+code.toString()+";"+code2.toString()+";"+code3.toString()+"m"+string+"\u001b[0m";
    },

    /**
     * @param {(Int|String)} code ANSI Color code :1
     * @param {(Int|String)} code2 ANSI Color code :2
     * @param {(Int|String)} r ANSI Color code :3
     * @param {(Int|String)} g ANSI Color code :4
     * @param {(Int|String)} b ANSI Color code :5
     * @param {String} string String to append after color code
     */
    cons6b: (code, code2, r, g, b, string)=>{
        return "\u001b["+code.toString()+";"+code2.toString()+";"+r.toString()+";"+g.toString()+";"+b.toString()+"m"+string+"\u001b[0m";
    },

    // OTHER
    /**
     * 
     * @param {String} hex The hex
     * @returns {Array} [r, g, b]
     */
    hexToRGB: (hex)=>{
        hex = hex.startsWith("#") ? hex.slice(1) : hex;
        hex = hex.length == 3 ? hex[0].repeat(2) + hex[1].repeat(2) + hex[2].repeat(2) : hex;
        hex = hex.match(/\w{2}/g).map(c=>parseInt(c, 16));
        return hex;
    }
}