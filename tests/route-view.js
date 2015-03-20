'use strict';

var chai = require('chai');
var _ = require('underscore');
var Backbone = require('backbone');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
// Backbone.$ = require('jquery');

describe('RouteView', function() {
  var RouteView;
  var oldEnsureElement;

  beforeEach(function() {
    RouteView = require('../src/route-view');
    oldEnsureElement = Backbone.View.prototype._ensureElement;
    Backbone.View.prototype._ensureElement = function() {};
  });

  afterEach(function() {
    // Restore old element
    Backbone.View.prototype._ensureElement = oldEnsureElement;
  });

  describe('initialize', function() {
    it('sets a router property from options', function() {
      var mockRouter = new Backbone.Router({});
      var v = new RouteView({
        router: mockRouter
      });
      expect( v.router ).to.equal( mockRouter );
    });

    // it('binds an event listener to the "route" event', function() {
    //   var mockRouter = new Backbone.Router({});
    //   var v = new RouteView({
    //     router: mockRouter
    //   });
    //   sinon.spy(v, 'onRouteLoad');
    //   expect(v.onRouteLoad).not.to.have.been.called;
    //   v.router.trigger('route');
    //   expect(v.onRouteLoad).to.have.been.calledOnce;
    //   v.router.trigger('route');
    //   // Should only fire once, since it's bound with "once"
    //   expect(v.onRouteLoad).to.have.been.calledOnce;
    // });

  });

  describe('remove()', function() {

    it('is a method', function() {
      var mockRouter = new Backbone.Router({});
      var v = new RouteView({
        router: mockRouter
      });

      expect( v.remove ).to.exist;
      expect( v.remove ).to.be.a('function');
    });

    it('stops listening and empties DOM on remove', function() {
      var mockRouter = new Backbone.Router({});
      var v = new RouteView({
        router: mockRouter
      });

      // Mock out the DOM node
      v.$el = {
        empty: function() {}
      };

      sinon.spy(v.$el, 'empty');
      sinon.spy(v, 'stopListening');

      // Tabula rasa
      expect(v.stopListening).not.to.have.been.called;
      expect(v.$el.empty).not.to.have.been.called;

      v.remove();

      // Tabula written-on (is that proper Latin?)
      expect(v.stopListening).to.have.been.calledOnce;
      expect(v.$el.empty).to.have.been.calledOnce;
    });

  });

});
