var ApplicationController = Ember.Controller.extend({

  test: function() {
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}, {
      success: function(object) {
        alert("yay! it worked");
      }
    });
  }
});

module.exports = ApplicationController;