'use strict';
const Funnel = require('broccoli-funnel');
const BroccoliDebug = require('broccoli-debug');

module.exports = {
  name: require('./package').name,

  init() {
    this._super.init && this._super.init.apply(this, arguments);
    this.debugTree = BroccoliDebug.buildDebugCallback('nrpae');
  },

  treeForAddon() {
    let addonTree = new Funnel('.', {
      include: [
        'rest/*',
        'rest.js'
      ]
    });

    return this.debugTree(addonTree, 'custom-addon-tree');
  }
};
