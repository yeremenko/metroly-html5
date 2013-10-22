/*global define */

define(['jquery', 'backbone', 'domReady', 'appState'], function ($, Backbone, domReady, appState) {
  "use strict";

  domReady(function () {
    require(['metrolyUi']);
  });

  var Router, self = this;

  Router = Backbone.Router.extend({
    routes: {
      'buses/:bus': 'selectBus',
      'bus/:bus/:dir': 'selectDirection',
      '*default': 'default'
    }
  });

  Router.initialize = function () {

    appState.init(function () {

      console.log('Storage settings: ', appState.getSettings());
      console.log('Storage buses: ', appState.getBuses());

      console.log('Before requiring APP');

      require(['application'], function (App) {
        console.log('App required');
        var app = new App();
        app.selectBus('b63');

        Backbone.history.start({pushState: false});
      });
      console.log('After requiring APP');
    });
  };

  return Router;
});




