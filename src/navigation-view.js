'use strict';

var Backbone = require('backbone');

var NavigationView = Backbone.View.extend({

  // This view works at the level of the entire document to catch
  // all navigation clicks. This is contrived for the purposes of
  // this demo.
  el: 'body',

  initialize: function(options) {
    this.router = options.router;
  },

  events: {
    'click.navigation a': 'navigate'
  },

  navigate: function(evt) {
    evt.preventDefault();
    var targetRoute = this.$(evt.target).attr('href');

    console.log('clicked on button: going to ' + targetRoute);

    // Use the router to go to the route specified in the link
    this.router.navigate(targetRoute, { trigger: true });
  }

});

// Singleton
module.exports = NavigationView;
