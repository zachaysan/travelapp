var ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Sets the logged in status
    var user = Parse.User.current();
    if (user) {
      controller.set("currentUser", true);
    }
  },

  events: {
    showNewEventDialog: function() {
      this.render('newPlaceDialog', {into: 'application', outlet: 'modalOutlet'});
    },

    hideNewEventDialog: function() {
      this.render('emptyTemplate', {into: 'application', outlet: 'modalOutlet'});
    }
  }
});

module.exports = ApplicationRoute;
