'use strict';

var RouteView = require('./route-view');

var ViewOne = RouteView.extend({
  // Instance property used in reporting remove() and render()
  viewName: 'View One',
  render: function() {
    var markup = [
      '<h1>Route One</h1>',
      '<p>Pages:</p>',
      '<ul>',
        '<li><a href="/">Home</a></li>',
        '<li><a href="/route2">Route 2</a></li>',
      '</ul>'
    ].join('');

    console.log('rendering ' + this.viewName);

    this.$el.empty().html(markup);
    return this;
  }
})

module.exports = ViewOne;
