var NewPlaceDialogController = Ember.Controller.extend({
  name: null,
  country: null,
  image: null,

  errorMessage: null,
  isProcessing: false,

  createPlace: function() {
    var Place = Parse.Object.extend("Place");
    var place = new Place();

    place.set("name", this.get("name"));
    place.set("country", this.get("country"));

    that = this;
    place.save(null, {
      success: function(gameScore) {
        // TODO
      },
      error: function(gameScore, error) {
        that.set("errorMessage", error.message);
      }
    });
  }
});

module.exports = NewPlaceDialogController;