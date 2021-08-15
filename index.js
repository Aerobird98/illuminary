"use strict";
exports.__esModule = true;
var vscode_theme_generator_1 = require("vscode-theme-generator");
var themeName = 'Illuminary';
var colorSet = {
    base: {
        background: '#1D1F2A',
        foreground: '#F2F0EB',
        color1: '#939597',
        color2: '#F2F0EB',
        color3: '#F5DF4D',
        color4: '#F5DF4D'
    }
};
vscode_theme_generator_1.generateTheme(themeName, colorSet, './themes/Illuminary-color-theme.json');
