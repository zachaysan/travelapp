var SignupRoute = Ember.Route.extend({
  setupController: function(controller) {
    // If already a user logged in, redirect to index page
    var user = Parse.User.current();
    if (user) {
      this.transitionTo('index');
    }

    controller.setProperties({
      "email": "",
      "password": "",
      "errorMessage": ""
    });
  }
});

module.exports = SignupRoute;
