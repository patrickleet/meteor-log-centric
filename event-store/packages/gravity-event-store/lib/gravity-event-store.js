var GravityEventStore = function(options) {
  var self = this;

  options = options || {};

  console.log('creating gravity collections');
  this.events = new Meteor.Collection('gravity.events');
};

GravityEventStore.prototype = {
  constructor: GravityEventStore
};

EventStore = new GravityEventStore();

Meteor.methods({
  gravitySend: function(event) {
    console.log('inserting event: ' + event);
    event.received = new Date();

    EventStore.events.insert(event);
  }
});