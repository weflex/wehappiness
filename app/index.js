"use strict";

const generators = require('yeoman-generator');
const config = {};

module.exports = generators.Base.extend({
  /**
   *
   * @constructor
   */
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.config = {};
  },
  /**
   * @method prompting
   */
  prompting: function () {
    const done = this.async();
    this.prompt([
      {
        type    : 'input',
        name    : 'appname',
        message : 'Project name',
        default : 'happy-app'
      },
      {
        type    : 'input',
        name    : 'isApp',
        message : 'Project type, app or mod',
        default : 'app'
      }
    ], function (answers) {
      config.appname  = answers.appname.toLowerCase();
      config.type     = answers.isApp.toLowerCase();
      this.destinationRoot(config.appname);
      this.log('use root directory: ' + config.appname);
      done();
    }.bind(this));
  },
  /**
   * @method common
   */
  common: function () {
    this.fs.copyTpl(
      this.templatePath('common'),
      this.destinationPath('./'),
      config
    );
  },
  /**
   * @method source
   */
  source: function () {
    this.fs.copyTpl(
      this.templatePath('sources/' + config.type),
      this.destinationPath(config.type === 'app' ? 'app' : ''),
      config
    );
  },
  /**
   * @method install
   */
  install: function () {
    this.npmInstall();
  }
});
