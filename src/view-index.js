'use strict';

var RouteView = require('./route-view');

var ViewIndex = RouteView.extend({
  // Instance property used in reporting remove() and render()
  viewName: 'Index View',
  render: function() {
    var markup = [
      '<h1>Index</h1>',
      '<p>Pages:</p>',
      '<ul>',
        '<li><a href="/route1">Route 1</a></li>',
        '<li><a href="/route2">Route 2</a></li>',
      '</ul>'
    ].join('');

    console.log('rendering ' + this.viewName);

    this.$el.empty().html(markup);
    return this;
  }
})

module.exports = ViewIndex;
