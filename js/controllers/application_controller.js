var ApplicationController = Ember.Controller.extend({
  currentUser: false, // if a current user logged in

  logOut: function() {
    Parse.User.logOut();
    this.set("currentUser", false);
  },

  addPlace: function() {
    var newPlaceDialogView = App.NewPlaceDialogView.create({
      controller: App.NewPlaceDialogController
    });
    newPlaceDialogView.append();
  }
});

module.exports = ApplicationController;