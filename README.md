# RouteView concept demo

This is an example of how a Router-aware View constructor can be used to simplify the process of view cleanup as a user navigates through the application.

The [RouteView](src/route-view.js) constructor can be extended to create a view which takes a `router` as an options parameter. Any View extended from `RouteView` just has to worry about its own internal rendering, template, models, etcetera; but the instance itself will auto-render when the provided router sends its first "route" event, and will self-destruct on the second "route" event it encounters.

In bullet form:

- Every route creates a new RouteView
- Each RouteView instance listens to the router for "route" events
- On the first route event a view receives (which fires after the router
  callback that instantiates the view), the route view will auto-render
- On any subsequent "route" event, that route view will self-destruct
  (because a second "route" event means we are leaving the route for which
  that RouteView instance applies)
