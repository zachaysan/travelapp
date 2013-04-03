var NewPlaceDialogView = Ember.View.extend({
  templateName: 'NewPlaceDialog',

  didInsertElement: function() {
    this.$().addClass('fadein');
    this.$().find('.dialog').position({
      my: "center center-50",
      at: "center",
      of: ".dialogshadow"
    });
  },

  closeDialog: function() {
    this.remove();
  }
});

module.exports = NewPlaceDialogView;