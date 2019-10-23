/* eslint-disable */
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const _ = require('lodash');
const SVGSpriter = require('svg-sprite');
const { JSDOM } = require('jsdom');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

// sprite config/instantiation
const spriterConfig = {
  dest: './sprite',
  mode: {
    symbol: {
      dest: '.',
      sprite: 'cdr-icon-sprite.svg',
    },
  },
};
const spriter = new SVGSpriter(spriterConfig);

// indexArr builds the 'index' index.js file
const indexArr = ['export { default as CdrIcon } from \'./CdrIcon\';'];

// process each svg
glob.sync('../../assets/icons/rei/**/*.svg').forEach((file) => {
  const name = path.basename(file, '.svg');
  const pascalName = _.upperFirst(_.camelCase(name));
  const content = fs.readFileSync(file, 'utf8');
  const outFile = resolve(`comps/${name}.jsx`);

  // everything in root svg element
  const fragment = JSDOM.fragment(content).firstChild;

  // Strip the title element from the svg fragment
  fragment.querySelectorAll('title').forEach((el) => {
    el.parentNode.removeChild(el);
  });
  const { innerHTML } = fragment;

  // create vue component
  const component = `
import CdrIcon from '../CdrIcon';

export default {
  name: 'Icon${pascalName}',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      ${innerHTML.trim()}
    </cdr-icon>)
  },
};
`;

  // write component file
  fs.outputFileSync(`${outFile}`, component);

  // add file to 'index'
  indexArr.push(`export { default as Icon${pascalName} } from './comps/${name}';`);

  // add to sprite
  spriter.add(path.resolve(file), null, content);
});
// output icon sprite & sprite component
indexArr.push('export { default as CdrIconSprite } from \'./comps/CdrIconSprite\';'); // eslint-disable-line max-len
spriter.compile((error, result) => {
  Object.keys(result).forEach((mode) => {
    Object.keys(result[mode]).forEach((resource) => {
      fs.outputFileSync(result[mode][resource].path, result[mode][resource].contents);
      console.log('Created icon sprite');// eslint-disable-line no-console
      fs.outputFileSync(
        resolve('comps/CdrIconSprite.jsx'),
        `
export default {
  name: 'CdrIconSprite',
  render(h) {
    return h(
      'div',
      {
        class: 'cdr-icon-sprite',
        domProps: {
          innerHTML: '${result[mode][resource].contents}',
        },
      },
    );
  },
};
`,
      );
    });
  });
});

// output the 'index' file
fs.outputFileSync(
  resolve('index.js'),
  `// file created by generate.js
/* eslint-disable */
${indexArr.join('\n')}`,
);
