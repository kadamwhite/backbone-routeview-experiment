'use strict';

var Backbone = require('backbone');

var IndexView = require('./view-index');
var ViewOne = require('./view-one');
var ViewTwo = require('./view-two');

var Router = Backbone.Router.extend({

  initialize: function() {
    this.on('route', function(r) {
      console.log('route triggered: ' + r);
    });
  },

  routes: {
    '':   'index',
    'route1': 'route1',
    'route2': 'route2'
  },

  index: function() {
    var indexView = new IndexView({
      router: this
    });
  },

  route1: function() {
    var viewOne = new ViewOne({
      router: this
    });
  },

  route2: function() {
    var viewTwo = new ViewTwo({
      router: this
    });
  }

});

module.exports = new Router();
