"use strict";

// FIXME(Yorkie): is this can be removed?
require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render () {
    /**
     * TODO
     */
    return <div></div>;
  }
}

(function () {
  ReactDOM.render(
    <App />,
    document.getElementById('root-container'));
})();
