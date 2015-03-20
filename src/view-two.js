'use strict';

var RouteView = require('./route-view');

var ViewTwo = RouteView.extend({
  // Instance property used in reporting remove() and render()
  viewName: 'View Two',
  render: function() {
    var markup = [
      '<h1>Route Two</h1>',
      '<p>Pages:</p>',
      '<ul>',
        '<li><a href="/">Home</a></li>',
        '<li><a href="/route1">Route 1</a></li>',
      '</ul>'
    ].join('');

    console.log('rendering ' + this.viewName);

    this.$el.empty().html(markup);
    return this;
  }
})

module.exports = ViewTwo;
