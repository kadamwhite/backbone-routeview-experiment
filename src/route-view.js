'use strict';

var Backbone = require('backbone');

var RouteView = Backbone.View.extend({

  // All RouteViews replace the entire #content
  el: '#content',

  initialize: function(options) {
    this.router = options.router;

    // Listen for the route event that fires after the route callback completes
    this.router.once('route', this.onRouteLoad, this);
  },

  // Views are created inside router callbacks. The "route" event
  // fires after the route callback (where this view is created)
  // has completed. We auto-render when that happens, and then set
  // up a handler to remove the view on subsequent "route" events.
  onRouteLoad: function() {
    var self = this;

    // When we encounter this event, the route has loaded. Auto-render:
    // use setTimeout to remove the render from the synchronous "route" event
    // listener chain, so that we can be sure the view will not render until
    // any prior RouteViews have been cleaned up
    setTimeout(function() {
      self.render();
    }, 10);

    // On any subsequent "route" event, remove this view. (Any subsequent "route"
    // event means we are leaving the displayed route.)
    this.listenTo(this.router, 'route', this.remove);
  },

  remove: function() {
    console.log('cleaning up view ' + this.viewName);

    // Clean up Backbone listeners
    this.stopListening();

    // Clean up DOM
    this.$el.empty();
  }
});

module.exports = RouteView;
