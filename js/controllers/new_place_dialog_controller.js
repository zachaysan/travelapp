var NewPlaceDialogController = Ember.Controller.extend({
  name: 'test',
  isProcessing: "true",

  createPlace: function() {
    console.log("do stuff");
  }
});

module.exports = NewPlaceDialogController;