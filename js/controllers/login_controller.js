var LoginController = Ember.Controller.extend({
  needs: "application",
  applicationBinding: "controllers.application",

  email: null,
  password: null,
  errorMessage: null,

  login: function() {
    this.set("errorMessage", null);
    that = this;

    Parse.User.logIn(this.get("email"), this.get("password"), {
      success: function(user) {
        that.set("application.currentUser", true);
        that.transitionToRoute('index');
      },
      error: function(user, error) {
        that.set("errorMessage", "Nope. Try again.")
      }
    });
  }
});

module.exports = LoginController;