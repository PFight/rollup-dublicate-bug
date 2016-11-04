var nodeResolve = require('rollup-plugin-node-resolve');
var nodePath = require("path");

class RollupNG2 {
  resolveId(id, from) {
    if (id.startsWith('rxjs/')) {
      return nodePath.resolve(`${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`);
    }
    return undefined;
  }
}

const rollupNG2 = () => new RollupNG2();

module.exports = {
  treeshake: true,
  format: 'iife',
  plugins: [
    rollupNG2(),
    nodeResolve({
      jsnext: true, main: true, module: true
    })
  ]
};
