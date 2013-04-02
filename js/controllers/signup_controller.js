var SignupController = Ember.Controller.extend({
  needs: "application",
  applicationBinding: "controllers.application",

  email: null,
  password: null,
  errorMessage: null,

  createAccount: function() {
    this.set("errorMessage", null);

    var user = new Parse.User();
    user.set("username", this.get("email"));
    user.set("email", this.get("email"));
    user.set("password", this.get("password"));

    var that = this;
    user.signUp(null, {
      success: function(user) {
        that.set("application.currentUser", true);
        that.transitionTo('index');
      },
      error: function(user, error) {
        switch(error.code) {
          case -1:
            that.set("errorMessage", "You are missing some information");
          break;

          case 202:
            that.set("errorMessage", "That email address is already in use");
          break;

          case 125:
            that.set("errorMessage", "You need a real email address");
          break;
        }
      }
    });
  }
});

module.exports = SignupController;