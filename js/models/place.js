var Place = Ember.Object.extend({
  name: null,
  image: null,

  country: null,
  state: null,
  city: null,
  street: null,
  gps: null,

  tags: null,

  isScenic: false,
  isHistoric: false,
  isCultural: false,

  author: null
});

module.exports = Place;

