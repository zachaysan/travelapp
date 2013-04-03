var NewPlaceDialogController = Ember.Controller.extend({
  name: 'test',
  isProcessing: false,

  createPlace: function() {
    console.log("do stuff");
  }
});

module.exports = NewPlaceDialogController;