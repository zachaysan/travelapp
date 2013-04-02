var SignupRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set("email", "");
    controller.set("password", "");
    controller.set("errorMessage", "");
  }
});

module.exports = SignupRoute;
