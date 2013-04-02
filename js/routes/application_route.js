var ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Sets the logged in status
    var user = Parse.User.current();
    if (user) {
      controller.set("currentUser", true);
    }
  }
});

module.exports = ApplicationRoute;
