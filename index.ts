import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Illuminary';

const colorSet: IColorSet = {
  base: {
    background: '#1D1F2A',
    foreground: '#F2F0EB',
    color1: '#939597',
    color2: '#F2F0EB',
    color3: '#F5DF4D',
    color4: '#F5DF4D'
  }
};

generateTheme(themeName, colorSet, './themes/Illuminary-color-theme.json');
