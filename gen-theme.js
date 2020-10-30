const fs = require('fs');
const yaml = require('js-yaml');

const themeCfg = yaml.safeLoad(fs.readFileSync('src/theme/workpi.yaml', {encoding: 'utf8'}));
let tsFile = `
// DO NOT EDIT - THIS FILE IS AUTOMATICALLY GENERATED FROM workpi.yaml

export const theme = {  
`;
let scssFile = `
// DO NOT EDIT - THIS FILE IS AUTOMATICALLY GENERATED FROM workpi.yaml

`;

function fixValue(value) {
  if (typeof value === 'number') {
    return value;
  }
  return `'${value.replaceAll('\'', '')}'`;
}

function convertCase(s) {
  let r = '';
  let capitalize = false;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c == '-') {
      capitalize = true;
      continue;
    }

    if (capitalize) {
      c = c.toUpperCase();
      capitalize = false;
    }

    r += c;
  }
  return r;
}

String.prototype.replaceAll = function(find, r) {
  let n = 0;
  let i = this.indexOf(find);
  let s = '';
  while (i != -1) {
    s += this.substr(n, i - n) + r;
    n = i + find.length;
    i = this.indexOf(find, i + 1);
  }
  return s + this.substr(n);
}

for (const k in themeCfg) {
  tsFile += `  ${convertCase(k)}: ${fixValue(themeCfg[k])},\n`;
  scssFile += `\$${k}: ${themeCfg[k]};\n`;
}

tsFile += '}\n';

fs.writeFileSync('src/theme/workpi.gen.ts', tsFile);
fs.writeFileSync('src/theme/workpi.gen.scss', scssFile);