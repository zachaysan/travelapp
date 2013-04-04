var Place = DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),

  country: DS.attr('string'),
  state: DS.attr('string'),
  city: DS.attr('string'),
  street: DS.attr('string'),
  gps: DS.attr('string'),

  tags: DS.attr('string'),

  author: DS.attr('string')
});

module.exports = Place;

