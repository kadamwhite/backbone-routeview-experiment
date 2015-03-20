'use strict';

// Access Backbone
var Backbone = require( 'backbone' );
// Tell Backbone where to find jQuery
Backbone.$ = require( 'jquery' );
// Access Underscore (from our code)
var _ = require( 'underscore' );

var App = {};

// Load our router, which handles initializing views
App.router = require( './src/router' );

// NavigationView wraps click events to navigate between views
var NavigationView = require( './src/navigation-view' );
App.navigationView = new NavigationView({
  router: App.router
});

Backbone.history.start();
