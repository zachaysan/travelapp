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
      // show new event dialog only if logged in
      if (Parse.User.current()) {
        this.render('newPlaceDialog', {into: 'application', outlet: 'modalOutlet'});
      } else {
        this.transitionTo('login');
      }
    },

    hideNewEventDialog: function() {
      // TODO remove need for empty template
      this.render('emptyTemplate', {into: 'application', outlet: 'modalOutlet'});
    }
  }
});

module.exports = ApplicationRoute;
