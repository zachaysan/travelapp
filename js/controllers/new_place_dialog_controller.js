var NewPlaceDialogController = Ember.ObjectController.extend({
  errorMessage: null,
  isProcessing: false,

  init: function() {
    this._super();
    this.set('content', App.Place.createRecord());
  },

  createPlace: function() {
    var Place = Parse.Object.extend("Place");
    var place = new Place();

    place.set("name", this.get("name"));
    place.set("country", this.get("country"));
    place.set("image", this.get("image"));

    that = this;
    place.save(null, {
      success: function(gameScore) {
        // Create a new black place
        that.set("content", App.Place.createRecord());
      },
      error: function(gameScore, error) {
        that.set("errorMessage", error.message);
      }
    });
  },

  addImage: function() {
    this.set("image", "http://2.bp.blogspot.com/-ujddJNQ7hBU/T6LKuxhQsLI/AAAAAAAAFNU/RwdvAUH-D7c/s1600/mountains-wallpaper-6.jpg");
  },

  removeImage: function() {
    this.set("image", null);
  }
});

module.exports = NewPlaceDialogController;