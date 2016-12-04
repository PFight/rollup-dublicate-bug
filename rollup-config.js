var nodePath = require("path");

class MyPlugin {
  resolveId(id, from) {
    if (id.startsWith('somelib/')) {
	  // Buggy
	  return `${__dirname}/somelib/${id.replace('somelib/', '')}.js`;
      // Working
	  //return nodePath.resolve(`${__dirname}/somelib/${id.replace('somelib/', '')}.js`);
    }
    return undefined;
  }
}

const myPlugin = () => new MyPlugin();

module.exports = {
  treeshake: true,
  format: 'iife',
  plugins: [
    myPlugin()
  ]
};
